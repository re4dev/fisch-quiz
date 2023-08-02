import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react';
import Footer from '@/components/Footer';
import { SessionProvider } from "next-auth/react"

import type { Session } from "next-auth"

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps<{session: Session}>) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        <Component {...pageProps} />
        <Footer />
      </NextUIProvider>
    </SessionProvider>
  );
}
