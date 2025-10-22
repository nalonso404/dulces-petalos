// Environments
export const DEV = process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
export const STAGING = process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
export const PRO = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

export const HOSTNAME = process.env.NEXT_PUBLIC_PROJECT_HOSTNAME
export const CLIENT_NAME = process.env.NEXT_PUBLIC_CLIENT_NAME

// LOCALE STUFF
export const LANG = process.env.NEXT_PUBLIC_LOCALE
