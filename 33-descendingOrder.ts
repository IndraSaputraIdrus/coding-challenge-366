// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/

export const descendingOrder = (n: number): number => parseInt([...String(n)].map(Number).sort((a, b) => b - a).join(""))

descendingOrder(123456789)
