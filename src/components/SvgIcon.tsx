import React from 'react'

export type SvgIconProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  size?: number | string
}

export const SvgIcon = React.forwardRef<HTMLImageElement, SvgIconProps>(({ src, alt, size = 24, ...rest }, ref) => {
  return (
  // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} src={src} alt={alt}  width={size} height={size} {...rest} />
  )
}
)

SvgIcon.displayName = 'SvgIcon'
