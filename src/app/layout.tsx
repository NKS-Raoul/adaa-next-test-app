import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = function ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
export default RootLayout;
