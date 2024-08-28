// https://www.codewars.com/kata/54edbc7200b811e956000556

export const countSheeps = (arr: (boolean | undefined | null)[]) => arr.filter(sheep => sheep).length

const array1 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];


console.log(countSheeps(array1))
