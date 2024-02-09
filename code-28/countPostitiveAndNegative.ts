// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/
//
// export const countPositivesSumNegatives = (input: number[] | null): number[] => {
//   let positive = 0
//   let negative = 0
//
//   if (!input || input.length === 0) return []
//
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] < 0) {
//       negative += input[i]
//     } else if (input[i] > 0) {
//       positive += 1
//     }
//   }
//
//   return [positive, negative]
// }


export const countPositivesSumNegatives = (input: number[] | null): number[] => {
  if (!input || input.length === 0) return []

  const positive = input.filter(num => num > 0).length
  const negative = input.filter(num => num < 0).reduce((acc, curr) => acc + curr, 0)

  return [positive, negative]

}

let count = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]
console.log(countPositivesSumNegatives(count))
