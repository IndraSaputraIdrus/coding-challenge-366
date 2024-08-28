// https://www.codewars.com/kata/54c27a33fb7da0db0100040e
//

export default function isSquare(n: number): boolean {
  return Math.sqrt(n) % 1 === 0
}

console.log(isSquare(25))
