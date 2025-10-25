'use client'

import { FC } from 'react'
import { SvgIcon } from './SvgIcon'

export const Navbar:FC = ({ }) => {

  return (
    <nav className='menu'>
      <ul>
        <li>
          <a href={'/'}>
            <SvgIcon src={'/svg/logo.svg'} size={50} alt='Dulces Pétalos icon' />
          </a>
        </li>
      </ul>
    </nav>
  )
}

