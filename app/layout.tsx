import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@components/navbar.component'
import { navbarItems } from '@placeholders/navbar.placeholders'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DAO tricolor',
  description: 'DAO tricolor Ecuaodr description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar
          navbarItems={navbarItems}
        />

        {children}

      </body>
    </html>
  )
}
