import React from 'react';
import './App.css';
import styled from '@emotion/styled';
import TodoList from './components/TodoList';

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


const App = () =>{
  return (
    <Wrapper>
      <Header>Todo List</Header>
      <TodoList></TodoList>
    </Wrapper>
  );
}

export default App;
