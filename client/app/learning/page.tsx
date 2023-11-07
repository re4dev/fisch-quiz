'use client'

import { Button, Image, Divider } from '@nextui-org/react'
import React from 'react'
import { Fish } from '@/types/fish';


function Quiz(props: { data: Fish[] }) {
    const { data } = props;



    return (
        <div className=''>
            <div className='w-fit pb-10 mx-auto pt-4'>
                <p className='text-2xl lg:text-3xl font-semibold text-black'>Welchen Fisch siehst du?</p>
            </div>

            <div className='flex w-fit mx-auto items-center'>
                <Button className='mr-5'>zurück</Button>
                <div className='bg-bgBlueColor w-96 sm:w-96 md:w-450px lg:w-450px mx-auto rounded-xl pt-10'>
                    <div className=''>
                        <div className='flex justify-center'>
                            <div>
                                <Image
                                    src={"http://161.97.176.7/fishquiz/" + 1 + ".png"}
                                    alt="Default Image"
                                    className='w-80 rounded-lg m-0 bg-bgBlueColor'
                                />
                            </div>
                        </div>
                    </div>
                    <Divider className='bg-gray-100 w-5/6 mx-auto' />
                    <div className='w-fit mx-auto h-52 mt-5'>
                        <p>- info</p>
                        <p>- info</p>
                        <p>- info</p>
                    </div>
                </div>
                <Button className='ml-5'>weiter</Button>
            </div>

        </div>
    )
}

export default Quiz