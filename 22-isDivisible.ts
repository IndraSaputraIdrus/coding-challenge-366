// https://www.codewars.com/kata/5545f109004975ea66000086/

export const isDivisible = (n: number, x: number, y: number): boolean => {
  if(n % x === 0 && n % y === 0){
    return true
  } else {
    return false
  }
}


// export const isDivisible = (n: number, x: number, y: number): boolean => n % x === 0 && n % y === 0

console.log(isDivisible(3,3,4))
