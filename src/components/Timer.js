import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startTimer } from "../reducers/timerReducer";

const TimerContainer = styled.div`
  position: absolute;
  top: 32vh;
  left: calc(75vw);
  transform: translateX(-25vw);

  .stop {
    font-size: 24px;
    color: #fff;
    position: relative;
    z-index: 100;
    font-size: 24px;
    color: ${({ play }) => (play ? "#ff4384" : "#fff")};
    cursor: pointer;
    bottom: 10vw;
    left: 20vw;
    display: inline-block;
  }
`;

const TimerCounter = styled.div`
  position: relative;
  width: 30vw;
  height: 30vw;
  background: ${({ play }) => (play ? "#fff" : "#ff4384")};
  border-radius: 100%;
  z-index: 100;
  border: 4px solid ${({ play }) => (play ? "#ff4384" : "#fff0")};

  .material-icons {
    position: absolute;
    top: 15vw;
    left: 15vw;
    font-size: 8rem;
    color: ${({ play }) => (play ? "#ff4384" : "#fff")};
    transform: translate(-4rem, -4rem);
  }

  &:after {
    content: "";
    position: absolute;
    right: -1.5vw;
    top: -1.5vw;
    display: inline-block;
    width: 32vw;
    height: 32vw;
    border: 4px solid #ff4384;
    border-radius: 100%;
    z-index: 0;
  }
`;

const Timer = React.memo(({ startTimer, play }) => {
  const runTimer = () => {
    startTimer({
      duration: 25,
      flag: !play
    });
  };

  const stopTimer = e => {
    startTimer({
      duration: 25,
      flag: !play,
      reset: true
    });
  };

  return (
    <TimerContainer play={play}>
      <TimerCounter onClick={runTimer} play={play}>
        <i className="material-icons">
          {play ? "pause_circle_filled" : "play_circle_filled"}
        </i>
      </TimerCounter>
      <span className="stop" onClick={stopTimer}>
        &#9724;
      </span>
    </TimerContainer>
  );
});

export default connect(
  state => ({
    play: state.timer.flag
  }),
  {
    startTimer
  }
)(Timer);
