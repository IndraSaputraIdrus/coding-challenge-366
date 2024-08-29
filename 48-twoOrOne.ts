// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

//export const longest = (s1: string, s2: string): string => {
//  const fullStr = s1.concat(s2)
//  let prev = ""
//  return [...fullStr]
//    .sort()
//    .map(c => {
//      if (c === prev) return
//      prev = c
//      return c
//    })
//    .join("")
//}

export const longest = (s1: string, s2: string): string => {
  const concatStr = new Set(s1.concat(s2))
  return [...concatStr].sort().join("")
}

//export const longest = (s1: string, s2: string): string => [...new Set([...s1, ...s2])].sort().join("");

console.log(longest("aretheyhere", "yestheyarehere"))
