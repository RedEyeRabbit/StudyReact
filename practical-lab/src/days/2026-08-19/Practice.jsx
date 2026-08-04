import { memo, useCallback, useMemo, useState } from "react";

let renderCount = 0;

// TODO 1: wrap this whole function with memo(...)
function ExpensiveList({ items, onSelect }) {
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
}

export default function Practice() {
  const [text, setText] = useState("");
  const [selected, setSelected] = useState(null);

  // TODO 2: wrap this array in useMemo(() => [...], [])
  const items = ["Apple", "Banana", "Cherry"];

  // TODO 3: wrap this function in useCallback(fn, [])
  const handleSelect = (item) => setSelected(item);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here (re-renders Practice)"
      />
      <p>Selected: {selected ?? "none"}</p>
      <ExpensiveList items={items} onSelect={handleSelect} />
    </div>
  );
}
