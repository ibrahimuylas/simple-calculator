/* eslint no-eval: 0 */

const errorMessage = "ERROR";

export const EvaluateExpression = (value) => {
  try {
    return eval(value);
  } catch {
    return errorMessage;
  }
};

export const SquareRoot = (value) => {
  try {
    return Math.sqrt(eval(value));
  } catch {
    return errorMessage;
  }
};
