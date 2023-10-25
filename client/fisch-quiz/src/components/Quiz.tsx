import Navigation from '@/components/Navigation'
import { Spacer, Button, Image } from '@nextui-org/react'
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
    shuffleArray(answereFishes);
    setAllOtherFishes(answereFishes);
  }

  function shuffleArray(array: IFish[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function checkAnswere(e: IFish): void {
    if(e.fishId === randomFishId){
      setAnwereResult("Richtig!");

      setTimeout(() => {
        createRandomId();
      }, 1300);
    }
    else {
      setAnwereResult("Falsch! Nächster Versuch.")
    }
  }

  return (
    <div>

      <div className='w-fit mx-auto pb-10 pt-4'>
          <p className='text-2xl lg:text-3xl font-semibold'>Welchen Fisch siehst du?</p>
      </div>

      <div className='bg-bgBlueColor w-96 sm:w-96 md:w-450px lg:w-450px mx-auto rounded-xl pt-10'>
        {/* <Navigation></Navigation> */}

        {/* <QuizPlace FishData={FishData}></QuizPlace> */}
        <div className=''>
          <div className='flex justify-center'>
            <div>
              <Image
                src={"http://161.97.176.7/fishquiz/" + randomFishId + ".png"}
                alt="Default Image"
                className='w-80 rounded-lg m-0'

              />
            </div>
            {/* <div>
                <Button auto rounded="true" css={{position: "absolute"}}><HeartIcon fill="red" filled height="40" width="40"/></Button>
                </div> */}
          </div>

          <div className='w-fit justify-center h-5 mx-auto pt-10'>
            {answereResult ? <div><p className={`font-extrabold text-md ${answereResult === 'Richtig!' ? 'text-green-500' : 'text-red-400'}`}>{answereResult}</p></div> : <div></div>}
          </div>

          <div className='mx-auto w-fit pb-20 pt-10'>
            <Button className='bg-blue-500 w-64 md:w-400px' onPress={() => checkAnswere(allOtherFishes[0])}>{allOtherFishes[0] ? allOtherFishes[0].fishName : ""}</Button>
            <Spacer y={1} />
            <Button className='bg-blue-500 w-64 md:w-400px' onPress={() => checkAnswere(allOtherFishes[1])}>{allOtherFishes[0] ? allOtherFishes[1].fishName : ""}</Button>
            <Spacer y={1} />
            <Button className='bg-blue-500 w-64 md:w-400px' onPress={() => checkAnswere(allOtherFishes[2])}>{allOtherFishes[0] ? allOtherFishes[2].fishName : ""}</Button>
            <Spacer y={1} />
            <Button className='bg-blue-500 w-64 md:w-400px' onPress={() => checkAnswere(allOtherFishes[3])}>{allOtherFishes[0] ? allOtherFishes[3].fishName : ""}</Button>
            {/* <Button onPress={createRandomId}>Start</Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz