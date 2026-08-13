import { useId, useState } from "react";

function Disclosure({ question, children }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div>
      {/* TODO 1: make this a <button> with aria-expanded={open},
          aria-controls={contentId}, and onClick toggling "open" */}
      <span onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
        {open ? "▾" : "▸"} {question}
      </span>
      {/* TODO 2: when "open" is true, render a <div id={contentId}>
          wrapping "children" */}
    </div>
  );
}

export default function Practice() {
  return (
    <Disclosure question="What is React?">
      <p>A JavaScript library for building user interfaces.</p>
    </Disclosure>
  );
}
