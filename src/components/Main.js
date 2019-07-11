import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
import CountDown from "./CountDown";
import TodoInput from "./TodoInput";
const Main = () => {
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

    .main-nav {
      width: 35%;
      height: 100%;
      background: #003164;
    }
  `;
  return (
    <StyledMain>
      <div>
        <TodoInput />
        <CountDown />
      </div>
      <Timer />
      <div className="main-nav" />
    </StyledMain>
  );
};

export default Main;
