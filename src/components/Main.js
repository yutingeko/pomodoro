import React from "react";
import styled from "styled-components";
import Timer from "./Timer";
const Main = () => {
  const StyledMain = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    background: #ffedf7;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;

    .main-nav {
      width: 30%;
      height: 100%;
      background: #003164;
    }
  `;
  return (
    <StyledMain>
      <Timer />
      <div className="main-nav" />
    </StyledMain>
  );
};

export default Main;
