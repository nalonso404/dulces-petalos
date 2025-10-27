'use client'

import type { TypeProduct, TypeProducts } from '@/schema/product'
import { FC, memo, useMemo, useState } from 'react'
import styled from 'styled-components'
import { Input } from './Input'
import { ProductList } from './ProductList'
import { normalizeString } from '@/utils'
import { NoResults } from './NoResults'
import { mobile } from '@/styles'
import { Suspense } from 'react'

type Props = {
  data: TypeProducts
}

export const getFilteredData = (data: TypeProducts ,searchItem: string): TypeProduct[] => {
  if (!Array.isArray(data) || !searchItem) return data
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

  return (
    <Main>
      <div className='search_by'>
        <Input name='search' searchItem={searchItem} setSearchItem={setSearchItem} placeHolder='Busca en nuestra tienda' icon={true}/>
      </div>
      <section>
        <Suspense fallback={<div>Cargando productos...</div>}>
          {filtered.length > 0 ?
            <ProductList data={filtered} />
            :
            <NoResults searchItem={searchItem} />
          }
        </Suspense>
      </section>
    </Main>
  )
})



const Main = styled.main`
  ${mobile(`
    padding: 0 16px 32px;
  `)}

  background-color: var(--background);
  height: calc(100% - 66px);
  padding: 0 24px 50px;
  width: 100%;

  .search_by {
    margin: 50px auto 0;
    max-width: 600px;
  }
`