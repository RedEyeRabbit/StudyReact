import { useState } from "react";

function ShoppingList({ items, onRemove }) {
  return (
    <ul>
      {/* TODO: map "items" to one <li> per item — text, a stable
          key (item.id), and a Remove button calling onRemove(item.id) */}
    </ul>
  );
}

export default function Practice() {
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
