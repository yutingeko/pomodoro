import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startTimer } from "../reducers/timerReducer";
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

  .material-icons {
    position: absolute;
    top: 25vh;
    left: 25vh;
    font-size: 8rem;
    color: #fff;
    transform: translate(-4rem, -4rem);
  }

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

const Timer = React.memo(({ startTimer }) => {
  const [play, setPlay] = useState(false);
  const runTimer = () => {
    startTimer({
      duration: 25,
      flag: !play
    });
    setPlay(!play);
  };

  return (
    <TimerContainer>
      <TimerCounter onClick={runTimer}>
        <i className="material-icons">play_circle_filled</i>
      </TimerCounter>
    </TimerContainer>
  );
});

export default connect(
  null,
  {
    startTimer
  }
)(Timer);
