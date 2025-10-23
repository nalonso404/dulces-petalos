'use client'

import type { TypeProducts } from '@/schema/product'
import { FC, memo } from 'react'
import styled from 'styled-components'
import { ProductCard } from './ProductCard'

type Props = {
  data: TypeProducts 
}

export const ProductList:FC<Props> = memo(({ data }) => {

  return(
    <Ul>
      {data.map((product,idx) => <ProductCard data={product} key={idx} />)}
    </Ul>
  )
})


const Ul = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(384px, 1fr));
  gap: 16px;
`
