import { Metadata } from 'next'
import { fetchMethod } from '@/api'
import type { TypeProducts } from '@/schema/product'
import { MainHome } from '@/components/MainHome'
import { notFound } from 'next/navigation'

export const revalidate = 3600

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
  let data: TypeProducts | null = null

  try {
    const res = await fetchMethod('products', null, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    }) as Response
  
    if(!res.ok) notFound()
  
    data = await res.json() as TypeProducts
    
  } catch (error) {
    notFound()
  }
  return <MainHome data={data} />
}
