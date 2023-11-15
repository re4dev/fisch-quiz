'use client'

import { Button, Image, Divider } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Fish } from '@/types/fish';


function Learning(props: { data: Fish[] }){
    const router = useRouter()
    const params = useParams();
    const fishes: Fish[] = props.data;
    var fishId: number = Number(params.id);
    var fishIdList = Array.from({ length: fishes.length }, (_, index) => index + 1);
    const [fishData, setFishData] = useState<string[]>([]);
    const [fishName, setFishName] = useState<string>("");

    useEffect(() => {
        fetch(`http://161.97.176.7:8066/api/Fish/${fishId}`)
            .then((res) => res.json())
            .then((data) => {
            if(data.status == 404){
                router.push(`/learning/1`)
            }else{
                setFishData(data)
            }
        })
        var name = fishes.find((x) => x.fishId === fishId)?.fishName;
        name != undefined ? setFishName(name) : setFishName("")  ;
    }, [fishId, fishes])
    
    function goBack(){
        if(fishId === 1){
            router.push(`/learning/${fishIdList.length}`)
        }
        else {
            router.push(`/learning/${fishId - 1}`)
        }
    }

    function goForward(){
        if(fishId === fishIdList.length){
            router.push(`/learning/1`)
        }
        else {
            router.push(`/learning/${fishId + 1}`)
        }
    }


    return (
        <div className=''>
            <div className='w-fit pb-10 mx-auto pt-4'>
                <p className='text-2xl lg:text-3xl font-semibold text-black'>{fishName}</p>
            </div>

            <div className='flex w-fit mx-auto items-center'>
                <Button className='mr-5 hidden sm:inline-flex' onPress={goBack}>zurück</Button>
                <div className='bg-bgBlueColor w-96 sm:w-96 md:w-450px lg:w-450px mx-auto rounded-xl pt-10'>
                    <div className=''>
                        <div className='flex justify-center'>
                            <div>
                                <Image
                                    src={"http://161.97.176.7/fishquiz/" + fishId + ".png"}
                                    alt="Default Image"
                                    className='w-80 rounded-lg m-0 bg-bgBlueColor'
                                />
                            </div>
                        </div>
                    </div>
                    <Divider className='bg-gray-100 w-5/6 mx-auto' />
                    <div className='w-fit mx-auto h-52 mt-5'>
                        {fishData.map((item, index) => <div className='ml-2 mb-2 text-sm sm:text-medium font-semibold' key={index}>- {item}</div>)}
                    </div>
                </div>
                <Button className='ml-5 hidden sm:inline-flex' onPress={goForward}>weiter</Button>
            </div>
            <div className='sm:hidden mt-5 flex mx-auto w-1/2 justify-between'>
                <Button className='' onPress={goBack}>zurück</Button>
                <Button className='' onPress={goForward}>weiter</Button>
            </div>
        </div>
    )
}

export default Learning