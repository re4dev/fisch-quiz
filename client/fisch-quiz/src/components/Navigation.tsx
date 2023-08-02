import React from 'react'
import { Navbar, Button, Link, Spacer } from "@nextui-org/react";
import { useSession, signIn, signOut  } from 'next-auth/react';

function Navigation() {
    const { data: session } = useSession();
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
            {/* <Navbar.Link color="inherit" href="/auth/login">
                Login
            </Navbar.Link>
            <Navbar.Item>
                <Button auto flat as={Link} href="/auth/registrieren">
                    Sign Up
                </Button>
            </Navbar.Item> */}
            { session ? (
                <>
                    <p>{session.user.name}, {session.user.email}</p>
                    <Button onPress={() => signOut()}>Sign Out</Button>
                </>
            ):
            (
                <Button onPress={() => signIn()}>Sign In</Button>
            )
            }
        </Navbar.Content>
    </Navbar>
  )
}

export default Navigation