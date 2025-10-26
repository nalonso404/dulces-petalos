export const normalizeString = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}


export const translateFertilizerType = (str: string) => {
  switch (str) {
    case 'nitrogen':
      return 'Nitrógeno'
    case 'phosphorus':
      return 'Fósforo'
    default:
      return capitalizeFirstLetter(str)
  }
}