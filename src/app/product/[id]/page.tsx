import { fetchMethod } from '@/api'
import type { TypeProduct } from '@/schema/product'
import { notFound } from 'next/navigation'
import { MainProductDetail } from '@/components/MainProductDetail'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  try {
    const res = await fetchMethod('product', { id: id }, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }) as Response
	
    const product = await res.json() as TypeProduct
	
    return {
      title: product.name,
      description: product.binomialName,
      alternates: {
        canonical: `/product/${id}`,
      },
    }
		
  } catch {
    return { title: 'Producto no encontrado'}
  }
}

export async function generateStaticParams() {
  const res = await fetchMethod('products', null, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },) as Response
  const products = await res.json() as TypeProduct[]

  return products.map((item) => ({ id: item.id.toString() }))
}


export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  let data: TypeProduct | null = null

  try {
    const res = await fetchMethod('product', { id: id }, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 }
    }) as Response
	
    if(!res.ok) notFound()
    data = await res.json() as TypeProduct

  } catch {
    notFound()

  }

  return <MainProductDetail data={data} />
}
