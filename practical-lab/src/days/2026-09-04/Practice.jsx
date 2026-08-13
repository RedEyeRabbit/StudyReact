import { useEffect, useRef, useState } from "react";

function Modal({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    // TODO 1: remember document.activeElement in previouslyFocused.current,
    // then focus dialogRef.current

    // TODO 2: add a "keydown" document listener that calls onClose()
    // when e.key === "Escape"

    // TODO 3: return a cleanup function that removes that listener and
    // calls previouslyFocused.current?.focus()
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

export default function Practice() {
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
