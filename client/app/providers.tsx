// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { UserContext } from './contexts/UserContext'
import { useState } from 'react'

export function Providers({children}: { children: React.ReactNode }) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <NextUIProvider>
      <UserContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
        {children}
      </UserContext.Provider>
    </NextUIProvider>
  )
}