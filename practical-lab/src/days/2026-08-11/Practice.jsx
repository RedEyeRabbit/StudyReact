import { useState } from "react";

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li>
      <span
        // TODO 1: call onToggle(todo.id) when this span is clicked
        onClick={() => {}}
        style={{
          textDecoration: todo.done ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>{" "}
      <button onClick={() => onRemove(todo.id)}>✕</button>
    </li>
  );
}

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

function AddTodoForm({ onAdd }) {
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
        placeholder="What needs doing?"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default function Practice() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", done: false },
    { id: 2, text: "Build a project", done: false },
  ]);

  function handleAdd(text) {
    setTodos([...todos, { id: Date.now(), text, done: false }]);
  }

  function handleToggle(id) {
    // TODO 2: return a new array where the todo matching "id"
    // has its "done" flag flipped (use .map(), don't mutate!)
  }

  function handleRemove(id) {
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div>
      <h2>My Todos</h2>
      <AddTodoForm onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
    </div>
  );
}
