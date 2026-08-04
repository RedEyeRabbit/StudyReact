import { useEffect, useState } from "react";

const ALL_USERS = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

function searchUsers(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ALL_USERS.filter((n) => n.toLowerCase().includes(query.toLowerCase())));
    }, 400);
  });
}

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    // TODO 1: schedule a setTimeout that calls setDebounced(value)
    // after "delay" ms
    // TODO 2: return a cleanup function that clears that timeout
  }, [value, delay]);

  return debounced;
}

function UserSearch() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 400);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function run() {
      if (!debouncedQuery) {
        setResults([]);
        return;
      }
      const data = await searchUsers(debouncedQuery);
      if (!ignore) setResults(data);
    }

    run();
    return () => {
      ignore = true;
    };
  }, [debouncedQuery]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a name..."
      />
      <ul>
        {results.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Practice() {
  return <UserSearch />;
}
