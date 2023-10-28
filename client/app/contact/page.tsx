'use client'

import { Input, Card, Spacer, Textarea, Button } from '@nextui-org/react'
import React from 'react'

export default function Contact() {
  return (
    <div className='justify-center flex content-center'>
        <Card>
            <p className='text-base'>Kontakt</p>
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
    </div>
  )
}
