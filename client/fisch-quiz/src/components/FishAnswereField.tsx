import React from 'react'
import PropTypes from 'prop-types'
import { Button, Spacer, Container } from '@nextui-org/react';

function FishAnswereField(props) {
  return (
    <Container display='grid' alignItems="center" justify="center" > 
        <Button icon={"A"}>Fish A</Button>
        <Spacer y={1} />
        <Button icon={"B"}>Fish B</Button>
        <Spacer y={1} />
        <Button icon={"C"}>Fish C</Button>
        <Spacer y={1} />
        <Button icon={"D"}>Fish D</Button>
    </Container>
  )
}

FishAnswereField.propTypes = {}

export default FishAnswereField
