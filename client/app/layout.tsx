import './globals.css'
import { Metadata } from 'next'
import {Providers} from './providers'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import { User } from '@supabase/auth-helpers-nextjs'
import { UserContext } from './contexts/UserContext'

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <div className='min-h-screen flex flex-col'>
            <Providers>
              <Navigation></Navigation>
                {children} 
            </Providers>
            <Footer></Footer>
          </div>
        </body>
      </html>
    )
  }

  export const metadata: Metadata = {
    title: 'Fisch-Quiz',
    description: 'Kennst du alle Fische? Fisch-Quiz lässt es dich wissen.',
  }