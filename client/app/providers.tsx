'use client'
import {NextUIProvider} from '@nextui-org/react'
import UserContextProvider from './contexts/UserContext'

export function Providers({children}: { children: React.ReactNode }) {


  return (
    <NextUIProvider>
      <UserContextProvider>
        {children}
      </UserContextProvider>
    </NextUIProvider>
  )
}