import { Metadata } from 'next'
import { fetchMethod } from '@/api'
import type { TypeProducts } from '@/schema/product'
import { MainHome } from '@/components/MainHome'

export const generateMetadata = (): Metadata => {
  return {
    title: 'Dulces Pétalos',
    description: 'Dulces Pétalos',
    alternates: {
      canonical: '/'
    }
  }
}

export default async function Home() {
  const res = await fetchMethod('products', null, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  }) as Response

  const data = await res.json() as TypeProducts
  
  return (
    <MainHome data={data} />
  )
}
