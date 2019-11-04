// @flow

import React, { useState, useEffect, useCallback } from "react";
import type { Data } from "../../types/formDataTypes.js";

type Props = {
  cardNum: string,
  cardType: string,
  firstName: string,
  lastName: string,
};

type State = {
  isShown: boolean,
  timerId?: TimeoutID,
  timerStart?: number,
};

export const useFormResult = (cardNum, cardType, firstName, lastName) => {
  const [isShown, setIsShown] = useState(false);
  const [timerId, setTimerId] = useState(undefined);
  const [timerStart, setTimerStart] = useState(undefined);

  const startTimer = useCallback(() => {
    let timerId = setTimeout(() => {
      setIsShown(false);
      setTimerId(undefined);
      setTimerStart(undefined);
      console.log("expired result");
    }, 5000);
    setIsShown(true);
    setTimerId(timerId);
    setTimerStart(Date.now);
  });

  useEffect(() => {
    if (!isShown) {
      return startTimer();
    }
  }, [cardType]);

  return { isShown };
};
