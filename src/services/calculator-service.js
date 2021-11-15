/* eslint no-eval: 0 */
export const EvaluateExpression = (value) => {
  try {
    return eval(value);
  } catch {
    return "ERROR";
  }
};
