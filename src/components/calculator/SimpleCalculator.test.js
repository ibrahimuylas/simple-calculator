import { render, screen } from "@testing-library/react";
import SimpleCalculator from "./SimpleCalculator";

test("renders correct output", () => {
  render(<SimpleCalculator />);
  const calculator = screen.getByTestId("simple-calculator");

  expect(calculator).toBeDefined();
});
