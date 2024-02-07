import type { Metadata } from 'next'
import { HOST_URL } from '~/constants'
import { Fira_Sans } from 'next/font/google'
import { Header } from '~/components/Header'
import { ProgressBar } from '~/components/ProgressBar'
import { Footer } from '~/components/Footer'
import { TrailerModalCC } from '~/components/TrailerModalCC'
import '~/styles/reset.css'
import '~/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(HOST_URL),
  title: 'Dreflix: Explore and find the movie you want to find so much',
  description: 'Explore through a large catalog of movies and find the movie you want to find so badly.',
  authors: [{ name: 'Javier Andres - Dresan' }],
  creator: 'Javier Andres - Dresan',
}

const firaSans = Fira_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: [
    '400',
    '500',
    '700',
  ],
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={firaSans.className}>
        <ProgressBar />
        <div className='__next'>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        <div id='tooltip-container'></div>
        <div id='modal-container'>
          <TrailerModalCC />
        </div>
      </body>
    </html>
  )
}
