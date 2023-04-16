import FishAnswereField from '@/components/FishAnswereField'
import FishPic from '@/components/FishPic'
import Navigation from '@/components/Navigation'
import { HeartIcon } from '@/icons/HeartIcon'
import { Text, Container, Spacer, Button } from '@nextui-org/react'
import React from 'react'

function Quiz() {
  return (
    <Container> 
        <Navigation></Navigation>

        <Spacer y={1} />

        <Container justify='center' css={{ width:"fit-content" }}>
          <Text h1>Welchen Fisch siehst du?</Text>
        </Container>

        <Spacer y={3} />
       
        <Container display="flex" wrap='wrap' justify='center' css={{position: "relative"}}>
            <FishPic></FishPic>
            <div>
            <Button auto rounded="true" css={{position: "absolute"}}><HeartIcon fill="red" filled height="40" width="40"/></Button>
            </div>
        </Container>

        <Spacer y={3} />

        <FishAnswereField />
    </Container>
  )
}

export default Quiz