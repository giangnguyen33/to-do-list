import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import TodoList, { Todo } from './components/TodoList';
import { v4 as uuid } from "uuid";

const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: 300,
});

const Header = styled.div({
  width: "100%",
  height: 150,
  fontSize: 60,
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

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

const App = () =>{
  return (
    <Wrapper>
      <Header>Todo List</Header>
      <TodoList todos={todos}></TodoList>
    </Wrapper>
  );
}

export default App;
