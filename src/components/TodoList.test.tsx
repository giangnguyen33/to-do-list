import React from "react";
import { render , screen, getByRole, fireEvent} from "@testing-library/react"
import TodoList, { Todo } from "./TodoList"
import { v4 as uuid } from "uuid";

const todos: Todo[] = [
    {
      id: uuid(),
      label: "Buy groceries",
      checked: false,
    },
    {
      id: uuid(),
      label: "Reboot computer",
      checked: false,
    },
    {
      id: uuid(),
      label: "Ace CoderPad interview",
      checked: true,
    },
  ];

describe('Todo List test',()=>{

  it('should render todoList',async()=>{
    render(<TodoList todos={todos}></TodoList>)
    checkTodoItem(todos[0]);
    checkTodoItem(todos[1]);
    checkTodoItem(todos[2]);
  })

  it('should change status of checked  when click on checkbox' ,async()=>{
    render(<TodoList todos={todos}></TodoList>)
    const item1 = screen.getByTestId(`todo-item-${todos[0].id}`);
    const checkbox1 = getByRole(item1, 'checkbox');
    fireEvent.click(checkbox1);
    expect(checkbox1).toBeChecked();

    const item3 = screen.getByTestId(`todo-item-${todos[2].id}`);
    const checkbox3= getByRole(item3, 'checkbox');
    fireEvent.click(checkbox3);
    expect(checkbox3).not.toBeChecked()
  })

})

const checkTodoItem = (todo: Todo)=> {
    const item = screen.getByTestId(`todo-item-${todo.id}`);
    expect(item).toHaveTextContent(todo.label);
    const checkbox = getByRole(item, 'checkbox');
    if(todo.checked) {
        expect(checkbox).toBeChecked();
    } else {
        expect(checkbox).not.toBeChecked();
    }
}
