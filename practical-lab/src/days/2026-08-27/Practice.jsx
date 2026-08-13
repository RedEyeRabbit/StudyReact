import { Suspense, lazy, useState } from "react";

// TODO 1: create LazyChart with lazy(() => import("./HeavyChart.jsx"))
// (a REAL dynamic import — Vite splits HeavyChart.jsx into its own chunk)

export default function Practice() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Load chart</button>
      {/* TODO 2: when "show" is true, render <LazyChart /> wrapped in
          <Suspense fallback={<p>Loading chart...</p>}> */}
    </div>
  );
}
