'use client'

import React from 'react'
import { Navbar, Link, NavbarContent, NavbarItem, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";

function Navigation() {
    return (
        <Navbar isBordered position="static" className='bg-gray-100'>
            <NavbarBrand className=''>
                <svg className='h-5 flex' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 283 64"><path fill="black" d="M141 16c-11 0-19 7-19 18s9 18 20 18c7 0 13-3 16-7l-7-5c-2 3-6 4-9 4-5 0-9-3-10-7h28v-3c0-11-8-18-19-18zm-9 15c1-4 4-7 9-7s8 3 9 7h-18zm117-15c-11 0-19 7-19 18s9 18 20 18c6 0 12-3 16-7l-8-5c-2 3-5 4-8 4-5 0-9-3-11-7h28l1-3c0-11-8-18-19-18zm-10 15c2-4 5-7 10-7s8 3 9 7h-19zm-39 3c0 6 4 10 10 10 4 0 7-2 9-5l8 5c-3 5-9 8-17 8-11 0-19-7-19-18s8-18 19-18c8 0 14 3 17 8l-8 5c-2-3-5-5-9-5-6 0-10 4-10 10zm83-29v46h-9V5h9zM37 0l37 64H0L37 0zm92 5-27 48L74 5h10l18 30 17-30h10zm59 12v10l-3-1c-6 0-10 4-10 10v15h-9V17h9v9c0-5 6-9 13-9z"/></svg>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <h1 className='font-semibold text-2xl text-center invisible sm:visible'>Fisch-Quiz</h1>
            </NavbarContent>
            <NavbarContent justify='end' className='hidden sm:flex'>
                <NavbarItem>
                    <Link color="foreground" href="/" className='font-medium text-lg'>
                        Alle
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="learning/1" className='font-medium text-lg'>
                        Lernen
                    </Link>
                </NavbarItem>
                {/*<NavbarItem>
                    <Link color="foreground" href="#">
                        Falsche
                    </Link>
                </NavbarItem> */}
            </NavbarContent>
            <NavbarMenuToggle
                className="sm:hidden"
                />
            <NavbarMenu className=''>
                <NavbarMenuItem className='justify-center flex border-b-2'>
                    <Link href='/' className='text-black font-semibold text-xl'>Alle</Link>
                </NavbarMenuItem>
                <NavbarMenuItem className='justify-center flex border-b-2'>
                    <Link href='learning' className='text-black font-semibold text-xl'>Lernen</Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    )
}

export default Navigation