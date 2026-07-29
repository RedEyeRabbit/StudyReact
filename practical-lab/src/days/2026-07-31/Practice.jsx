import { useState } from "react";

// Day 3 (Beginner) — same task as 2026/07/31/practice.html, but here you
// write real import-capable code in a real Node.js project.
export default function Practice() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      {/* TODO 1: button that increases count by 1 */}
      {/* TODO 2: button that decreases count by 1 */}
      {/* TODO 3: button that resets count to 0 */}
    </div>
  );
}
