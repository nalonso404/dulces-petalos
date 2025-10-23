import { css } from 'styled-components'

export const font14_21 = (weight: 400 = 400, family:'--font-nunito' | '--font-dm-sans' = '--font-nunito') => css`
  font-family: var(${family});
  font-size: 14px;
  font-weight: ${weight};
  letter-spacing: 0;
  line-height: 21px;
`

export const font16_24 = (weight: 400 = 400, family:'--font-nunito' | '--font-dm-sans' = '--font-nunito') => css`
  font-family: var(${family});
  font-size: 16px;
  font-weight: ${weight};
  letter-spacing: 0;
  line-height: 24px;
`

export const font20_30 = (weight: 400 | 500 = 400, family:'--font-nunito' | '--font-dm-sans' = '--font-nunito') => css`
  font-family: var(${family});
  font-size: 20px;
  font-weight: ${weight};
  letter-spacing: 0;
  line-height: 30px;
`

export const font28_42 = (weight: 400 | 700 = 400, family:'--font-nunito' | '--font-dm-sans' = '--font-nunito') => css`
  font-family: var(${family});
  font-size: 28px;
  font-weight: ${weight};
  letter-spacing: 0;
  line-height: 42px;
`

export const font48_72 = (weight: 400 | 700 = 400, family:'--font-nunito' | '--font-dm-sans' = '--font-nunito') => css`
  font-family: var(${family});
  font-size: 48px;
  font-weight: ${weight};
  letter-spacing: 0;
  line-height: 72px;
`



