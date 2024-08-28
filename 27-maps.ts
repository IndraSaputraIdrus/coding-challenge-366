// https://www.codewars.com/kata/57f781872e3d8ca2a000007e

// export const maps = (x: number[]): number[] => {
//
//   let result: number[] = []
//
//   x.forEach(num => {
//     result.push(num * 2)
//   })
//
//   return result
// }

export const maps = (x: number[]): number[] => x.map(num => num * 2)

console.log(maps([1, 2, 3]))
