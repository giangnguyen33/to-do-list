
import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";

export const LOCAL_TODOS_KEY = 'todoItems';

export const initialData: Todo[] = [
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

export type Todo = {
    id: string,
    label:string,
    checked: boolean,
}

const List = styled.ul({
    width: "100%",
    listStyle: "none",
  });

const TodoList = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem(LOCAL_TODOS_KEY);
        if (data === undefined || data ===null) {
            setItems(initialData)  
        } else {
            setItems(JSON.parse(data));
        }
      }, []);
    
    
    const handleOnChange = useCallback((checked:boolean, id:string)=>{
        const todoList = [...items];
        const selectedItem = todoList.find(item=>item.id === id);
        if(selectedItem) {
            selectedItem.checked = checked;
        }
       
        setItems(todoList);
        localStorage.setItem(LOCAL_TODOS_KEY, JSON.stringify(items));
    },[items])

    return <List>
        {items && items.map((item, index)=>(
            <TodoItem key = {index} id={item.id} label={item.label} checked={item.checked} onChange={handleOnChange}></TodoItem>
        ))}
    </List>
}

export default TodoList;