// A stand-in for a genuinely heavy component (a chart library, etc).
// Because this lives in its own file and is loaded via a dynamic
// import(), Vite bundles it into a separate chunk — open your browser's
// Network tab and watch it get fetched only after you click "Load chart".
export default function HeavyChart() {
  return <div>📊 (pretend this is a heavy chart library)</div>;
}
