import { useEffect, useRef, useState } from "react";

function Modal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement;
    dialogRef.current?.focus();

    function handleKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      tabIndex={-1}
      ref={dialogRef}
      style={{ border: "2px solid #333", borderRadius: 8, padding: 20, marginTop: 12 }}
    >
      <h2 id="modal-title">Settings</h2>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default function Solution() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <p>Press Escape or click Close — focus will return here.</p>
      </Modal>
    </div>
  );
}
