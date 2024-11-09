import { render, screen } from "@testing-library/react";
import TodoApp from "./components/TodoApp";

test("renders To-Do List title", () => {
  render(<TodoApp />);
  expect(screen.getByText(/To-Do List/i)).toBeInTheDocument();
});
