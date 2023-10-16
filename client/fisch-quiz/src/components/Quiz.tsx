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
  const [answereResult, setAnwereResult] = useState<string>("");

  useEffect(() => {
    createRandomId();
  }, [data])


  function getRandomFishlist(fishListe: IFish[]) {
    setAnwereResult("");
    
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
      setAnwereResult("Richtig!");
      createRandomId();
    }
    else {
      setAnwereResult("Falsch! Nächster Versuch.")
      console.log("Falsch.")
    }
  }

  return (
    <Container className=''>
      {/* <Navigation></Navigation> */}

      <Spacer y={1} />

      <Container className='w-fit'>
        <Text className='text-3xl font-semibold'>Welchen Fisch siehst du?</Text>
      </Container>

      <Spacer y={3} />

      {/* <QuizPlace FishData={FishData}></QuizPlace> */}
      <div className=''>
        <div className='flex justify-center'>
          <div>
            <Image
              src={"http://161.97.176.7/fishquiz/" + randomFishId + ".png"}
              alt="Default Image"
              objectFit="fill"
              className='w-80 rounded-lg m-0'

            />
          </div>
          {/* <div>
              <Button auto rounded="true" css={{position: "absolute"}}><HeartIcon fill="red" filled height="40" width="40"/></Button>
              </div> */}
        </div>

        <div className='w-fit justify-center h-5 mx-auto'>
          {answereResult ? <div><p className='text-red-600'>{answereResult}</p></div> : <div></div>}
        </div>
        

        <Spacer y={3} />

        <div className='mx-auto w-fit'>
          <Button className='bg-blue-500 w-64' icon={"A"} onPress={() => checkAnswere(allOtherFishes[0])}>{allOtherFishes[0] ? allOtherFishes[0].fishName : ""}</Button>
          <Spacer y={1} />
          <Button className='bg-blue-500 w-64' icon={"B"} onPress={() => checkAnswere(allOtherFishes[1])}>{allOtherFishes[0] ? allOtherFishes[1].fishName : ""}</Button>
          <Spacer y={1} />
          <Button className='bg-blue-500 w-64' icon={"C"} onPress={() => checkAnswere(allOtherFishes[2])}>{allOtherFishes[0] ? allOtherFishes[2].fishName : ""}</Button>
          <Spacer y={1} />
          <Button className='bg-blue-500 w-64' icon={"D"} onPress={() => checkAnswere(allOtherFishes[3])}>{allOtherFishes[0] ? allOtherFishes[3].fishName : ""}</Button>
          <Spacer y={1}></Spacer>
          {/* <Button onPress={createRandomId}>Start</Button> */}
        </div>
      </div>
    </Container>
  )
}

export default Quiz