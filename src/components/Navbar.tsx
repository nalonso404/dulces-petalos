'use client'

import { FC } from 'react'
import { SvgIcon } from './SvgIcon'
import styled from 'styled-components'

export const Navbar:FC = ({ }) => {

  return (
    <Nav >
      <ul>
        <li>
          <a href={'/'}>
            <SvgIcon src={'/svg/logo.svg'} size={50} alt='Dulces Pétalos icon' />
          </a>
        </li>
      </ul>
    </Nav>
  )
}


const Nav = styled.nav`

  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  height: 66px;

> ul{
  list-style: none;

  a { 
    display: block;
    height: 100%;
    width: 100%;
  }
}




`