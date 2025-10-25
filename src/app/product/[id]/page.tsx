import { Metadata } from 'next'
import { fetchMethod } from '@/api'
import type { TypeProduct } from '@/schema/product'
import { notFound } from 'next/navigation'
import { MainProductDetail } from '@/components/MainProductDetail'

type TypeParams = {
  params: { id: string }
}

export async function generateMetadata({ params }: TypeParams): Promise<Metadata> {
  const { id } = await params
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


export default async function ProductPage({ params }: TypeParams) {
  const { id } = await params
	
  const res = await fetchMethod('product', { id: id }, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    next: { revalidate: 3600 }
  }) as Response

  if(!res.ok) notFound()
  const data = await res.json() as TypeProduct

  return <MainProductDetail data={data} />
}
