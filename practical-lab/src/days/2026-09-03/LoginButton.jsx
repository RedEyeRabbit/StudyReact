import { useState } from "react";

export default function LoginButton() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <button onClick={() => setLoggedIn(!loggedIn)}>
      {loggedIn ? "Log out" : "Log in"}
    </button>
  );
}
