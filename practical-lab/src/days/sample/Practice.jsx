import { useState } from "react";

// TODO: make the button increment the counter by 1
// TODO: 버튼을 누르면 카운터가 1씩 증가하도록 만드세요
export default function Practice() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Count / 카운트: <b>{count}</b>
      </p>
      <button onClick={() => {}}>+1</button>
    </div>
  );
}
