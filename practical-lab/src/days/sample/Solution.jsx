import { useState } from "react";

export default function Solution() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Count / 카운트: <b>{count}</b>
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
