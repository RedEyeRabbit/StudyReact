import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import LoginButton from "./LoginButton.jsx";

test("toggles between Log in and Log out when clicked", () => {
  render(<LoginButton />);

  // TODO 1: fix this so it matches the button's real initial text
  screen.getByRole("button", { name: "TODO: fix this text" });

  // TODO 2: click the button (hint: fireEvent.click(...))

  // TODO 3: assert the button's accessible name is now "Log out"
  // (hint: expect(screen.getByRole(...)).toBeInTheDocument())
});
