'use client'

import React, { useState } from 'react'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Beta from './Beta';


export default function Changelog() {
    const [version, setVersion] = useState<string>("beta");

    function selectionChanged(e: any) {
        setVersion(e);
    }

    return (
        <div>
            <div className='w-4/6 mx-auto mt-4'>
                <h1 className='text-xl lg:text-2xl font-semibold text-black justify-center hidden sm:flex'>Changelog</h1>
                <div className='flex justify-center sm:justify-end align-middle h-6 mb-2 w-auto'>
                    <p className='pr-0 hidden sm:flex sm:pr-3'>version:</p>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered"
                                className='h-auto'
                            >
                                {version}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions" selectionMode="single" onAction={selectionChanged}>
                            <DropdownItem key="beta">beta</DropdownItem>
                            <DropdownItem key="v1">v1</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
            <Beta version={version} />
        </div>

    )
}
