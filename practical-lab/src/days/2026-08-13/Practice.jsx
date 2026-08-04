import { useEffect, useState } from "react";

function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "User #" + id, email: "user" + id + "@example.com" });
    }, 600);
  });
}

function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    // TODO: define and call an async "load" function that sets
    // loading true, awaits fetchUser(userId), and (if !ignore)
    // stores the result with setUser + sets loading to false

    return () => {
      ignore = true;
    };
  }, [userId]);

  // TODO: return { user, loading } (this placeholder keeps it from
  // crashing before you finish the TODO above)
  return { user: null, loading: true };
}

function UserProfile({ userId }) {
  const { user, loading } = useUser(userId);

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
