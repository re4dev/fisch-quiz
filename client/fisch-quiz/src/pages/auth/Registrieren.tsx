import React, { useRef } from 'react';
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Container,
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
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
        <Card css={{ mw: '420px', p: '20px' }}>
          <Text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
            }}
          >
            Registrieren
          </Text>
          <Input
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Benutzername"
            ref={username}
          />
          <Spacer y={0.4} />
          <Input
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="E-Mail"
            ref={email}
          />
          <Spacer y={0.8} />
          <Input.Password
            type='password'
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Passwort"
            ref={password}
          />
          <Spacer y={0.3} />
          <Input.Password
            type='password'
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Passwort wiederholen"
            ref={passwordRepeat}
          />
          {registerError ? <Text>{registerError}</Text> : <Text>{registerResponse}</Text>}
          <Spacer y={3} />
          <Button onClick={handleRegister}>Registrieren</Button>
          <Container>
            <Link href="/">
              Als Gast fortfahren
            </Link>
          </Container>
          <Spacer y={5} />
          <Text h2 css={{ as: "center" }}>Bereits ein Konto?</Text>
          <Container display="flex" alignItems="center" justify="center">
            <Link href="/auth/login">
              Anmelden
            </Link>
          </Container>
        </Card>
      </Container>
    </div>

  )
}

