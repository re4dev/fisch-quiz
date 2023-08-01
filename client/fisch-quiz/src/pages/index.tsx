import Head from 'next/head'
import { Inter } from 'next/font/google'
import Quiz from '@/components/Quiz'
import { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ FishData }) {
  return (
    <>
      <Head>
        <title>Fisch-Quiz</title>
        <meta name="description" content="Kennst du alle Fische? Fisch-Quiz lässt es dich wissen." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Quiz data={FishData}></Quiz>
      </main>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/Fish", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  var result = await response.json()
  var FishData = result;
  return {
    props: {
      FishData,
    },
  };
}