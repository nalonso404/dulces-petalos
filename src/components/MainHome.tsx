'use client'

import type { TypeProducts } from '@/schema/product'
import { FC, memo, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { ProductList } from './ProductList'
import { normalizeString } from '@/utils'
import { NoResults } from './NoResults'

type Props = {
  data: TypeProducts
}

const getFilteredData = (data, searchItem) => {
  const normalizedSearch = normalizeString(searchItem)

  return data.filter((item) => {
    const name = normalizeString(item.name)
    const binomial = normalizeString(item.binomialName)
    return name.includes(normalizedSearch) || binomial.includes(normalizedSearch)
  })
}

export const MainHome:FC<Props> = memo(({ data }) => {
  const [searchItem, setSearchItem] = useState('')
  const filtered = useMemo(() => getFilteredData(data, searchItem) , [data, searchItem])

  return(
    <Main>
      <Input name='search' searchItem={searchItem} setSearchItem={setSearchItem} placeHolder='Busca en nuestra tienda' icon={true}/>
      {filtered.length > 0 ?
        <ProductList data={filtered} />
        :
        <NoResults searchItem={searchItem} />
      }
    </Main>
  )
})


const Main = styled.main`
  background-color: var(--background);
  height: calc(100% - 66px);
  padding: 0 24px;
  width: 100%;
`