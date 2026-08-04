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
  const { id } = useParams();
  return <h2>👤 User #{id}</h2>;
}

export default function Solution() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
    </MemoryRouter>
  );
}
