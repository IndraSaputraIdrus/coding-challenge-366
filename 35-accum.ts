// export const accum = (s: string): string => {
//   let result = ""
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 0; j <= i; j++) {
//       if (j === 0) {
//         result += s[i].toUpperCase()
//       } else {
//         result += s[i].toLowerCase()
//       }
//     }
//     i !== s.length - 1 && (result += "-")
//   }
//   return result
// }


// repeat = mengemablikan s yang sama sebanyak n

export const accum = (s: string): string => {
  return s.split("").map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index)).join("-")
}

console.log(accum("ZpglnRxqenU"))
