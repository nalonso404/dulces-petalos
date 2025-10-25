import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductDetail } from '@/components/ProductDetail'
import { mockedProduct } from './MainProductDetail.test'
import { translateFertilizerType } from '@/utils'


jest.mock('next/image', () => ({
  __esModule: true,
  default: require('../__mocks__/nextImage').default
}))



it('renders a ProductDetail', () => {
  render(<ProductDetail data={mockedProduct} />)
  const productTitle = screen.getByRole('heading', { level:2 })
  expect(productTitle).toBeInTheDocument()

  const binomialTitle = screen.getByRole('heading', { level: 3 })
  expect(binomialTitle).toHaveTextContent(mockedProduct.binomialName)

  const price = screen.getByText(`€${mockedProduct.price}`)
  expect(price).toBeInTheDocument()

  const watering = screen.getByText('Regar 1 vez por semana')
  expect(watering).toBeInTheDocument()

  const fertilizer = screen.getByText(`Fertilizar con ${translateFertilizerType(mockedProduct.fertilizerType)}`)
  expect(fertilizer).toBeInTheDocument()

  const img = screen.getByAltText(mockedProduct.name)
  expect(img).toBeInTheDocument()
  expect(img).toHaveAttribute('src', mockedProduct.imgUrl)

})
