import { useEffect, useRef, useState } from "react";

export default function Solution() {
  const inputRef = useRef(null);
  const previousRef = useRef("");
  const [text, setText] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    previousRef.current = text;
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
