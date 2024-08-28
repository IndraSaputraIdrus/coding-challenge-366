// https://www.codewars.com/kata/54ba84be607a92aa900000f1

//export function humanyearscatyearsdogyears(humanyears: number): [number, number, number] {
//  let catyears = 0;
//  let dogyears = 0;
//
//  if (humanyears === 1) {
//    catyears += 15
//    dogyears += 15
//  }
//
//  if (humanyears === 2) {
//    catyears += 15 + 9
//    dogyears += 15 + 9
//  }
//  if (humanyears > 2) {
//    catyears += 15 + 9 + 4 * (humanyears - 2)
//    dogyears += 15 + 9 + 5 * (humanyears - 2)
//  }
//
//  return [humanyears, catyears, dogyears];
//}

export const humanYearsCatYearsDogYears = (humanYears: number) => {
  return humanYears <= 1 ?
    [1, 15, 15] :
    [humanYears, (15 + 9) + (humanYears - 2) * 4, (15 + 9) + (humanYears - 2) * 5]
}

console.log(humanYearsCatYearsDogYears(10))
