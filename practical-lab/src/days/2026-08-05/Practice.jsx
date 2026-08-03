import { useState } from "react";

function AddItemForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    // TODO 1: prevent the default form submission
    // TODO 2: if text is not empty (after trimming), call onAdd(text)
    // TODO 3: clear the input by resetting text to ""
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO 4: make this a controlled input bound to "text" */}
      <input placeholder="Add an item..." />
      <button type="submit">Add</button>
    </form>
  );
}

export default function Practice() {
  const [items, setItems] = useState(["Milk", "Eggs"]);

  function handleAdd(text) {
    setItems([...items, text]);
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <AddItemForm onAdd={handleAdd} />
    </div>
  );
}
