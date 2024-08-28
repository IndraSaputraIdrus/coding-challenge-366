// https://www.codewars.com/kata/54ba84be607a92aa900000f1
// di sini saya dapat ilmu baru
// yaitu kita bisa pakai method set untuk membuat data yang itemnya itu
// harus uniqe yang mana dalam studi kasus ini huruf yang sama akan di satukan

export const isIsogram = (str: string): boolean => {
  return new Set(str.toLowerCase()).size === str.length
}

console.log(isIsogram("andra"))
