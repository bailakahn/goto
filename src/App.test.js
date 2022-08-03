import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App Rendering", () => {
  render(
    <Router>
      <App />
    </Router>
  ); // Rendering the App
  const text = screen.getByTestId("input");
  const button = screen.getByTestId("button");
  expect(button).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
