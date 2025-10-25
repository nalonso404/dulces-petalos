import { render, screen, within } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TypeProduct } from '@/schema/product'
import { MainProductDetail } from '@/components/MainProductDetail'


export const mockedProduct:TypeProduct = {
  id: 'meQvyTcXACAwWn3wCKSw6',
  name: 'Aloe',
  binomialName: 'Aloe vera',
  price: 3.25,
  imgUrl: 'https://dulces-petalos.jakala.es/images/aloeVera.jpeg',
  wateringsPerWeek: 1,
  fertilizerType: 'phosphorus',
  heightInCm: 15
} 


it('renders a breadcrumb with product name', () => {
  render(<MainProductDetail data={mockedProduct} />)
  const nav = screen.getByRole('navigation')
  const currentItem = within(nav).getByText(mockedProduct.name)
  expect(currentItem).toBeInTheDocument()
})


it('renders a section with a ProductDetail', () => {
  render(<MainProductDetail data={mockedProduct} />)
  const section = screen.getByRole('region') 
  expect(section).toBeInTheDocument()

  const productTitle = within(section).getByRole('heading', { level: 2 })
  expect(productTitle).toBeInTheDocument()

})






