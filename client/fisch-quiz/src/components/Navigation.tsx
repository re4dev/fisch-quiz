import React from 'react'
import { Navbar, Button, Link, Spacer, NavbarContent, NavbarItem } from "@nextui-org/react";

function Navigation() {
  return (
    <Navbar isBordered>
        <NavbarContent>
            <Link href="#">Alle</Link>
            <Spacer x={0.5} />
            <Link href="#">Favoriten</Link>
            <Spacer x={0.5} />
            <Link href="#">Falsche</Link>
        </NavbarContent>
        <NavbarContent>
            <Link href="/auth/login">
                Login
            </Link>
            <NavbarItem>
                <Button as={Link} href="/auth/registrieren">
                    Sign Up
                </Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}

export default Navigation