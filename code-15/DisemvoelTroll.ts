// https://www.codewars.com/kata/52fba66badcd10859f00097e
//

// export class Kata {
//   static disemvowel(str: string): string {
//     return str.replace(/[aeiou]+/gi, '');
//   }
// }

export class Kata {
  static disemvowel(str: string): string {
    const arr = [...str]
    const newStr = arr.map(item => {
      if("aiueo".includes(item.toLowerCase())){
        return ""
      }
      return item
    })
    return newStr.join("")
  }
}

console.log(Kata.disemvowel("This website is for losers LOL!"))
