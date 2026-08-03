/* Curriculum manifest. Append a new day entry here every time a new
   day's material is created; the main page tree renders straight from
   this data, so past days remain permanently browsable.

   `labId`, when present, is the matching exercise id registered in
   practical-lab/src/days/manifest.js — every level (Beginner through
   Practical) can have a Node.js/real-import version of its practice,
   not just Advanced/Practical. */
window.CURRICULUM = {
  labPath: "practical-lab",
  levels: [
    {
      id: "beginner",
      name: { en: "Beginner", kr: "초급" },
      days: [
        {
          day: 1,
          date: "2026-07-29",
          title: { en: "What is React? & JSX Basics", kr: "React란 무엇인가? & JSX 기초" },
          path: "2026/07/29/index.html",
          labId: "2026-07-29",
        },
        {
          day: 2,
          date: "2026-07-30",
          title: { en: "Components & Props", kr: "컴포넌트와 Props" },
          path: "2026/07/30/index.html",
          labId: "2026-07-30",
        },
        {
          day: 3,
          date: "2026-07-31",
          title: { en: "State & Events (useState)", kr: "State와 이벤트 처리 (useState)" },
          path: "2026/07/31/index.html",
          labId: "2026-07-31",
        },
        {
          day: 4,
          date: "2026-08-03",
          title: { en: "Conditional Rendering", kr: "조건부 렌더링" },
          path: "2026/08/03/index.html",
          labId: "2026-08-03",
        },
      ],
    },
    {
      id: "intermediate",
      name: { en: "Intermediate", kr: "중급" },
      days: [],
    },
    {
      id: "advanced",
      name: { en: "Advanced", kr: "고급" },
      days: [],
    },
    {
      id: "practical",
      name: { en: "Practical", kr: "실전" },
      days: [],
    },
  ],
};
