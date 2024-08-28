// https://www.codewars.com/kata/546e2562b03326a88e000020/

export class Kata {
  static squareDigits(num: number): number {
    const result = Array.from(String(num)).map(digits => Number(digits) ** 2).join("")
    return Number(result)
  }
}

console.log(Kata.squareDigits(9119))
