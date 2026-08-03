import { useState } from "react";

// Day 4 (Beginner) — same task as 2026/08/03/practice.html, but here you
// write real import-capable code in a real Node.js project.

function LoginStatus({ isLoggedIn }) {
  // TODO 1: ternary — "Welcome back! 👋" if isLoggedIn, else "Please log in."
  return null;
}

function UnreadBadge({ count }) {
  // TODO 2: && — render "🔴 {count} unread" only when count > 0
  return null;
}

export default function Practice() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <LoginStatus isLoggedIn={isLoggedIn} />
      <UnreadBadge count={3} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle login</button>
    </div>
  );
}
