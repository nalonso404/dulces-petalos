'use client'

import { FC, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import type { TypeProduct } from '@/schema/product'
import { shadows, font16_24, font20_30, font28_42 } from '@/styles'
import { SvgIcon } from './SvgIcon'

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
          <div className='image_wrapper'>
            <Image src={imgUrl} alt={name} fill sizes='(max-width: 768px) 100vw, 352px'/>
            <div className='price_wrapper'>
              <div><span>€{price}</span></div>
              <div><SvgIcon src={'/svg/i--arrow.svg'} size={24} alt='Arrow icon'/></div>
            </div>
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
  padding: 16px;

  .image_wrapper {
    border-radius: 24px;
    height: 300px;
    margin-top: 16px;
    overflow: hidden;  
    position: relative; 

    > img {
      border-radius: 24px;
      object-fit: cover;
    }

    .price_wrapper {
      bottom: 0;
      display: flex;
      justify-content: space-between;
      padding: 8px;
      position: absolute;
      width: 100%;

      > div {
        align-items: center;
        background-color: var(--color-white);
        border-radius: 40px;
        color: var(--color-text);
        display: flex;
        flex-direction: row;
        height: 40px;
        justify-content: center;
        padding: 10px 16px;
        
        &:last-of-type {
          border-radius: 50%;
          width: 40px;
        }

        >span {
          ${font20_30(500, '--font-nunito')}
          color: var(--color-text);
        }
      }
    }
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
