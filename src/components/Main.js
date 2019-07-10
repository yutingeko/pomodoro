import React from "react";
import styled from "styled-components";
const Main = () => {
  const StyledMain = styled.div`
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
      <div className="main-nav" />
    </StyledMain>
  );
};

export default Main;
