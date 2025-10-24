'use client'
import { type FC, type ReactNode } from 'react'
import StyledComponentsRegistry from '@/utils/styled-components-registry'

type Props = {
  children: ReactNode
}

const ClientProviders: FC<Props> = ({ children }) => {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  )
}

export default ClientProviders
