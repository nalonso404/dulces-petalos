'use client'

import { TypeProducts } from '@/schema/product'
import { FC, memo, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { ProductList } from './ProductList'

type Props = {
  data: TypeProducts
}

export const MainHome:FC<Props> = memo(({ data }) => {
  const [searchItem, setSearchItem] = useState('')
  const filtered = useMemo(() => data.filter((item) => {
    item.name.toLowerCase().includes(searchItem.toLowerCase()) || item.binomialName.toLowerCase().includes(searchItem.toLowerCase())
  }), [data, searchItem])

  return(
    <Main>
      <Input name='search' searchItem={searchItem} setSearchItem={setSearchItem} placeHolder='Busca en nuestra tienda' icon={true}/>
      <ProductList data={filtered} />
    </Main>
  )
})


const Main = styled.main`
  background-color: var(--background);
  height: calc(100vh - 66px);
  width: 100%;
`