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

    async function load() {
      setLoading(true);
      const data = await fetchUser(userId);
      if (!ignore) {
        setUser(data);
        setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [userId]);

  return { user, loading };
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

export default function Solution() {
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
