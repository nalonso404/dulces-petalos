import { normalizeString } from '@/utils'

type Products = {
  name: string
  binomialName: string
}[]

const getFilteredData = (data: Products, searchItem: string) => {
  const normalizedSearch = normalizeString(searchItem)

  return data.filter((item) => {
    const name = normalizeString(item.name)
    const binomial = normalizeString(item.binomialName)
    return name.includes(normalizedSearch) || binomial.includes(normalizedSearch)
  })
}

jest.mock('@/utils', () => ({
  normalizeString: (str: string) => str.toLowerCase(),
}))

describe('getFilteredData', () => {
  const products: Products = [
    { name: 'Rosa', binomialName: 'Rosa rubiginosa' },
    { name: 'Lavanda', binomialName: 'Lavandula angustifolia' },
    { name: 'Tulipán', binomialName: 'Tulipa gesneriana' },
  ]

  it('returns all products if search is empty', () => {
    expect(getFilteredData(products, '')).toEqual(products)
  })

  it('filters by name', () => {
    expect(getFilteredData(products, 'rosa')).toEqual([
      { name: 'Rosa', binomialName: 'Rosa rubiginosa' },
    ])
  })

  it('filters by binomial name', () => {
    expect(getFilteredData(products, 'angustifolia')).toEqual([
      { name: 'Lavanda', binomialName: 'Lavandula angustifolia' },
    ])
  })

  it('is case-insensitive', () => {
    expect(getFilteredData(products, 'TULIPÁN')).toEqual([
      { name: 'Tulipán', binomialName: 'Tulipa gesneriana' },
    ])
  })

  it('returns empty array if no match', () => {
    expect(getFilteredData(products, 'banana')).toEqual([])
  })
})
