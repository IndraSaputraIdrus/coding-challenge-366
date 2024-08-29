//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

export class Kata {
  static validatePin(pin: string): boolean {
    return (/^(\d{4}|\d{6})$/g).test(pin)
  }
}

console.log(Kata.validatePin("1234567"))
