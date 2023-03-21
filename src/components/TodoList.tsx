
import styled from "@emotion/styled";
import React, { useCallback, useState } from "react";
import TodoItem from "./TodoItem";

export type Todo = {
    id: string,
    label:string,
    checked: boolean,
}
interface TodoListProps {
    todos :Todo[]
}
const List = styled.ul({
    width: "100%",
    listStyle: "none",
  });

const TodoList = ({todos}:TodoListProps ) =>{
    const [items, setItems] = useState(todos);

    const handleOnChange = useCallback((checked:boolean, id:string)=>{
        const todoList = [...todos];
        const selectedItem = todoList.find(item=>item.id === id);
        selectedItem.checked = checked;
        setItems(todoList);
    },[todos])

    return <List>
        {items.map((item, index)=>(
            <TodoItem key = {index} id={item.id} label={item.label} checked={item.checked} onChange={handleOnChange}></TodoItem>
        ))}
    </List>
}

export default TodoList;