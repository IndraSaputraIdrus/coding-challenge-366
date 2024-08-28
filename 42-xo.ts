//https://www.codewars.com/kata/55908aad6620c066bc00002a

export const xo = (str: string): boolean => {
  let x = 0;
  let o = 0

  for (const item of [...str.toLowerCase()]) {
    item.includes("x") && x++
    item.includes("o") && o++
  }

  return x === o
}

//export function xo(str: string) {
//  return str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
//}

console.log(xo("xxOo"))
