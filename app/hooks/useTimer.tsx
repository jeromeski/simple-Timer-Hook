import { useState, useRef, useEffect, useCallback } from 'react';

export default function useTimer() {
  const [count, setCount] = useState(0);
  const intervalId = useRef<any | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const handlePause = useCallback(() => {
    setIsPaused(true);
  }, [setIsPaused]);

  const handleStart = useCallback(() => {
    setIsStart(true);
  }, [setIsStart]);

  const handleReset = useCallback(() => {
    setIsReset(true);
  }, [setIsReset]);

  useEffect(() => {
    if (isStart) {
      setIsReset(false);
      setIsPaused(false);
      intervalId.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    if (isPaused) {
      setIsStart(false);
      setIsReset(false);
      clearInterval(intervalId.current);
    }

    if (isReset) {
      setIsStart(false);
      setIsPaused(false);
      clearInterval(intervalId.current);
      setCount(0);
    }

    return () => clearInterval(intervalId.current);
  }, [isStart, isPaused, isReset]);

  return { handleStart, handlePause, handleReset, count };
}
