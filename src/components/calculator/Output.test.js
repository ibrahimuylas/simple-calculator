import { render, screen } from "@testing-library/react";
import Output from "./Output";

test("renders correct output", () => {
  render(<Output result={"123"} />);
  const input = screen.getByTestId("calculator-output");

  expect(input).toBeDefined();
  expect(input.value).toEqual("123");
});
