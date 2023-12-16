'use client'

import React, { useState } from 'react';
import {
  Button,
  Input,
  Link,
} from '@nextui-org/react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';



export default function Registrieren() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    const user = await supabase.auth.signUp({email, password, options: {
      emailRedirectTo: `${location.origin}/auth/callback`
    }})
    if(user){
      router.push("/login");
    }
    setEmail("");
    setPassword("");
  }

  return (
    <div className='p-6 h-64 w-96 mx-auto mt-20'>
      <div className='bg-gray-100 p-8 rounded-lg shadow-md w-96'>
          <Input
            type='email'
            variant="bordered"
            size="lg"
            placeholder="E-Mail"
            value={email}
            onValueChange={setEmail}
            className='mb-3'
          />
          <Input
            variant="bordered"
            type='password'
            size="lg"
            placeholder="Passwort"
            value={password}
            onValueChange={setPassword}
            className=''
          />

          <Button onClick={handleSignUp} className='w-auto mx-auto mt-2 mb-4'>Registrieren</Button>

          <p className='p-0 m-0 text-black'>Bereits ein Konto?</p>
          <div className=''>
            <Link href="/login" className="p-0 m-0 text-xs align-top text-black">
              Login
            </Link>
          </div>
      </div>
    </div>

  )
}

