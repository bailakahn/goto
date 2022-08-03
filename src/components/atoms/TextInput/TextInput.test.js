import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextInput from "./TextInput";

//runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Input Component", () => {
  const onChange = jest.fn();
  render(
    <TextInput
      id="text-input"
      onChange={onChange}
      text="Click Me!"
      value="AC"
    />
  );
  const input = screen.getByTestId("input");

  // Test render
  test("Input Rendering", () => {
    expect(input).toBeInTheDocument();
  });

  // Test input id
  test("Input id", () => {
    expect(input.id).toBe("text-input");
  });

  // Test input value
  test("Input value", () => {
    expect(input.value).toBe("AC");
  });
});
