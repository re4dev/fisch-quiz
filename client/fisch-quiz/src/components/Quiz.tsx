import Navigation from '@/components/Navigation'
import { Text, Container, Spacer, Button, Image } from '@nextui-org/react'
import React, { useEffect, useState, useRef } from 'react'




function Quiz(data) {
  const [randomFishId, setRandomFishId] = useState<number>();
  var fishId: number;
  const FishData: IFish[] = data.data;
  const [allOtherFishes, setAllOtherFishes] = useState<IFish[]>([]);
  var otherFishes: IFish[] = FishData;
  var answereFishes: IFish[] = [];

  useEffect(() => {
    createRandomId();
  }, [data])


  function getRandomFishlist(fishListe: IFish[]) {
    // Array zum Speichern der zufälligen Fische
    let randomFishes: IFish[] = [];

    // Zufällige Indizes generieren
    while (randomFishes.length < 3) {
      let randomIndex = Math.floor(Math.random() * fishListe.length);

      let result = fishListe.find((x) => {
        return x.fishId == randomIndex;
      });

      if (randomIndex !== 0 && result !== undefined) {
        let foundFish = randomFishes.find((x) => { return (x.fishId == randomIndex) });

        if (foundFish === undefined) {
          randomFishes.push(result);
        }
      }


    }

    return randomFishes;
  }

  function createRandomId(): void {
    fishId = Math.floor(Math.random() * FishData.length);
    fishId = fishId + 1;
    otherFishes = FishData;
    answereFishes = [];

    otherFishes = FishData.filter((fish) => fish.fishId !== fishId);
    answereFishes.push(FishData.find(x => x.fishId === fishId));

    let randomList = getRandomFishlist(otherFishes);

    answereFishes = answereFishes.concat(randomList);


    setRandomFishId(fishId);
    console.log("vorher")
    console.log(answereFishes);
    shuffleArray(answereFishes);
    console.log("nachher")
    console.log(answereFishes);
    setAllOtherFishes(answereFishes);
  }

  function shuffleArray(array: IFish[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function checkAnswere(e: IFish): void {
    console.log(e);
    if(e.fishId === randomFishId){
      console.log("Richtige antwort")
      createRandomId();
    }
    else {
      console.log("Falsch.")
    }
  }

  return (
    <Container>
      <Navigation></Navigation>

      <Spacer y={1} />

      <Container justify='center' css={{ width: "fit-content" }}>
        <Text h1>Welchen Fisch siehst du?</Text>
        <p>aktuelle fish id ist {randomFishId}</p>
      </Container>

      <Spacer y={3} />

      {/* <QuizPlace FishData={FishData}></QuizPlace> */}
      <Container>
        <Container display="flex" wrap='wrap' justify='center' css={{ position: "relative" }}>
          <div>
            <Image
              width={320}
              height={180}
              src={"https://picsum.photos/id/" + randomFishId + "/200/300"}
              alt="Default Image"
              objectFit="fill"
              css={{ "border-radius": "30%", margin: "0" }}

            />
          </div>
          {/* <div>
              <Button auto rounded="true" css={{position: "absolute"}}><HeartIcon fill="red" filled height="40" width="40"/></Button>
              </div> */}
        </Container>

        <Spacer y={3} />

        <Container display='grid' alignItems="center" justify="center" >
          <Button icon={"A"} onPress={() => checkAnswere(allOtherFishes[0])}>{allOtherFishes[0] ? allOtherFishes[0].fishName : ""}</Button>
          <Spacer y={1} />
          <Button icon={"B"} onPress={() => checkAnswere(allOtherFishes[1])}>{allOtherFishes[0] ? allOtherFishes[1].fishName : ""}</Button>
          <Spacer y={1} />
          <Button icon={"C"} onPress={() => checkAnswere(allOtherFishes[2])}>{allOtherFishes[0] ? allOtherFishes[2].fishName : ""}</Button>
          <Spacer y={1} />
          <Button icon={"D"} onPress={() => checkAnswere(allOtherFishes[3])}>{allOtherFishes[0] ? allOtherFishes[3].fishName : ""}</Button>
          <Spacer y={1}></Spacer>
          {/* <Button onPress={createRandomId}>Start</Button> */}
        </Container>
      </Container>
    </Container>
  )
}

export default Quiz