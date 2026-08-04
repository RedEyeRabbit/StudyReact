import { useEffect, useState } from "react";

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "User #" + id, email: "user" + id + "@example.com" });
    }, 600);
  });
}

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    // TODO 1: define an async function "load" that sets loading to
    // true, awaits fetchUser(userId), and (only if !ignore) stores
    // the result with setUser and sets loading to false. Call it.

    return () => {
      ignore = true;
    };
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <p><b>{user.name}</b></p>
      <p>{user.email}</p>
    </div>
  );
}

export default function Practice() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <UserProfile userId={userId} />
      <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
        Switch user
      </button>
    </div>
  );
}
