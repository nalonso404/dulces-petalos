'use client'

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
          <p> The page you are looking for does not exist.</p>
          <Link href="/">Back to homepage</Link>
        </>

        :
        <p>Something went wrong, try again later</p>
      }

    </Div>
  )
} 

const Div = styled.div``