//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/

export const past = (h: number, m: number, s: number): number => {
  const hourMili = h * 60 * 60 * 1000
  const minutesMili = m * 60 * 1000
  const secondMili = s * 1000
  return hourMili + minutesMili + secondMili
}

console.log(past(1, 1, 1))
