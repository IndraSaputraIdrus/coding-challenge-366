// https://www.codewars.com/kata/5715eaedb436cf5606000381

// export const positiveSum = (arr: number[]): number => {
//   let sum = 0
//   arr.forEach(num => {
//     if (num > 0) sum += num
//   })
//   return sum
// }

export const positiveSum = (arr: number[]): number => arr.filter(num => num > 0).reduce((acc, curr) => acc + curr)

console.log(positiveSum([1, -2, 3, 4, 5]))
