//https://www.codewars.com/kata/5390bac347d09b7da40006f6

declare global {
  interface String {      // Declaration needed, don't remove it
    toJadenCase: () => string;
  }
}

//String.prototype.toJadenCase = function(): string {
//  return this.split(/\s/g).map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(" ")
//}

String.prototype.toJadenCase = function(): string {
  return this.split(/\s/g).map(word => `${word[0].toUpperCase()}${word.substring(1)}`).join(" ")
}


console.log("How can mirrors be real if our eyes aren't real".toJadenCase())

