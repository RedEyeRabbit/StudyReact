import { useState } from "react";

function AddItemForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add an item..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default function Solution() {
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
