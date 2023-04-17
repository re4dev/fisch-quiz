import Navigation from '@/components/Navigation'
import { Container, Input, Card, Text, Spacer, Textarea, Button } from '@nextui-org/react'
import React from 'react'

export default function Contact() {
  return (
    <Container display='flex' alignItems='center' justify='center'>
        <Navigation></Navigation>
        <Card css={{width: 750, height: "fit-content", padding: "$10", marginTop: 50}}>
            <Text size={24}>Kontakt</Text>
            <Spacer x={2} />
            <form>
                <Input placeholder='Name' label='Name' width="300px"></Input>
                <Spacer x={1} />
                <Input placeholder='E-Mail' label='E-Mail' width="300px"></Input>
                <Spacer x={1} />
                <Textarea placeholder='Text' label='Beschreibung' fullWidth ></Textarea>
                <Spacer x={1} />
                <Button>Absenden</Button>
            </form>
        </Card>
    </Container>
  )
}
