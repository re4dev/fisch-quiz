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
  const [response, setResponse] = useState<string>("");
  const router = useRouter();

  const supabase = createClientComponentClient();

  const handleSignUp = async () => {
    const user = await supabase.auth.signUp({email, password, options: {
      emailRedirectTo: `${location.origin}/auth/callback`
    }})
    console.log(user);
    if(user.error?.message){
      setResponse(user.error?.message)
    }
    if(user && !user.error?.message){
      setResponse("Registrierung erfolgreich.")
      router.push("/login");
    }
    setEmail("");
    setPassword("");
  }

  return (
    <div className='h-64 w-96 mx-auto mt-20'>
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

          <div className=' h-5 ml-1 text-red-400 text-xs'>{response}</div>

          <Button onClick={handleSignUp} className='w-auto mx-auto mt-3 mb-4'>Registrieren</Button>

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

