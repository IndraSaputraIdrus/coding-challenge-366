//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/

export const filter_list = (list: Array<any>): Array<number> => list.filter(item => typeof item === "number")


console.log(filter_list([1, 2, 'a', 'b']))
