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

export default function Solution() {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Eggs" },
    { id: 3, text: "Bread" },
  ]);

  function handleRemove(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h2>Shopping List</h2>
      <ShoppingList items={items} onRemove={handleRemove} />
    </div>
  );
}
