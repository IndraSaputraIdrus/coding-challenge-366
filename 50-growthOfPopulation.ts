//https://www.codewars.com/kata/563b662a59afc2b5120000c6

//p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
export const nbYear = (p0: number, percent: number, aug: number, p: number) => {
  let yearResult = 0
  while (p0 < p) {
    p0 = Math.floor(p0 + (p0 * (percent / 100)) + aug)
    yearResult++
  }
  return yearResult
}

//console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // 10
