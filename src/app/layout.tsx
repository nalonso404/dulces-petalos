import '../app/globals.css'
import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import ClientProviders from '@/components/ClientProviders'
import { CLIENT_NAME, HOSTNAME, LANG, PRO } from '@/utils'
import { TypeLang } from '@/schema/translator'

const title = CLIENT_NAME
const description = CLIENT_NAME + ' description'


export const metadata: Metadata = {
  title: {
    template: '%s | ' + title,
    default: title,
  },
  description: description,
  robots: { index: PRO, follow: PRO },
  applicationName: title,
  appleWebApp: { capable: false, title: title, statusBarStyle: 'black' },
  alternates: { canonical: 'https://' + HOSTNAME },
}

export const viewport: Viewport = {
  colorScheme: 'only light',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' }
  ],
  width: 'device-width',
  initialScale: 1
}

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
})

type TypeRootLayoutProps = {
  children: ReactNode,
  params: Promise<{ lang: TypeLang }>
}

export default async function RootLayout({ children, params }:TypeRootLayoutProps) {
  const { lang } = await params

  return (
    <html lang={lang ?? LANG} className={`${nunito.variable}`}>
      <head>
        <link rel='preconnect' href={`https://${HOSTNAME}`} />
        <meta name='apple-mobile-web-app-capable' content='no' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
