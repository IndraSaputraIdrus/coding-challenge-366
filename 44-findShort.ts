//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/

export const findShort = (str: string): number => Math.min(...str.split(/\s/g).map(item => item.length))

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
