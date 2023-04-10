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


export default function Registrieren() {
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
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Benutzername"
          />
          <Spacer y={0.4} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="E-Mail"
          />
          <Spacer y={0.8} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Passwort"
          />
          <Spacer y={0.3} />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Passwort wiederholen"
          />
          <Spacer y={4} />
          <Button>Registrieren</Button>
          <Spacer y={5} />
        <Text h2 css={{ as: "center"}}>Bereits ein Konto?</Text>
        <Container display="flex" alignItems="center" justify="center">
            <Link href="/auth/Login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Anmelden
            </Link> 
        </Container>
        </Card>
      </Container>
    </div>

  )
}

