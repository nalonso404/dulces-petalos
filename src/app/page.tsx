import { Metadata } from 'next'
import { fetchMethod } from '@/api'
import { TypeProducts } from '@/schema/product'
import { MainHome } from '@/components/MainHome'

export const generateMetadata = (): Metadata => {
  return {
    title: 'Dulces Pétalos',
    description: 'Dulces éetalos',
    alternates: {
      canonical: '/'
    }
  }
}

export default async function Home() {
  const res = await fetchMethod('products', null, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    }
  }) as Response

  const data = await res.json() as TypeProducts
  
  return (
    <MainHome data={data} />
  )
}
