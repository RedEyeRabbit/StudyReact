# StudyReact

Daily 30–40 minute React study log, written in English and Korean.
매일 30~40분 분량의 React 학습 기록입니다 (영어/한글 병기).

## How it works / 사용 방법

- Open [`index.html`](./index.html) — the home page shows a tree of tracks
  (Beginner/초급 → Intermediate/중급 → Advanced/고급 → Practical/실전), each
  containing the days studied so far. Study always starts at **Beginner Day
  1** and days are added in order.
- 홈페이지([`index.html`](./index.html))는 초급 → 중급 → 고급 → 실전 트랙을
  트리 형태로 보여줍니다. 학습은 항상 **초급 1일차**부터 시작하며, 이후
  순서대로 일자가 추가됩니다.
- Every studied day lives under `/<year>/<month>/<day>/` (e.g.
  `2026/07/29/`) and contains three linked pages:
  - `index.html` — the lesson / example screen (학습용, 예제 포함)
  - `practice.html` — hands-on practice with a live in-browser React
    playground (실습용)
  - `answer.html` — the model answer sheet (답안지)
- 공부한 모든 자료는 삭제되지 않고 그대로 남아있어 홈페이지 트리를 통해
  언제든 다시 찾아볼 수 있습니다.
- Each page shows **study time elapsed / current time** in the top-right
  corner. 각 페이지 우측 상단에는 **공부진행시간 / 현재시각**이 표시됩니다.

## Adding a new day / 새 일자 추가

1. Create `/<year>/<month>/<day>/` with `index.html`, `practice.html`,
   `answer.html` (copy an existing day as a template).
2. Append an entry to the matching level's `days` array in
   [`assets/curriculum.js`](./assets/curriculum.js) — the home page tree
   picks it up automatically.

## Notes / 참고

The live example/practice/answer playgrounds load React, ReactDOM and Babel
from a public CDN, so an internet connection is required to run the
in-browser code editor. 실시간 예제/실습/답안 플레이그라운드는 CDN에서
React, ReactDOM, Babel을 불러오므로 브라우저 내 코드 실행에는 인터넷 연결이
필요합니다.