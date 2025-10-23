'use client'

import { Dispatch, FC, SetStateAction, useMemo } from 'react'
import styled from 'styled-components'
import { SvgIcon } from './SvgIcon'
import { font16_24 } from '@/styles/fontSizes'

type TypeProps = {
  searchItem: string
  setSearchItem: Dispatch<SetStateAction<string>>
  placeHolder: string
  name: string
  icon?: string | boolean
  label?: string
}


const getIcon = (icon, name) => {
  if(!icon) return false
  if(typeof icon === 'boolean' || typeof icon === 'string') {
    if (name === 'search') {
      const Icon = <SvgIcon key="search-icon" src="/svg/i--search.svg" width={24} alt="Search icon" />
      return [Icon, true]
    }
  }
}


export const Input:FC<TypeProps> = ({ searchItem, setSearchItem, placeHolder, name, label, icon }) => {
  const ButtonIcon = useMemo(() => getIcon(icon, name), [icon, name])

  return(
    <Label>
      {ButtonIcon && ButtonIcon}
      <input name={name} type='text' placeholder={placeHolder} value={searchItem} onChange={(e) => setSearchItem(e.target.value)}/>
      {label && <span>{label}</span>}
    </Label>
  )

}

const Label = styled.label`
  align-items: center;
  background-color: var(--color-white);
  border-radius: 8px;
  border: 1px solid #BBBBBB;
  display: flex;
  flex-direction: row;
  gap: 7px;
  margin: 50px auto 0;
  max-width: 600px;
  padding: 8px 16px;
  width: 100%;

  > input {
    ${font16_24(400, '--font-dm-sans')}
    background-color: var(--color-white);
    border-color: transparent;
    color: var(--color-text-grey);
    width: 100%;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: var(--color-black);
      -webkit-box-shadow: 0 0 0 500px var(--color-white) inset;
      box-shadow: 0 0 0 100px var(--color-white) inset;
      color: inherit;
    }
  
    &:focus {
      outline: none;
      box-shadow: none;
      border-color: transparent;
    }
  }
`