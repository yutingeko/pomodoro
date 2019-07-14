import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Timer from "./Timer";
import CountDown from "./CountDown";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
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
  padding: 20px;
  margin-left: 60px;

  > div {
    margin-bottom: 10rem;
  }
`;

const Title = styled.span`
  position: absolute;
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  bottom: 100px;
  right: 0;
  transform: rotate(90deg);
`;

const Nav = styled.div`
  width: 35%;
  height: 100%;
  background: #003164;
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
      <Nav>
        <Title>POMODORO</Title>
      </Nav>
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
