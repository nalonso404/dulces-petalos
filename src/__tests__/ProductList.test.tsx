import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductList } from '@/components/ProductList'
import type { TypeProducts } from '@/schema/product'

jest.mock('@/components/ProductCard', () => ({
  ProductCard: ({ data }: { data: any }) => (
    <div data-testid='product-card'>{data.name}</div>
  ),
}))

describe('ProductList', () => {
  const mockData: TypeProducts = [
    { id: '1', name: 'Rose', binomialName: 'Rosa', price: 10, imgUrl: '/rose.jpg', wateringsPerWeek: 0, fertilizerType: '', heightInCm: 0 },
    { id: '2', name: 'Tulip', binomialName: 'Tulipa', price: 12, imgUrl: '/tulip.jpg', wateringsPerWeek: 0, fertilizerType: '', heightInCm: 0 },
    { id: '3', name: 'Orchid', binomialName: 'Orchidaceae', price: 20, imgUrl: '/orchid.jpg', wateringsPerWeek: 0, fertilizerType: '', heightInCm: 0 },
  ]

  it('renders the correct number of ProductCard components', () => {
    const { getAllByTestId } = render(<ProductList data={mockData} />)

    const cards = getAllByTestId('product-card')
    expect(cards).toHaveLength(mockData.length)

    expect(cards[0]).toHaveTextContent('Rose')
    expect(cards[1]).toHaveTextContent('Tulip')
    expect(cards[2]).toHaveTextContent('Orchid')
  })

  it('renders empty list correctly', () => {
    const { queryAllByTestId } = render(<ProductList data={[]} />)
    const cards = queryAllByTestId('product-card')
    expect(cards).toHaveLength(0)
  })
})
