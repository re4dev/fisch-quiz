import { Fish } from "@/types/fish";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";

export default async function Page() {
  const data: Fish[] = await getData();
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <main>
        <Quiz data={data}></Quiz>
      </main>
      <Footer></Footer>
    </div>
  )
}

async function getData(): Promise<Fish[]>{
  const url = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${url}/Fish`)
  const resp: Fish[] = await res.json();
  return resp;
}
