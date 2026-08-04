import { Component, useState } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Caught by ErrorBoundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return <p>⚠️ Something went wrong in this widget.</p>;
    }
    return this.props.children;
  }
}

function Buggy({ explode }) {
  if (explode) {
    throw new Error("Boom!");
  }
  return <p>I'm fine 🙂</p>;
}

export default function Solution() {
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
