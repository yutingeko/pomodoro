import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import CountDown from "./CountDown";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const StyledMain = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  background: #ffedf7;
  width: 100vw;
  max-width: 968px;
  height: 100vh;
  margin: 0;
  padding: 0;

  .main-nav {
    width: 35%;
    height: 100%;
    background: #003164;
  }
`;

const MainInfo = styled.div`
  position: absolute;
  left: 0;
  margin-left: 30px;
`;

const Main = () => {
  return (
    <StyledMain>
      <MainInfo>
        <TodoInput />
        <CountDown />
        <TodoList />
      </MainInfo>
      <Timer />
      <div className="main-nav" />
    </StyledMain>
  );
};

export default Main;
