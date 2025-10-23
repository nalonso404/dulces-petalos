'use client'
import { type FC, type ReactNode } from 'react'
import StyledComponentsRegistry from '@/utils/styled-components-registry'
import { Navbar } from './Navbar'

type Props = {
  children: ReactNode
}

const ClientProviders: FC<Props> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      <header>
        <Navbar/>
      </header>
      {children}
    </StyledComponentsRegistry>
  )
}

export default ClientProviders
