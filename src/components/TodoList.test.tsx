import React from "react";
import { render , screen, getByRole, fireEvent} from "@testing-library/react"
import TodoList, { initialData, LOCAL_TODOS_KEY, Todo } from "./TodoList"
import { setLocalStorage } from "../setupTests";
import { v4 as uuid } from "uuid";


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

const clickOncheckBoxTodoItem = (todo: Todo)=> {
    const item = screen.getByTestId(`todo-item-${todo.id}`);
    const checkbox = getByRole(item, 'checkbox');
    fireEvent.click(checkbox);
}

describe('Todo List test',()=>{

  describe('when todo items data in localstorage',()=>{
    const todos = initialData;

    beforeEach(()=>{
        setLocalStorage(LOCAL_TODOS_KEY, undefined);
    })

    it('should render todoList from inital data if no data in localstorage',()=>{
        render(<TodoList></TodoList>)
        checkTodoItem(todos[0]);
        checkTodoItem(todos[1]);
        checkTodoItem(todos[2]);
      })
      
    it('should change status of checked  when click on checkbox' ,()=>{
        const item1 = todos[0];
        const item3 = todos[2];
        render(<TodoList ></TodoList>)
        clickOncheckBoxTodoItem(item1)
        checkTodoItem(item1);

        clickOncheckBoxTodoItem(item3)
        checkTodoItem(item3);
        
      })
  })

   describe('when todo items data exists in localstorage',()=>{
    const items = [ {
        id: uuid(),
        label: "Buy groceries",
        checked: true,
      }]
    beforeEach(()=>{
        setLocalStorage(LOCAL_TODOS_KEY, items);
    })
    it('should render todoList from inital data if no data in localstorage',()=>{
        render(<TodoList></TodoList>)
        checkTodoItem(items[0]);
      })
   })

})
