import React from 'react'
import { Button, Spacer } from '@nextui-org/react';

function FishAnswereField() {
  return (
    <div className='items-center justify-center'> 
        <Button icon={"A"}>Fish A</Button>
        <Spacer y={1} />
        <Button icon={"B"}>Fish B</Button>
        <Spacer y={1} />
        <Button icon={"C"}>Fish C</Button>
        <Spacer y={1} />
        <Button icon={"D"}>Fish D</Button>
    </div>
  )
}

export default FishAnswereField
