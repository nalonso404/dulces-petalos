import { getFilteredData } from '@/components/MainHome'

type Products = {
  name: string
  binomialName: string
  id: string
  price: number
  imgUrl: string
  wateringsPerWeek: number
  fertilizerType: string
  heightInCm: number
}[]


jest.mock('@/utils', () => ({
  normalizeString: (str: string) => str.toLowerCase(),
}))

describe('getFilteredData', () => {
  const products: Products = [
    {
      name: 'Rosa', binomialName: 'Rosa rubiginosa',
      id: '',
      price: 0,
      imgUrl: '',
      wateringsPerWeek: 0,
      fertilizerType: '',
      heightInCm: 0
    },
    {
      name: 'Lavanda', binomialName: 'Lavandula angustifolia',
      id: '',
      price: 0,
      imgUrl: '',
      wateringsPerWeek: 0,
      fertilizerType: '',
      heightInCm: 0
    },
    {
      name: 'Tulipán', binomialName: 'Tulipa gesneriana',
      id: '',
      price: 0,
      imgUrl: '',
      wateringsPerWeek: 0,
      fertilizerType: '',
      heightInCm: 0
    },
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
