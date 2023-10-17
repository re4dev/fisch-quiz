import React, { useRef } from 'react';
import {
  Card,
  Spacer,
  Button,
  Input,
} from '@nextui-org/react';
import Link from 'next/link';
import useLogin from '../../../hooks/useLogin';


export default function Login() {
  const { login, loginResponse, loginError, loginIsLoading } = useLogin();
  const username = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();

  function handleLogin(){
    const loginUser: ILoginUser = {
      username: username.current.value,
      password: password.current.value,
    }

    login(loginUser);
  }

  return (
    <div>
      <div className='justify-center flex content-center'>
        <Card >
          <p className=' text-base font-bold mb-20px'>
            Anmelden
          </p>
          <Input
            variant="bordered"
            color="primary"
            size="lg"
            placeholder="Benutzername"
            ref={username}
          />
          <Spacer y={1} />
          <Input
            variant="bordered"
            type='password'
            color="primary"
            size="lg"
            placeholder="Passwort"
            ref={password}
          />
          {loginError ? <p>{loginError}</p> : <p>{loginResponse}</p>}
          <Spacer y={4} />
          <Button onClick={handleLogin}>Einloggen</Button>
          <div>
            <Link href="/">
              Als Gast fortfahren
            </Link>
          </div>
          <Spacer y={5} />
          <p>Neu hier?</p>
          <div className='justify-center flex content-center'>
            <Link href="/auth/registrieren" className="font-medium text-indigo-600 hover:text-indigo-500">
              Registrieren
            </Link>
          </div>
        </Card>
      </div>
    </div>

  )
}


