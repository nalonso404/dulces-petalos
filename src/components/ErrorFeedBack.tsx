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
          <h2> The page you are looking for does not exist.</h2>
          <Link href="/">Back to homepage</Link>
        </>

        :
        <p>Something went wrong, try again later</p>
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