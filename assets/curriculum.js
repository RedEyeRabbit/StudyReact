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
        {
          day: 5,
          date: "2026-08-04",
          title: { en: "Lists & Keys", kr: "리스트와 Key" },
          path: "2026/08/04/index.html",
          labId: "2026-08-04",
        },
        {
          day: 6,
          date: "2026-08-05",
          title: { en: "Forms & Controlled Inputs", kr: "폼과 제어 컴포넌트" },
          path: "2026/08/05/index.html",
          labId: "2026-08-05",
        },
        {
          day: 7,
          date: "2026-08-06",
          title: { en: "Lifting State Up", kr: "State 끌어올리기" },
          path: "2026/08/06/index.html",
          labId: "2026-08-06",
        },
        {
          day: 8,
          date: "2026-08-07",
          title: { en: "useEffect & Side Effects", kr: "useEffect와 사이드 이펙트" },
          path: "2026/08/07/index.html",
          labId: "2026-08-07",
        },
        {
          day: 9,
          date: "2026-08-10",
          title: { en: "Styling in React", kr: "React에서 스타일링" },
          path: "2026/08/10/index.html",
          labId: "2026-08-10",
        },
        {
          day: 10,
          date: "2026-08-11",
          title: { en: "Mini Project: Todo List", kr: "미니 프로젝트: 할 일 목록" },
          path: "2026/08/11/index.html",
          labId: "2026-08-11",
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
