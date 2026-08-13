import { useState } from "react";

function Hover({ render }) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{ height: 100, border: "1px dashed #999", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      {/* TODO: call render(hovering) here */}
    </div>
  );
}

export default function Practice() {
  return (
    <Hover
      render={(hovering) => (
        <p>{hovering ? "👀 Hovering!" : "Move your mouse here"}</p>
      )}
    />
  );
}
