import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductCard } from '@/components/ProductCard'
import type { TypeProduct } from '@/schema/product'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { fill, ...rest } = props 
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />
  },
}))


jest.mock('@/components/SvgIcon', () => ({
  SvgIcon: ({ alt }: { alt: string }) => <span>{alt}</span>,
}))


describe('ProductCard', () => {
  const mockProduct: TypeProduct = {
    id: '1',
    name: 'Rose',
    binomialName: 'Rosa',
    price: 10,
    imgUrl: '/rose.jpg',
    wateringsPerWeek: 0,
    fertilizerType: '',
    heightInCm: 0,
  }

  it('renders product information correctly', () => {
    render(<ProductCard data={mockProduct} />)

    expect(screen.getByText('Rose')).toBeInTheDocument()
    expect(screen.getByText('Rosa')).toBeInTheDocument()
    expect(screen.getByText('€10')).toBeInTheDocument()
    expect(screen.getByText('Arrow icon')).toBeInTheDocument()
    const img = screen.getByAltText('Rose') as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img.src).toContain('/rose.jpg')
  })
})
