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
      // TODO 1: if !debouncedQuery, setUser(null), setLoading(false), return.
      // Otherwise: setLoading(true), await searchUser(debouncedQuery),
      // and if !ignore, setUser(result) + setLoading(false).
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

  // TODO 2: set "content" to one of four things based on
  // query / loading / user:
  //   no query        -> <p>Type a username (try octocat, torvalds, gaearon)</p>
  //   loading          -> <p>Searching...</p>
  //   query but !user  -> <p>No user found.</p>
  //   user found       -> a card showing user.avatar, user.name, user.bio
  let content = null;

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

export default function Practice() {
  return <UserSearchApp />;
}
