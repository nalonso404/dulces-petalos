'use client'
import Link from 'next/link'
import { FC } from 'react'
import { SvgIcon } from './SvgIcon'
import styled from 'styled-components'
import { font16_24 } from '@/styles'

type TypeProps = {
  data: string
}

export const BreadCrumbs:FC<TypeProps> = ({ data }) => {
  return (
    <Nav aria-label='breadcrumb'>
      <ol>
        <li><Link href={'/'}> Inicio </Link></li>
        <li aria-hidden='true'>
          <SvgIcon src={'/svg/i--separator.svg'} size={12} alt='Separator icon' />
        </li>
        <li aria-current='page'>{data}</li>
      </ol>
    </Nav>
  )
}


const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  margin: 50px auto 0;
  max-width: 1200px;
  
  > ol {
    display: flex;
    flex-direction: row;
    gap: 4px;
    list-style: none;

    >li {
      ${font16_24(400, '--font-dm-sans')}
      color: var(--color-text-grey);

      &[aria-hidden] {
        align-items: center;
        display: flex;
        height: 24px;
        justify-content: center;
        width: 24px;
      }

      &:first-child a {
        color: var(--color-text-grey);
        text-decoration: none;
        transition: color 0.2s ease-in-out;

        &:hover {
          color: var(--color-text);
        }
      }
    }
  }

`