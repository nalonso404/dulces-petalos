import '../app/globals.css'
import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Nunito, DM_Sans } from 'next/font/google'
import { CLIENT_NAME, HOSTNAME, LANG, PRO } from '@/utils'
import type { TypeLang } from '@/schema/translator'
import { Navbar } from '@/components/Navbar'
import ClientProviders from '@/components/ClientProviders'


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
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.ts',
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

const dmsans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

type TypeRootLayoutProps = {
  children: ReactNode,
  params: Promise<{ lang: TypeLang }>
}

export default async function RootLayout({ children, params }: TypeRootLayoutProps) {
  const { lang } = await params

  return (
    <html lang={lang ?? LANG} className={`${nunito.variable} ${dmsans.variable}`}>
      <head>
        <link rel='preconnect' href={`https://${HOSTNAME}`} />
        <meta name='apple-mobile-web-app-capable' content='no' />
      </head>
      <body>
        <ClientProviders>
          <header>
            <Navbar />
          </header>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}

