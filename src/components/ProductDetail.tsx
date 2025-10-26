'use client'

import { FC, memo, useMemo } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import type { TypeProduct } from '@/schema/product'
import { font14_21, font16_24, font28_42, font48_72, mobile } from '@/styles'
import { translateFertilizerType } from '@/utils'

type Props = {
  data: TypeProduct
}

export const ProductDetail:FC<Props> = memo(({ data }) => {
  const { id, name, binomialName, price, imgUrl, wateringsPerWeek, fertilizerType } = data
  const stringWatering = useMemo(() => wateringsPerWeek === 1 ? `Regar ${wateringsPerWeek} vez por semana` : `Regar ${wateringsPerWeek} veces por semana` ,[wateringsPerWeek])
  
  return(
    <Article data-id={id} variants={cardVariants} initial='initial' animate='animate' exit='exit' transition={{ duration: 0.25, ease: 'easeOut' }} layout>
      <div className='image_wrapper'>
        <Image src={imgUrl} alt={name} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 905px' priority={true}/>
      </div>
      <div className='description_wrapper'>
        <hgroup>
          <h2>{name}</h2>
          <h3>{binomialName}</h3>
        </hgroup>
        <span>€{price}</span> 
        <ul>
          <li>{stringWatering}</li>
          <li> Fertilizar con {translateFertilizerType(fertilizerType)}</li>
        </ul>
      </div>
    </Article>
  )
})

const Article = styled(motion.article)`

  ${mobile(`
    flex-direction: column;

    .image_wrapper,
    .description_wrapper {
      flex: 1 1 100%;
      height: auto;
    }

  `)}

  display: flex;
  flex-direction: row;
  flex: 1; 
  margin-top: 40px;
  min-height: calc(100vh - 200px);
  width: 100%;
  gap: 24px;

  .image_wrapper {
    flex: 1 1 50%;
    min-height: 300px; 
    position: relative;
    
    > img {
      border-radius: 24px;
      object-fit: cover;
    }
  }

  .description_wrapper {
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
    justify-content: flex-start;

    h2 {
      ${font48_72(700, '--font-nunito')}
      color: var(--color-text);
      margin-bottom:25px;
    }

    h3 {
      ${font16_24(400, '--font-dm-sans')}
      color: var(--color-text-grey);
      margin-bottom: 25px;
    }

    span {
      ${font28_42(700, '--font-nunito')}
      color: var(--color-text);
      margin-bottom: 25px;
    }

    ul {
      list-style-type: '· ';
      list-style-position: inside;
      padding-left: 16px;

      
      >li {
        ${font14_21(400, '--font-dm-sans')}
        color: var(--color-text);
        padding-top:8px;

      }
    }
  }

`




const cardVariants = { 
  initial: { opacity: 0, scale: 0.95, y: 20 }, 
  animate: { opacity: 1, scale: 1, y: 0 }, 
  exit: { opacity: 0, scale: 0.9, y: -20 }, 
}