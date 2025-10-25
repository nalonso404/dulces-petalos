export const normalizeString = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
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