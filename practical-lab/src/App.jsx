import { useEffect, useState } from "react";
import { DAYS } from "./days/manifest.js";

function initialDayId() {
  const fromHash = window.location.hash.slice(1);
  return DAYS.some((d) => d.id === fromHash) ? fromHash : DAYS[0].id;
}

export default function App() {
  const [dayId, setDayId] = useState(initialDayId);
  const [mode, setMode] = useState("practice");

  // Same-document hash changes (address-bar edits, back/forward) don't
  // remount the app, so re-sync dayId whenever the hash changes.
  useEffect(() => {
    function onHashChange() {
      const id = window.location.hash.slice(1);
      if (DAYS.some((d) => d.id === id)) {
        setDayId(id);
        setMode("practice");
      }
    }
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const day = DAYS.find((d) => d.id === dayId);
  const Exercise = mode === "practice" ? day.Practice : day.Solution;

  function selectDay(id) {
    setDayId(id);
    setMode("practice");
    window.location.hash = id;
  }

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 640, margin: "40px auto", padding: "0 20px" }}>
      <h1>StudyReact — Practical Lab 🧪</h1>
      <p>
        Real Node.js + Vite + React environment — real <code>import</code>,
        real npm packages, real HMR.
      </p>
      <p>
        실제 Node.js + Vite + React 환경입니다 — 진짜 <code>import</code>,
        진짜 npm 패키지, 진짜 HMR(핫 리로드)이 동작합니다.
      </p>

      <div style={{ margin: "20px 0" }}>
        <label>
          Day / 일차:{" "}
          <select value={dayId} onChange={(e) => selectDay(e.target.value)}>
            {DAYS.map((d) => (
              <option key={d.id} value={d.id}>
                {d.title.en} / {d.title.kr}
              </option>
            ))}
          </select>
        </label>
        <div style={{ marginTop: 10 }}>
          <button onClick={() => setMode("practice")} disabled={mode === "practice"}>
            Practice / 실습
          </button>{" "}
          <button onClick={() => setMode("solution")} disabled={mode === "solution"}>
            Solution / 정답
          </button>
        </div>
      </div>

      <hr />
      <Exercise />
    </div>
  );
}
