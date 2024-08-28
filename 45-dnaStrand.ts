//export class Kata {
//  static dnaStrand(dna: string) {
//    let result = ""
//    for (let i = 0; i < dna.length; i++) {
//      switch (dna[i]) {
//        case "A":
//          result += "T"
//          break;
//        case "T":
//          result += "A"
//          break;
//        case "G":
//          result += "C"
//          break;
//        default:
//          result += "G"
//          break
//      }
//    }
//
//    return result
//  }
//}

export class Kata {
  static dnaStrand(dna: string) {
    const map: Record<string, string> = {
      "A": "T",
      "T": "A",
      "G": "C",
      "C": "G"
    }

    return dna.replace(/[ATGC]/g, (c: string) => map[c])
  }
}

const dna = "ATTGC"
console.log(Kata.dnaStrand(dna))
