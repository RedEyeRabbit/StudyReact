import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import LoginButton from "./LoginButton.jsx";

test("toggles between Log in and Log out when clicked", () => {
  render(<LoginButton />);

  expect(screen.getByRole("button", { name: "Log in" })).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button"));

  expect(screen.getByRole("button", { name: "Log out" })).toBeInTheDocument();
});
