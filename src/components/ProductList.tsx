'use client'

import { TypeProduct, TypeProducts } from '@/schema/product'
import { FC, memo } from 'react'
import styled from 'styled-components'

type Props = {
  data: TypeProducts | TypeProduct
}

export const ProductList:FC<Props> = memo(({ data }) => {
  
  return(
    <Ul>
    
    </Ul>
  )
})


const Ul = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`