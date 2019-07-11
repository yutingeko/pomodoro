import React, { useState, useEffect } from "react";
import styled from "styled-components";

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const CountDownNum = styled.span`
  font-size: 10rem;
  font-weight: bold;
  color: #ff4384;
`;

const CountDown = React.memo(({ duration = 25 }) => {
  const [countdown, setCountdown] = useState(duration * 60 * 1000);

  useEffect(() => {
    //  const timer = setInterval(() => {
    //     setCountdown((prev) => {
    //       if (prev - 1000 >= 0) {
    //         return prev - 1000;
    //       } else {
    //         clearInterval(timer);
    //         console.log('timeout')
    //         return 0;
    //       }
    //     } )
    //   }, 1000);
  }, []);
  return <CountDownNum>{millisToMinutesAndSeconds(countdown)}</CountDownNum>;
});

export default CountDown;
