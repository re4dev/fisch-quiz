import React from 'react'
import { Button, Spacer } from '@nextui-org/react';

function FishAnswereField() {
  return (
    <div className='items-center justify-center'> 
        <Button>Fish A</Button>
        <Spacer y={1} />
        <Button>Fish B</Button>
        <Spacer y={1} />
        <Button>Fish C</Button>
        <Spacer y={1} />
        <Button>Fish D</Button>
    </div>
  )
}

export default FishAnswereField
