import { useState } from "react";

function LoginStatus({ isLoggedIn }) {
  return isLoggedIn ? <p>Welcome back! 👋</p> : <p>Please log in.</p>;
}

function UnreadBadge({ count }) {
  return count > 0 && <p>🔴 {count} unread</p>;
}

export default function Solution() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <LoginStatus isLoggedIn={isLoggedIn} />
      <UnreadBadge count={3} />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle login</button>
    </div>
  );
}
