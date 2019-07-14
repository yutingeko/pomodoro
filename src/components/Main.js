import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Timer from "./Timer";
import CountDown from "./CountDown";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import BasicLayout from "./BasicLayout";
import NavList from "./NavList";
import { completeTodo, moveToFirst } from "../reducers/todoReducer";

const FirstTodo = ({ todo, completeTodo }) => {
  return todo ? (
    <TodoItem data={todo} completeTodo={completeTodo} specialStyle={true} />
  ) : null;
};

const StyledMain = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background: #ffedf7;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const MainInfo = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin-left: 60px;

  > div {
    margin-bottom: 8rem;
  }
`;

const Nav = styled.div`
  position: absolute;
  right: 2rem;

`;

const Main = ({ todos, completeTodo, moveToFirst }) => {
  return (
    <StyledMain>
      <MainInfo>
        <TodoInput />
        <div>
          <FirstTodo todo={todos[0]} completeTodo={completeTodo} />
          <CountDown />
        </div>
        <div>
          <TodoList
            todos={todos.filter((item, index) => !!index)}
            withoutCompleted={true}
            completeTodo={completeTodo}
            moveToFirst={moveToFirst}
            limit="3"
          />
        </div>
      </MainInfo>
      <Timer />
      <BasicLayout width="35%">
        <Nav>
          <NavList color="#fff" />
        </Nav>
      </BasicLayout>
    </StyledMain>
  );
};

export default connect(
  state => ({
    todos: state.todo
  }),
  {
    completeTodo,
    moveToFirst
  }
)(Main);
