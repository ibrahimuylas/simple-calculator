import { render, screen } from "@testing-library/react";
import { CalculatorOperations } from "../../constants/calculator.js";
import KeyPad from "./KeyPad";

test("renders all necessary keys", () => {
  render(<KeyPad />);
  expect(screen.getByTestId("key-0")).toBeDefined();
  expect(screen.getByTestId("key-1")).toBeDefined();
  expect(screen.getByTestId("key-2")).toBeDefined();
  expect(screen.getByTestId("key-3")).toBeDefined();
  expect(screen.getByTestId("key-4")).toBeDefined();
  expect(screen.getByTestId("key-5")).toBeDefined();
  expect(screen.getByTestId("key-6")).toBeDefined();
  expect(screen.getByTestId("key-7")).toBeDefined();
  expect(screen.getByTestId("key-8")).toBeDefined();
  expect(screen.getByTestId("key-9")).toBeDefined();
  expect(screen.getByTestId("key-+")).toBeDefined();
  expect(screen.getByTestId("key--")).toBeDefined();
  expect(screen.getByTestId("key-*")).toBeDefined();
  expect(screen.getByTestId("key-/")).toBeDefined();
  expect(screen.getByTestId("key-AC")).toBeDefined();
  expect(screen.getByTestId("key-=")).toBeDefined();
  expect(screen.getByTestId("key-.")).toBeDefined();
  expect(screen.getByTestId("key-Square-Root")).toBeDefined();
});

test("returns correct output after click a key", () => {
  let output = "";
  const handleOnChange = (value) => (output = value);

  render(<KeyPad onChange={handleOnChange} />);
  const key7 = screen.getByTestId("key-7");
  key7.click();

  expect(output).toEqual("7");
});

test("returns correct output after calculation when inputs are correct", () => {
  let output = "";
  const handleOnChange = (value) => (output = value);

  render(<KeyPad onChange={handleOnChange} />);
  screen.getByTestId("key-7").click();
  screen.getByTestId("key-*").click();
  screen.getByTestId("key-8").click();
  screen.getByTestId("key-=").click();

  expect(output).toEqual(56);
});

test("returns ERROR output when inputs are incorrect", () => {
  let output = "";
  const handleOnChange = (value) => (output = value);

  render(<KeyPad onChange={handleOnChange} />);
  screen.getByTestId("key-*").click();
  screen.getByTestId("key-7").click();
  screen.getByTestId("key-8").click();
  screen.getByTestId("key-=").click();

  expect(output).toEqual("ERROR");
});

test("should clear output after calculation when AC is clicked", () => {
  let output = "";
  const handleOnChange = (value) => (output = value);

  render(<KeyPad onChange={handleOnChange} />);
  screen.getByTestId("key-7").click();
  screen.getByTestId("key-*").click();
  screen.getByTestId("key-8").click();
  screen.getByTestId("key-=").click();
  screen.getByTestId("key-AC").click();

  expect(output).toEqual("");
});

test("should return correct result when clicked square root", () => {
  let output = "";

  const handleOnChange = (value) => (output = value);
  render(<KeyPad onChange={handleOnChange} />);
  screen.getByTestId("key-2").click();
  screen.getByTestId("key-5").click();
  screen.getByTestId("key-Square-Root").click();

  expect(output).toEqual(5);
});

test("should return correct result after calculation when clicked square root", () => {
  let output = "";

  const handleOnChange = (value) => (output = value);
  render(<KeyPad onChange={handleOnChange} />);
  screen.getByTestId("key-2").click();
  screen.getByTestId("key-+").click();
  screen.getByTestId("key-7").click();
  screen.getByTestId("key-Square-Root").click();

  expect(output).toEqual(3);
});
