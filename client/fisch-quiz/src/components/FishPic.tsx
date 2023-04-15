import React from 'react'
import { Image } from '@nextui-org/react';

export const FishPic = (props) => {
  return (
    <div>
      <Image
          width={320}
          height={180}  
          src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
          alt="Default Image"
          objectFit="fill"
          css={{"border-radius": "30%", margin: "0"}}
          
      />
    </div>
  )
}