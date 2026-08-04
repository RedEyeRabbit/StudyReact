import { memo, useCallback, useMemo, useState } from "react";

let renderCount = 0;

const ExpensiveList = memo(function ExpensiveList({ items, onSelect }) {
  renderCount++;
  return (
    <div>
      <p>ExpensiveList has rendered {renderCount} time(s)</p>
      <ul>
        {items.map((item) => (
          <li key={item} onClick={() => onSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default function Solution() {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);

  const items = useMemo(() => ["Apple", "Banana", "Cherry"], []);
  const handleSelect = useCallback((item) => setSelected(item), []);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here (re-renders Solution)"
      />
      <p>Selected: {selected ?? "none"}</p>
      <ExpensiveList items={items} onSelect={handleSelect} />
    </div>
  );
}
