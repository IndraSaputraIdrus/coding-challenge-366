// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

export const abbrevName = (name: string): string => name.split(" ").map(name => name[0]).join('.').toUpperCase()

console.log(abbrevName("indra saputra"))
