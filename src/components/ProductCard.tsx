'use client'

import { FC, memo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import type { TypeProduct } from '@/schema/product'
import { shadows, font16_24, font20_30, font28_42 } from '@/styles'
import { SvgIcon } from './SvgIcon'

type Props = {
  data: TypeProduct
  idx: number
}

export const ProductCard:FC<Props> = memo(({ data, idx }) => {
  const { id, name, binomialName, price, imgUrl } = data

  return (
    <Li variants={cardVariants} initial='initial' animate='animate' exit='exit' transition={{ duration: 0.25, ease: 'easeOut' }}>
      <Link href={`/product/${id}`}>
        <div>
          <h2>{name}</h2>
          <span>{binomialName}</span>
          <div className='image_wrapper'>
            <Image src={imgUrl} alt={name} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px' loading={idx < 3 ? 'eager' : 'lazy'}/>
            <div className='price_wrapper'>
              <div> <span>€{price}</span> </div>
              <div> <SvgIcon src={'/svg/i--arrow.svg'} size={24} alt='Arrow icon'/> </div>
            </div>
          </div>
        </div>
      </Link>
    </Li>
  )
})


const Li = styled(motion.li)`
  background-color: var(--color-white);
  border-radius: 32px;
  box-shadow: ${shadows.layered};
  display: flex;
  flex-direction: column;
  height: 422px;
  padding: 16px;
  transition: all 0.4s cubic-bezier(0.1, 0, 0.3, 1);

  &:hover {
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
    transform: translateY(-2px);
  }

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

export const cardVariants = { 
  initial: { opacity: 0, scale: 0.95, y: 20 }, 
  animate: { opacity: 1, scale: 1, y: 0 }, 
  exit: { opacity: 0, scale: 0.9, y: -20 }, 
}