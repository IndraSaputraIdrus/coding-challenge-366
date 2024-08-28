

// export const repeatStr = (n: number, str: string): string => Array.from({length: n}).fill(str).join("")
export const repeatStr = (n: number, str: string): string => str.repeat(n)

console.log(repeatStr(3, "*"))
