import SamplePractice from "./sample/Practice.jsx";
import SampleSolution from "./sample/Solution.jsx";
import Day20260729Practice from "./2026-07-29/Practice.jsx";
import Day20260729Solution from "./2026-07-29/Solution.jsx";
import Day20260730Practice from "./2026-07-30/Practice.jsx";
import Day20260730Solution from "./2026-07-30/Solution.jsx";
import Day20260731Practice from "./2026-07-31/Practice.jsx";
import Day20260731Solution from "./2026-07-31/Solution.jsx";
import Day20260803Practice from "./2026-08-03/Practice.jsx";
import Day20260803Solution from "./2026-08-03/Solution.jsx";

// Register every day's exercise here — all tracks (Beginner through
// Practical) can use this real Node.js environment, not just Advanced/Practical.
// 모든 트랙(초급~실전)의 일자별 실습을 여기에 등록하세요 — 고급/실전 전용이
// 아니라 어떤 레벨이든 이 실제 Node.js 환경을 사용할 수 있습니다.
export const DAYS = [
  {
    id: "sample",
    title: { en: "Sample — Node.js env check", kr: "샘플 — Node.js 환경 확인" },
    Practice: SamplePractice,
    Solution: SampleSolution,
  },
  {
    id: "2026-07-29",
    title: { en: "Day 1 (Beginner) — Profile component", kr: "1일차 (초급) — 프로필 컴포넌트" },
    Practice: Day20260729Practice,
    Solution: Day20260729Solution,
  },
  {
    id: "2026-07-30",
    title: { en: "Day 2 (Beginner) — Components & Props", kr: "2일차 (초급) — 컴포넌트와 Props" },
    Practice: Day20260730Practice,
    Solution: Day20260730Solution,
  },
  {
    id: "2026-07-31",
    title: { en: "Day 3 (Beginner) — State & Events", kr: "3일차 (초급) — State와 이벤트" },
    Practice: Day20260731Practice,
    Solution: Day20260731Solution,
  },
  {
    id: "2026-08-03",
    title: { en: "Day 4 (Beginner) — Conditional Rendering", kr: "4일차 (초급) — 조건부 렌더링" },
    Practice: Day20260803Practice,
    Solution: Day20260803Solution,
  },
];
