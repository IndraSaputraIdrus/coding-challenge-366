// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// const summation = (n: number) => n * (n+ 1) / 2
export const summation = (n: number): number => [...Array(n)].map((_, i) => i + 1).reduce((acc, curr) => acc + curr, 0)

console.log(summation(8))

