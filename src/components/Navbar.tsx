'use client'
import { FC } from 'react'
import styled from 'styled-components'
import { SvgIcon } from './SvgIcon'

export const Navbar:FC = ({  }) => {

  return (
    <Nav>
      <a href={'/'}>
        <SvgIcon src={'/svg/logo.svg'} size={50} alt='Dulces Pétalos icon' />
      </a>
    </Nav>
  )
}


const Nav = styled.nav`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: row;
  height: 66px;
`
