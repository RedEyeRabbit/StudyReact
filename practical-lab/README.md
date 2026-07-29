# StudyReact — Practical Lab (Node.js)

A real Node.js + Vite + React project, available for **every level**
(Beginner/초급 through Practical/실전) alongside the browser playground
used in each day's `practice.html`. Unlike that playground — which only
transforms JSX, not ES modules — this project uses a real bundler, so
`import` statements, npm packages, and hot module reload (HMR) all work
exactly like a production React setup.

**모든 레벨**(초급~실전)에서 각 일자의 `practice.html` 브라우저
플레이그라운드와 함께 사용할 수 있는 진짜 Node.js + Vite + React
프로젝트입니다. 그 플레이그라운드는 JSX만 변환하고 ES 모듈은 변환하지
않는 반면, 이 프로젝트는 실제 번들러(Vite)를 사용하므로 `import` 문, npm
패키지 설치, HMR(핫 리로드)이 실제 프로덕션 React 개발과 동일하게
동작합니다.

## Setup / 시작하기

```bash
cd practical-lab
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).
Vite가 출력하는 주소(기본 `http://localhost:5173`)를 브라우저에서 열어주세요.

## Checking your code works / 코드가 제대로 동작하는지 확인하기

- `npm run dev` — live dev server with HMR; edit a file and the browser
  updates instantly. 파일을 수정하면 브라우저가 즉시 갱신됩니다.
- `npm run build` — production build; fails loudly on syntax/import errors,
  a good final check. 문법/임포트 오류가 있으면 빌드가 실패하므로 최종
  점검용으로 좋습니다.
- In the running app, use the **Day** dropdown to pick an exercise and the
  **Practice / Solution** buttons to compare your code against the model
  answer. 앱 화면에서 **Day** 드롭다운으로 실습을 고르고, **Practice /
  Solution** 버튼으로 정답과 비교할 수 있습니다.

## Adding a new day / 새 일자 추가하기

1. Create `src/days/<day-id>/Practice.jsx` (starter code with `// TODO`
   comments) and `src/days/<day-id>/Solution.jsx` (model answer).
2. Register it in [`src/days/manifest.js`](./src/days/manifest.js).
3. Pick it from the Day dropdown in the running app.

## Why this exists / 왜 필요한가요

The `Cannot use import statement outside a module` error shows up if you
write real `import` syntax in the browser playground — that playground only
transforms JSX, not ES modules, and React/ReactDOM are provided as plain
globals there instead. This lab is the fix for wanting real `import`s and a
real way to verify your code runs: it's an actual bundled Node.js project.

브라우저 플레이그라운드에 `import` 문을 쓰면 `Cannot use import statement
outside a module` 에러가 나는데, 그 플레이그라운드는 JSX만 변환할 뿐 ES
모듈은 변환하지 않고 React/ReactDOM을 전역 변수로 제공하기 때문입니다. 이
랩은 진짜 `import`와, 코드가 실제로 동작하는지 확실히 확인할 수 있는 방법이
필요할 때를 위한 해결책입니다 — 실제로 번들링되는 Node.js 프로젝트입니다.
