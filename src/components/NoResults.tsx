'use client'

import { FC,  } from 'react'
import styled from 'styled-components'

type Props ={
  searchItem: string
}

export const NoResults:FC<Props> = (({ searchItem }) => {

  return(
    <Div>
      <h2>No hay resultados para {searchItem} </h2>
    </Div>
  )
})


const Div = styled.div`
  gap: 16px;
  margin: 40px auto 0;
  max-width: 1200px;
  padding: 0;
`
