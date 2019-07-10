import React from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  position: absolute;
  top: 25vh;
  left: calc(65%);
  transform: translateX(-25vh);
`;

const TimerCounter = styled.div`
  position: relative;
  width: 50vh;
  height: 50vh;
  background: #ff4384;
  border-radius: 100%;
  z-index: 100;

  &:after {
    content: "";
    position: absolute;
    right: -2.5vh;
    top: -2.5vh;
    display: inline-block;
    width: 54vh;
    height: 54vh;
    border: 4px solid #ff4384;
    border-radius: 100%;
    z-index: 0;
  }
`;

const Timer = React.memo(() => {
  return (
    <TimerContainer>
      <TimerCounter />
    </TimerContainer>
  );
});

export default Timer;
