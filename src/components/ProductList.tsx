'use client'

import type { TypeProducts } from '@/schema/product'
import { FC, memo } from 'react'
import styled from 'styled-components'
import { ProductCard } from './ProductCard'
import { mobile } from '@/styles'

type Props = {
  data: TypeProducts 
}

export const ProductList:FC<Props> = memo(({ data }) => {
  return(
    <Ul>
      {data.map((product, idx) => <ProductCard data={product} key={`${product.id}-${idx}`} />)}
    </Ul>
  )
})


const Ul = styled.ul`
  ${mobile(`
    grid-template-columns: 1fr;
  `)}

  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
  list-style: none;
  margin: 40px auto 0;
  max-width: 1200px;
  padding: 0;
`
