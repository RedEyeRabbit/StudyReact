import { useEffect, useRef, useState } from "react";

export default function Practice() {
  const inputRef = useRef(null);
  const previousRef = useRef("");
  const [text, setText] = useState("");

  useEffect(() => {
    // TODO 1: focus inputRef.current
  }, []);

  useEffect(() => {
    // TODO 2: store the current "text" into previousRef.current
  }, [text]);

  return (
    <div>
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Previous value: "{previousRef.current}"</p>
    </div>
  );
}
