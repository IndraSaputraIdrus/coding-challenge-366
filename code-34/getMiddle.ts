// https://www.codewars.com/kata/56747fd5cb988479af000028/

export const getMiddle = (word: string) => {
  let middleIndex = Math.floor(word.length / 2)
  if (word.length % 2 === 0) {
    console.log(word.slice(middleIndex - 1, middleIndex + 1))
    return word.slice(middleIndex - 1, middleIndex + 1)
  } else {
    return word.charAt(middleIndex)
  }
}

getMiddle("test")
