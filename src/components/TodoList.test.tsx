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
        render(<TodoList ></TodoList>)
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
