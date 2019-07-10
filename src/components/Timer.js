import React from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
  position: absolute;
  top: 25vh;
  left: calc(70%);
  transform: translateX(-25vh);
`;

const TimerCounter = styled.div`
  width: 50vh;
  height: 50vh;
  background: #ff4384;
  border-radius: 100%;
`;

const Timer = React.memo(() => {
  return (
    <TimerContainer>
      <TimerCounter />
    </TimerContainer>
  );
});

export default Timer;
