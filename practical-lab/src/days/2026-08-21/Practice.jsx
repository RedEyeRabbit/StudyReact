import { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // TODO 1: return the new state that marks hasError as true
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error);
  }

  render() {
    // TODO 2: if this.state.hasError, show a fallback <p> instead
    // of this.props.children
    return this.props.children;
  }
}

function Buggy({ explode }) {
  if (explode) {
    throw new Error("Boom!");
  }
  return <p>I'm fine 🙂</p>;
}

export default function Practice() {
  const [explode, setExplode] = useState(false);

  return (
    <div>
      <ErrorBoundary>
        <Buggy explode={explode} />
      </ErrorBoundary>
      <button onClick={() => setExplode(true)}>Break it</button>
    </div>
  );
}
