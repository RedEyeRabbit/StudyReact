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
