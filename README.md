# StudyReact

Daily 30–40 minute React study log, written in English and Korean.
매일 30~40분 분량의 React 학습 기록입니다 (영어/한글 병기).

## Getting started / 시작하기

### 1. Clone / 저장소 받기

```bash
git clone <this-repo-url>
cd StudyReact
```

### 2. Browser playground pages — no install needed / 설치 불필요

Every day's lesson/practice/answer pages (`index.html`, `practice.html`,
`answer.html` under `/YYYY/MM/DD/`) are plain static HTML — nothing to
install. Just open `index.html` (the home page) in a browser, or serve the
repo root with any static file server for best results, since some browsers
restrict scripts when opened directly via `file://`:

일자별 학습/실습/답안 페이지(`/년도/월/일자/`의 `index.html`,
`practice.html`, `answer.html`)는 순수 정적 HTML이라 설치가 필요 없습니다.
루트의 `index.html`(홈페이지)을 브라우저로 바로 열거나, 아래처럼 로컬 정적
서버로 띄우면 더 안정적으로 동작합니다 (일부 브라우저는 `file://`로 직접
열었을 때 스크립트를 제한합니다):

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

### 3. Practical Lab — real Node.js project / 실제 Node.js 프로젝트

```bash
cd practical-lab
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`). See
[`practical-lab/README.md`](./practical-lab/README.md) for details.
Vite가 출력하는 주소(기본 `http://localhost:5173`)를 열어주세요. 자세한
내용은 [`practical-lab/README.md`](./practical-lab/README.md)를 참고하세요.

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
- Every level — Beginner/초급 through Practical/실전 — can be practiced two
  ways: the zero-setup browser playground above (no `import` needed —
  React/ReactDOM are provided as globals), or
  [`practical-lab/`](./practical-lab/README.md), a real Node.js + Vite
  project where real `import` statements, npm packages, and HMR all work
  like a production setup. Days with a matching lab exercise are marked
  🧪 on the home page tree.
- 초급부터 실전까지 모든 레벨은 두 가지 방식으로 실습할 수 있습니다: 별도
  설치가 필요 없는 브라우저 플레이그라운드(React/ReactDOM이 전역 변수로
  제공되어 `import` 불필요), 또는 [`practical-lab/`](./practical-lab/README.md)
  — 진짜 `import` 문, npm 패키지, HMR이 실제 프로덕션 개발과 동일하게
  동작하는 Node.js + Vite 프로젝트입니다. Lab에 해당 실습이 등록된 일자는
  홈페이지 트리에 🧪로 표시됩니다.
- Each page shows **study time elapsed / current time** in the top-right
  corner. 각 페이지 우측 상단에는 **공부진행시간 / 현재시각**이 표시됩니다.

## Curriculum / 커리큘럼

Four levels, in order — study always starts at Beginner Day 1 and
progresses level by level. Each day is one 30–40 minute lesson.
네 단계로 구성되며, 항상 초급 1일차부터 시작해 순서대로 진행합니다. 하루
분량은 30~40분 학습 1회입니다.

| Level / 레벨 | Focus / 내용 | Est. lessons / 예상 강의수 |
| --- | --- | --- |
| **Beginner / 초급** | React basics: JSX, components & props, state & events (`useState`), conditional rendering, lists & keys, forms, intro to side effects (`useEffect`).<br/>React 기초: JSX, 컴포넌트와 props, state와 이벤트(`useState`), 조건부 렌더링, 리스트와 key, 폼 처리, side effect 입문(`useEffect`). | ~10일 |
| **Intermediate / 중급** | Hooks in depth: `useEffect` patterns, custom hooks, Context API, `useReducer`, refs, basic performance (`memo`/`useMemo`/`useCallback`), fetching data, routing (React Router).<br/>훅 심화: `useEffect` 패턴, 커스텀 훅, Context API, `useReducer`, ref, 기본 성능 최적화(`memo`/`useMemo`/`useCallback`), 데이터 fetching, 라우팅(React Router). | ~10일 |
| **Advanced / 고급** | Global state management, code splitting & lazy loading, advanced patterns (compound components, render props, HOCs), TypeScript with React, accessibility, testing (React Testing Library).<br/>전역 상태 관리, 코드 스플리팅/지연 로딩, 고급 패턴(compound component, render props, HOC), TypeScript와 React, 접근성, 테스트(React Testing Library). | ~8일 |
| **Practical / 실전** | End-to-end mini project: planning, API/auth integration, deployment, CI/CD, a portfolio-ready app built with the Node.js Practical Lab.<br/>엔드투엔드 미니 프로젝트: 기획, API/인증 연동, 배포, CI/CD, Practical Lab(Node.js)으로 만드는 포트폴리오용 앱. | ~7일 |
| **Total / 총계** | | **~35일 (예상)** |

These counts are a planned estimate and may shift as the curriculum grows —
only days that actually exist show up in the home page tree.
위 강의수는 계획 단계의 예상치이며 커리큘럼이 진행되면서 조정될 수
있습니다 — 홈페이지 트리에는 실제로 만들어진 일자만 표시됩니다.

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