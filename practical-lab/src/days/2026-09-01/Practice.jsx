import { useState } from "react";

function withLoading(Component) {
  return function WithLoading(props) {
    // TODO: if props.isLoading, return <p>⏳ Loading...</p>;
    // otherwise return <Component {...props} />
    return null;
  };
}

function UserList({ users }) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u}>{u}</li>
      ))}
    </ul>
  );
}

const UserListWithLoading = withLoading(UserList);

export default function Practice() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <button onClick={() => setLoading(!loading)}>Toggle loading</button>
      <UserListWithLoading isLoading={loading} users={["Alice", "Bob"]} />
    </div>
  );
}
