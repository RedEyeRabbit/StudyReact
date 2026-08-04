import { useEffect, useRef, useState } from "react";

const MOCK_USERS = {
  octocat: { name: "The Octocat", bio: "GitHub mascot", avatar: "🐙" },
  torvalds: { name: "Linus Torvalds", bio: "Creator of Linux & Git", avatar: "🐧" },
  gaearon: { name: "Dan Abramov", bio: "Co-creator of Redux", avatar: "⚛️" },
};

function searchUser(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_USERS[username.toLowerCase()] || null);
    }, 500);
  });
}

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

function useUserSearch(query) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    let ignore = false;

    async function run() {
      if (!debouncedQuery) {
        setUser(null);
        setLoading(false);
        return;
      }
      setLoading(true);
      const result = await searchUser(debouncedQuery);
      if (!ignore) {
        setUser(result);
        setLoading(false);
      }
    }

    run();
    return () => {
      ignore = true;
    };
  }, [debouncedQuery]);

  return { user, loading };
}

function UserSearchApp() {
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");
  const { user, loading } = useUserSearch(query);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  let content;
  if (!query) {
    content = <p>Type a username (try octocat, torvalds, gaearon)</p>;
  } else if (loading) {
    content = <p>Searching...</p>;
  } else if (!user) {
    content = <p>No user found.</p>;
  } else {
    content = (
      <div>
        <p style={{ fontSize: 32 }}>{user.avatar}</p>
        <p><b>{user.name}</b></p>
        <p>{user.bio}</p>
      </div>
    );
  }

  return (
    <div>
      <input
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="GitHub username..."
      />
      {content}
    </div>
  );
}

export default function Solution() {
  return <UserSearchApp />;
}
