import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // TODO 1: return a new array with action.item appended
      return state;
    case "REMOVE_ITEM":
      // TODO 2: return a new array without the item whose id === action.id
      return state;
    case "CLEAR":
      // TODO 3: return an empty array
      return state;
    default:
      return state;
  }
}

export default function Practice() {
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
