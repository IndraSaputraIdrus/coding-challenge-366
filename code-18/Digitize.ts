// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
//

export const digitize = (n: number): number[] => n.toString().split("").reverse().map(i => Number(i))

console.log(digitize(12345))
