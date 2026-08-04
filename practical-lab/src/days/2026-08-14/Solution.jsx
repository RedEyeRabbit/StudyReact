import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

function ThemedButton() {
  const theme = useContext(ThemeContext);
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

export default function Solution() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Toggle theme
        </button>
        <Page />
      </div>
    </ThemeContext.Provider>
  );
}
