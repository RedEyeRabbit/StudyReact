import { createContext, useContext, useState } from "react";

// TODO 1: create ThemeContext with a default value of "light"

function ThemedButton() {
  // TODO 2: read the theme from ThemeContext with useContext
  const theme = "light"; // <- replace this line

  return (
    <button
      style={{
        background: theme === "dark" ? "#222" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
        border: "1px solid #999",
        padding: "8px 16px",
      }}
    >
      I'm a {theme} button
    </button>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function Page() {
  return (
    <div>
      <Toolbar />
    </div>
  );
}

export default function Practice() {
  const [theme, setTheme] = useState("light");

  return (
    // TODO 3: wrap this in ThemeContext.Provider, value={theme}
    <div>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
      <Page />
    </div>
  );
}
