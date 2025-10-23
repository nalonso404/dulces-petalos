'use client'

import { Dispatch, FC, SetStateAction, useMemo } from 'react'
import styled from 'styled-components'
import { SvgIcon } from './SvgIcon'

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
    if(name === 'search') {
      <SvgIcon src={'/svg/i--search.svg'} width={24} alt='Search icon'/>
    }
  }
}

export const Input:FC<TypeProps> = ({ searchItem, setSearchItem, placeHolder, name, label, icon }) => {
  const ButtonIcon = useMemo(() => getIcon(icon, name), [icon, name])

  return(
    <Label>
      <input name={name} type='text' placeholder={placeHolder} value={searchItem} onChange={(e) => setSearchItem(e.target.value)}/>
      {label && <span>{label}</span>}
      {ButtonIcon && ButtonIcon}
    </Label>
  )

}

const Label = styled.label`
max-width: 600px;

`