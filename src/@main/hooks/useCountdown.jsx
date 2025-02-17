import { useEffect, useRef, useState } from 'react';

const THRESHOLD_TIME = 1000;

export const useCountdown = (seconds) => {
  const [counter, setCounter] = useState(seconds);
  const [isOverflow, setIsOverflow] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const currentTimer = useRef();

  const startTimer = () => {
    setIsOverflow(false);
    setIsCounting(true);
    currentTimer.current = setInterval(() => {
      setCounter((current) => current - 1);
    }, THRESHOLD_TIME);
  };

  const resetTimer = () => {
    clearInterval(currentTimer.current);
    setCounter(seconds);
    setIsCounting(false);
  };

  useEffect(() => {
    return () => clearInterval(currentTimer.current);
  }, []);

  useEffect(() => {
    if (!counter > 0) {
      setIsOverflow(true);
      resetTimer();
    }
  }, [counter]);

  return {
    isCounting,
    startTimer,
    resetTimer,
    counter,
    isOverflow,
  };
};
