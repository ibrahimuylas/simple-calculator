import { render, screen } from "@testing-library/react";
import { CalculatorOperations } from "../../constants/calculator.js";
import Key from "./Key.js";

test("renders correct number", () => {
  render(<Key value={7} />);
  const button = screen.getByRole("button");

  expect(button).toBeDefined();
  expect(button.innerHTML).toEqual("7");
});

test("renders correct operation", () => {
  render(<Key value={CalculatorOperations.Addition} />);
  const button = screen.getByRole("button");

  expect(button).toBeDefined();
  expect(button.innerHTML).toEqual(CalculatorOperations.Addition);
});

test("returns correct key on click action", () => {
  let returnedValue = "";
  const handleOnClick = (e) => (returnedValue = e.value);

  render(<Key value={7} onClick={handleOnClick} />);
  const button = screen.getByRole("button");
  button.click();

  expect(returnedValue).toEqual(7);
});
