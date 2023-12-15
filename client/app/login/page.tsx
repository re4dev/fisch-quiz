'use client'

import React, { useEffect, useRef, useState } from 'react';
import {
  Card,
  Button,
  Input,
} from '@nextui-org/react';
import { User, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';


export default function Login() {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser(){
      const {data: {user}} = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    }
    getUser();
  }, [])

  const handleSignUp = async () => {
    await supabase.auth.signUp({email, password, options: {
      emailRedirectTo: `${location.origin}/auth/callback`
    }})
    router.refresh();
    setEmail("");
    setPassword("");
  }

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({email, password});
    const usr = res.data.user;
    setUser(usr);
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
    <div>
      <div className='justify-center flex content-center'>
        <Card >
          <p className=' text-base font-bold mb-20px'>
            Anmelden
          </p>
          <Input
            type='email'
            variant="bordered"
            color="primary"
            size="lg"
            placeholder="Benutzername"
            value={email}
            onValueChange={setEmail}
          />
          <Input
            variant="bordered"
            type='password'
            color="primary"
            size="lg"
            placeholder="Passwort"
            value={password}
            onValueChange={setPassword}
          />

          <Button onClick={handleSignIn}>Einloggen</Button>
          <Button onClick={handleSignUp}>Registrieren</Button>

           {/* <p>Neu hier?</p>
          <div className='justify-center flex content-center'>
            <Link href="/auth/registrieren" className="font-medium text-indigo-600 hover:text-indigo-500">
              Registrieren
            </Link>
          </div> */}
        </Card>
      </div>
    </div>

  )
}


