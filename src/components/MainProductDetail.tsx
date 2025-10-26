'use client'

import type { TypeProduct } from '@/schema/product'
import { FC, memo } from 'react'
import styled from 'styled-components'
import { BreadCrumbs } from './BreadCrumbs'
import { ProductDetail } from './ProductDetail'


type Props = {
  data: TypeProduct
}

export const MainProductDetail:FC<Props> = memo(({ data }) => {
  const { name } = data

  return(
    <Main>
      <BreadCrumbs data={name} />
      <section aria-label='product detail'>
        <ProductDetail key={data.id} data={data} />
      </section>
    </Main>
  )
})


const Main = styled.main`
  background-color: var(--background);
  height: calc(100% - 66px);
  padding: 0 24px;
  width: 100%;
  
`