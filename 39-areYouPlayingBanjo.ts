//https://www.codewars.com/kata/53af2b8861023f1d88000832

export const areYouPlayingBanjo = (name: string): string => {
  return name.toLowerCase().startsWith("r") ? `${name} plays banjo` : `${name} does not play banjo`
}
