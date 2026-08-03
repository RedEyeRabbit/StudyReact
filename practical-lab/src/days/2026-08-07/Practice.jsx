import { useEffect, useState } from "react";

export default function Practice() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    // TODO 1: start an interval that increases seconds by 1 every 1000ms
    // TODO 2: return a cleanup function that clears the interval
  }, [running]);

  return (
    <div>
      <p>⏱ {seconds}s</p>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
}
