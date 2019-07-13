import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startTimer } from "../reducers/timerReducer";

const TimerContainer = styled.div`
  position: absolute;
  top: 25vh;
  left: calc(65%);
  transform: translateX(-25vh);

  .stop {
    font-size: 24px;
    color: #fff;
    position: absolute;
    transform: translate(32vh, -20vh);
    z-index: 100;
    font-size: 24px;
    color: ${({ play }) => (play ? "#ff4384" : "#fff")};
    cursor: pointer;
  }
`;

const TimerCounter = styled.div`
  position: relative;
  width: 50vh;
  height: 50vh;
  background: ${({ play }) => (play ? "#fff" : "#ff4384")};
  border-radius: 100%;
  z-index: 100;
  border: 4px solid ${({ play }) => (play ? "#ff4384" : "#fff0")};

  .material-icons {
    position: absolute;
    top: 25vh;
    left: 25vh;
    font-size: 8rem;
    color: ${({ play }) => (play ? "#ff4384" : "#fff")};
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
