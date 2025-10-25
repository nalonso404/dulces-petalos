'use client'

import React, { FC } from 'react'

type SvgIconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  size?: number | string
}

export const SvgIcon:FC<SvgIconProps> = ({ src, alt, size = 24, ...rest  }) => {
  return (
  // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt}  width={size} height={size} {...rest} />
  )
} 