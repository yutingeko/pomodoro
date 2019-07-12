import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startTimer } from "../reducers/timerReducer";

function millisToMinutesAndSeconds(millis) {
  if (!millis) {
    return "00:00";
  }
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const CountDownNum = styled.span`
  font-size: 10rem;
  font-weight: bold;
  color: #ff4384;
`;

const CountDown = React.memo(({ timerState, startTimer }) => {
  const { duration = 25, flag } = timerState || {};
  const [countdown, setCountdown] = useState(0);
  const handleCountDown = () => {
    setCountdown(prev => {
      if (prev - 1000 >= 0 && flag) {
        return prev - 1000;
      } else {
        startTimer({
          flag: false,
          duration: 0
        });
      }
    });
  };

  useEffect(() => {
    if (flag && duration) {
      setCountdown(duration * 60 * 1000);
    }
    const timer = flag && setInterval(handleCountDown, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timerState]);

  return <CountDownNum>{millisToMinutesAndSeconds(countdown)}</CountDownNum>;
});

export default connect(
  state => ({
    timerState: state.timer
  }),
  { startTimer }
)(CountDown);
