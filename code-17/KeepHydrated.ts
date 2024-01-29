// https://www.codewars.com/kata/582cb0224e56e068d800003c/
//
export const litres =  (time: number): number => {
  const waterPerHour = 0.5
  return Math.floor(waterPerHour * time)
}
console.log(litres(6.7))
