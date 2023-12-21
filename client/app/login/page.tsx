'use client'

import React, { useContext, useEffect, useState } from 'react';
import {
  Button,
  Input,
  Link,
} from '@nextui-org/react';
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { UserContext } from '../contexts/UserContext';


export default function Login() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);
  const [response, setResponse] = useState<string>();
  const router = useRouter();
  const authUserContext = useContext(UserContext);

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser(){
      const {data: {user}} = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    getUser();
    if(user){
      router.push("/");
    }
  }, [])

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({email, password});
    console.log(res);
    setResponse(res.error?.message)
    const usr = res.data.user;
    authUserContext?.setUserLoggedIn(true);
    console.log(usr);
    if(usr){
      router.push("/");
    }
    setEmail("");
    setPassword("");
  }

  if(loading) {
    return <h1>loading..</h1>
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
          <div className=' h-5 ml-1 text-red-400'>{response}</div>
          <Button onClick={handleSignIn} className='w-auto mx-auto mt-2 mb-4'>Einloggen</Button>

          <p className='p-0 m-0 text-black'>Neu hier?</p>
          <div className=''>
            <Link href="/register" className="p-0 m-0 text-xs align-top text-black">
              Registrieren
            </Link>
          </div>
      </div>
    </div>

  )
}


