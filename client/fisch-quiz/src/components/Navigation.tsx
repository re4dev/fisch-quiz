import React from 'react'
import { Navbar, Button, Link, Spacer } from "@nextui-org/react";

function Navigation() {
  return (
    <Navbar isBordered>
        <Navbar.Content hideIn="xs">
            <Navbar.Link href="#">Alle</Navbar.Link>
            <Spacer x={0.5} />
            <Navbar.Link href="#">Favoriten</Navbar.Link>
            <Spacer x={0.5} />
            <Navbar.Link href="#">Falsche</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
            <Navbar.Link color="inherit" href="/auth/login">
                Login
            </Navbar.Link>
            <Navbar.Item>
                <Button auto flat as={Link} href="/auth/registrieren">
                    Sign Up
                </Button>
            </Navbar.Item>
        </Navbar.Content>
    </Navbar>
  )
}

export default Navigation