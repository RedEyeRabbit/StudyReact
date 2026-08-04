import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

export default function Solution() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  function addItem() {
    dispatch({ type: "ADD_ITEM", item: { id: Date.now(), name: "Widget" } });
  }

  return (
    <div>
      <h2>Cart ({cart.length})</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add item</button>{" "}
      <button onClick={() => dispatch({ type: "CLEAR" })}>Clear cart</button>
    </div>
  );
}
