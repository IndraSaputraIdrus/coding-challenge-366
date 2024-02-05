// https://www.codewars.com/kata/57356c55867b9b7a60000bd7

type Operator = "/" | "*" | "-" | "+"

export const basicOp = (operation: Operator, value1: number, value2: number): number => {

  let result: number

  switch (operation) {
    case "/":
      result = value1 / value2
      break
    case "*":
      result = value1 * value2
      break
    case "-":
      result = value1 - value2
      break
    default:
      result = value1 + value2
      break
  }

  return result
}

// alternative from another submitter
//
// export function basicOp(operation: string, value1: number, value2: number): number {
//   return eval(`${value1}${operation}${value2}`);
// }
