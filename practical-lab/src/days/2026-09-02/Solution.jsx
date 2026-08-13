import { useId, useState } from "react";

function Disclosure({ question, children }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div>
      <button aria-expanded={open} aria-controls={contentId} onClick={() => setOpen(!open)}>
        {open ? "▾" : "▸"} {question}
      </button>
      {open && (
        <div id={contentId} role="region">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Solution() {
  return (
    <Disclosure question="What is React?">
      <p>A JavaScript library for building user interfaces.</p>
    </Disclosure>
  );
}
