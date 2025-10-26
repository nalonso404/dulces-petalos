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
    const result = getFilteredData(products, '')
    expect(result).toEqual(products)
  })

  it('filters by name', () => {
    const result = getFilteredData(products, 'rosa')
    expect(result).toHaveLength(1)
    expect(result[0]).toMatchObject({
      name: 'Rosa',
      binomialName: 'Rosa rubiginosa',
    })
  })

  it('filters by binomial name', () => {
    const result = getFilteredData(products, 'angustifolia')
    expect(result).toHaveLength(1)
    expect(result[0]).toMatchObject({
      name: 'Lavanda',
      binomialName: 'Lavandula angustifolia',
    })
  })

  it('is case-insensitive', () => {
    const result = getFilteredData(products, 'TULIPÁN')
    expect(result).toHaveLength(1)
    expect(result[0]).toMatchObject({
      name: 'Tulipán',
      binomialName: 'Tulipa gesneriana',
    })
  })

  it('returns empty array if no match', () => {
    const result = getFilteredData(products, 'banana')
    expect(result).toEqual([])
  })
})
