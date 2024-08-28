// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// export class Kata {
//   static getCount(str: string) {
//     return [...str].filter(char => 'aeiou'.includes(char)).length;
//   }
// }

export class Kata {
  static getCount(str: string): number {
    const regex = /[aiueo]/gi
    const vowels = str.match(regex)

    if(vowels){
      return vowels.length
    } else {
      return 0
    }
  }
}

const kata = Kata.getCount("abracadabra")
console.log(kata)
