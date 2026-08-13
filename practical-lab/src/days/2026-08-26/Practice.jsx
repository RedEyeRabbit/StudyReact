import { useSyncExternalStore } from "react";

function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState: () => state,
    setState: (updater) => {
      // TODO 1: apply "updater" to "state" (it may be a function or a
      // partial object, like the live example), then call every
      // listener in "listeners"
    },
    subscribe: (listener) => {
      // TODO 2: add "listener" to "listeners", and return a function
      // that removes it
    },
  };
}

const counterStore = createStore({ count: 0 });

function useStore(store) {
  // TODO 3: return useSyncExternalStore(...) using this store's
  // subscribe and getState. This placeholder reads the state once but
  // won't update the screen when it changes — that's what you're fixing.
  return store.getState();
}

function CounterDisplay() {
  const state = useStore(counterStore);
  return <p>Count: {state.count}</p>;
}

function CounterButtons() {
  return (
    <div>
      <button onClick={() => counterStore.setState((s) => ({ count: s.count + 1 }))}>
        +1
      </button>{" "}
      <button onClick={() => counterStore.setState({ count: 0 })}>Reset</button>
    </div>
  );
}

export default function Practice() {
  return (
    <div>
      <CounterDisplay />
      <CounterButtons />
    </div>
  );
}
