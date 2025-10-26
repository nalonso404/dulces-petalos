'use client'

import { font20_30 } from '@/styles'
import Link from 'next/link'
import { FC } from 'react'
import styled from 'styled-components'

type Props = {
  data: 'not-found' | 'error'
}

export const ErrorFeedBack:FC<Props> = ({ data }) => {
  return(
    <Div>
      {data === 'not-found'? 
        <>
          <h2> 404 - Página no encontrada</h2>
          <p>Lo sentimos, esta flor no existe 🌸</p>
          <Link href="/">Volver al inicio</Link>
        </>

        :
        <>
          <h2>Uy 😥 Ha ocurrido un error</h2>
          <p>Error interno del servidor (500).</p>
          <p>No hemos podido cargar el contenido ahora mismo…</p>
        </>
      }

    </Div>
  )
} 

const Div = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  h2, 
  p, 
  a {
    ${font20_30(500, '--font-nunito')}
  }

  a {
    margin-top: 20px;
    color: var(--color-grape);
    transition: color 0.2s ease-in-out;

    &:hover {
      color: var(--color-text);
    }
  }
`