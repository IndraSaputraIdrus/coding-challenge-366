export const maskify = (cc: string): string => {
  const mask = cc.substring(-4).replaceAll(/./g, "#")
  const fourLastCharacter = cc.substring(cc.length - 4)
  return `${mask}${fourLastCharacter}`
}

//export const maskify = (cc: string): string => {
//  return cc.split("").map((c, index) => {
//    if (index > (cc.length - 1) - 4) return c
//    return "#"
//  }).join("")
//}
//// return masked string
//export function maskify(cc: string): string {
//    return cc.replace(/.(?=.{4})/g, "#");
//}

const start = performance.now()
console.log(maskify('4556364607935616'))
const end = performance.now()
console.log(`${(end - start).toFixed(3)} ms`)
