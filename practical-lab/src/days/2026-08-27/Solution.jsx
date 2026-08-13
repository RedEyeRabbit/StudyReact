import { Suspense, lazy, useState } from "react";

const LazyChart = lazy(() => import("./HeavyChart.jsx"));

export default function Solution() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Load chart</button>
      {show && (
        <Suspense fallback={<p>Loading chart...</p>}>
          <LazyChart />
        </Suspense>
      )}
    </div>
  );
}
