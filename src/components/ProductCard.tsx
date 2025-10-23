'use client'

import type { TypeProduct } from '@/schema/product'
import { shadows } from '@/styles'
import { font16_24, font28_42 } from '@/styles/fontSizes'
import Link from 'next/link'
import { FC, memo } from 'react'
import styled from 'styled-components'

type Props = {
  data: TypeProduct
}

export const ProductCard:FC<Props> = memo(({ data }) => {
  const { id, name, binomialName, price, imgUrl } = data

  return(
    <Li>
      <Link href={`/product/${id}`}>
        <div>
          <h2>{name}</h2>
          <span>{binomialName}</span>
          <div>
            <img src={imgUrl} alt={name}/>
            <div>{price}</div>
          </div>
        </div>
      </Link>
    </Li>
  )
})


const Li = styled.li`
  background-color: var(--color-white);
  border-radius: 32px;
  box-shadow: ${shadows.layered};
  display: flex;
  flex-direction: column;
  height: 422px;

  img {
    display: block;
    height: auto;
    width: 100%;
  }

  div {
    border-radius: 24px;
    height: 300px;
  }

  h2 {
    ${font28_42(700, '--font-nunito')}
    color: var(--color-text);
  }

  span {
    ${font16_24(400, '--font-dm-sans')}
    color: var(--color-text-grey);
  }
`
