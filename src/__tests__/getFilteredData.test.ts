import { getFilteredData } from '@/components/MainHome'

type Products = {
  name: string
  binomialName: string
}[]


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
