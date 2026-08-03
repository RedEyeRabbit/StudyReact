import { useState } from "react";

function ShoppingList({ items, onRemove }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.text}{" "}
          <button onClick={() => onRemove(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

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

function ItemCount({ count }) {
  return <p>🧺 {count} item(s) in your list</p>;
}

export default function Solution() {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Eggs" },
  ]);

  function handleAdd(text) {
    setItems([...items, { id: Date.now(), text }]);
  }

  function handleRemove(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <ItemCount count={items.length} />
      <ShoppingList items={items} onRemove={handleRemove} />
      <AddItemForm onAdd={handleAdd} />
    </div>
  );
}
