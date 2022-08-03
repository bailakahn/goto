import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

//runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Button Component", () => {
  const onClick = jest.fn();
  render(<Button onClick={onClick} text="Click Me!" />);
  const button = screen.getByTestId("button");

  // Test render
  test("Button Rendering", () => {
    expect(button).toBeInTheDocument();
  });

  // Test button content
  test("Button Text", () => {
    expect(button).toHaveTextContent("Click Me!");
  });
});
