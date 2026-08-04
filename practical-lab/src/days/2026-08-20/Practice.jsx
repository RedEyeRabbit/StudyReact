import { Link, MemoryRouter, Route, Routes, useParams } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>🏠 Home</h2>
      <Link to="/users/1">View user 1</Link>
    </div>
  );
}

function UserPage() {
  // TODO 1: read "id" from useParams() instead of this placeholder
  const id = "?";
  return <h2>👤 User #{id}</h2>;
}

export default function Practice() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* TODO 2: add a <Route> for "/users/:id" rendering <UserPage /> */}
      </Routes>
    </MemoryRouter>
  );
}
