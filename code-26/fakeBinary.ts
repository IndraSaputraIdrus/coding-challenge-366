// https://www.codewars.com/kata/57eae65a4321032ce000002d

// export const fakeBin = (x: string): string => {
//   let result = ""
//   for (let i = 0; i < x.length; i++) {
//     result += Number(x[i]) < 5 ? "0" : "1"
//   }
//   return result
// }
//

export const fakeBin = (x: string): string => [...x].map(item => +item < 5 ? "0" : "1").join("")

console.log(fakeBin('45385593107843568'))
