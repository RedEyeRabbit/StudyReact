import { useSyncExternalStore } from "react";

function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState: () => state,
    setState: (updater) => {
      state = typeof updater === "function" ? updater(state) : { ...state, ...updater };
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

const counterStore = createStore({ count: 0 });

function useStore(store) {
  return useSyncExternalStore(store.subscribe, store.getState);
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

export default function Solution() {
  return (
    <div>
      <CounterDisplay />
      <CounterButtons />
    </div>
  );
}
