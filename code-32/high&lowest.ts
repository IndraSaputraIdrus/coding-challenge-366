// https://www.codewars.com/kata/554b4ac871d6813a03000035
//
export class Kata {
  static highAndLow(numbers: string): string {
    const arrNumber = numbers.split(" ").map(Number)
    const high = Math.max(...arrNumber)
    const low = Math.min(...arrNumber)
    return `${high} ${low}`
  }
}
console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))

