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
            Anmelden
          </Text>
          <Input
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Benutzername"
            ref={username}
          />
          <Spacer y={1} />
          <Input.Password
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Passwort"
            ref={password}
          />
          {loginError ? <Text>{loginError}</Text> : <Text>{loginResponse}</Text>}
          <Spacer y={4} />
          <Button onClick={handleLogin}>Einloggen</Button>
          <Container>
            <Link href="/">
              Als Gast fortfahren
            </Link>
          </Container>
          <Spacer y={5} />
          <Text h2 css={{ as: "center" }}>Neu hier?</Text>
          <Container display="flex" alignItems="center" justify="center">
            <Link href="/auth/registrieren" className="font-medium text-indigo-600 hover:text-indigo-500">
              Registrieren
            </Link>
          </Container>
        </Card>
      </Container>
    </div>

  )
}


