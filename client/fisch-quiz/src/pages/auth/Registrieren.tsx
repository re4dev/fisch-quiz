import React, { useRef } from 'react';
import {
  Card,
  Spacer,
  Button,
  Input,
} from '@nextui-org/react';
import Link from 'next/link';
import useRegister from '../../../hooks/useRegister';
import { useRouter } from 'next/router';


export default function Registrieren() {
  const { register, registerResponse, registerError, registerIsLoading } = useRegister();
  const username = useRef<HTMLInputElement>();
  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();
  const passwordRepeat = useRef<HTMLInputElement>();
  const router = useRouter();

  function handleRegister(){
    const registerUser: IRegisterUser = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      passwordRepeat: passwordRepeat.current.value
    }

    register(registerUser);
  }

  return (
    <div>
      <div className='justify-center flex content-center'>
        <Card>
          <p className=' text-base font-bold mb-20px'>
            Registrieren
          </p>
          <Input
             variant="bordered"
            color="primary"
            size="lg"
            placeholder="Benutzername"
            ref={username}
          />
          <Spacer y={0.5} />
          <Input
            variant="bordered"
            color="primary"
            size="lg"
            placeholder="E-Mail"
            ref={email}
          />
          <Spacer y={0.5} />
          <Input
            type='password'
            variant="bordered"
            fullWidth
            color="primary"
            size="lg"
            placeholder="Passwort"
            ref={password}
          />
          <Spacer y={0.5} />
          <Input
            type='password'
            variant="bordered"
            fullWidth
            color="primary"
            size="lg"
            placeholder="Passwort wiederholen"
            ref={passwordRepeat}
          />
          {registerError ? <p>{registerError}</p> : <p>{registerResponse}</p>}
          <Spacer y={3} />
          <Button onClick={handleRegister}>Registrieren</Button>
          <div>
            <Link href="/">
              Als Gast fortfahren
            </Link>
          </div>
          <Spacer y={5} />
          <p>Bereits ein Konto?</p>
          <div className='justify-center flex content-center'>
            <Link href="/auth/login">
              Anmelden
            </Link>
          </div>
        </Card>
      </div>
    </div>

  )
}

