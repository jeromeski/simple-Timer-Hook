import Fragment, { useState } from 'react';
import useTimer from '../hooks/useTimer.tsx';

export default function Timer() {
  const { count, handleStart, handlePause, handleReset } = useTimer();

  return (
    <div>
      <p>Elapsed time: {count}</p>
      <button onClick={handleStart} className={'mr-2'}>
        start
      </button>
      <button onClick={handlePause} className={'mr-2'}>
        pause
      </button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
