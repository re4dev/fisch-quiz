import React from 'react';
import {
  Card,
  Spacer,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';
import Link from 'next/link';


export default function Login() {
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
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Benutzername"
          />
          <Spacer y={1} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Passwort"
          />
          <Spacer y={4} />
          <Button>Einloggen</Button>
          <Spacer y={5} />
        <Text h2 css={{ as: "center"}}>Neu hier?</Text>
        <Container display="flex" alignItems="center" justify="center">
            <Link href="/auth/Registrieren" className="font-medium text-indigo-600 hover:text-indigo-500">
                Registrieren
            </Link> 
        </Container>
        </Card>
      </Container>
    </div>

  )
}


