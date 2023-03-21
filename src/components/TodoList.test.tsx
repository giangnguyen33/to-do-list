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
    const item1 = screen.getByTestId(`todo-item-${todos[0].id}`);
    expect(item1).toHaveTextContent('Buy groceries');
    expect(getByRole(item1, 'checkbox')).not.toBeChecked()

    const item2 = screen.getByTestId(`todo-item-${todos[1].id}`);
    expect(item2).toHaveTextContent( "Reboot computer");
    expect(getByRole(item2, 'checkbox')).not.toBeChecked()

    const item3 = screen.getByTestId(`todo-item-${todos[2].id}`);
    expect(item3).toHaveTextContent( "Ace CoderPad interview");
    expect(getByRole(item3, 'checkbox')).toBeChecked()
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