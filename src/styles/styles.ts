'use client'
import { css } from 'styled-components'


type AlphaStepNumber = 0 | .05 | .1 | .15 | .2 | .25 | .3 | .35 | .4 | .45 | .5 | .55 | .6 | .65 | .7 | .75 | .8 | .85 | .9 | .95 | 1

export const rgbAlpha = (color:string, opacity:AlphaStepNumber) => css`${`color-mix(in srgb, ${`var(${color})`} ${opacity*100}%, transparent);`}`


export const shadows = {
  light: '0px 4px 4px -1px rgba(12, 12, 13, 0.05)',
  medium: '0px 4px 4px -1px rgba(12, 12, 13, 0.10)',
  layered: `
    0px 4px 4px -1px rgba(12, 12, 13, 0.05),
    0px 4px 4px -1px rgba(12, 12, 13, 0.10)
  `,
}

export const mobile = (styles: any) => css`
  @media (max-width: 768px) {
    ${styles}
  }
`
