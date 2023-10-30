import { Fish } from "@/types/fish";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Navigation from "./components/Navigation";

export default async function Page() {
  const data: Fish[] = await getData();
  return (
    <div className='bg-white'>
      <main>
        <Quiz data={data}></Quiz>
      </main>
    </div>
  )
}

async function getData(): Promise<Fish[]>{
  const url: string = process.env.NEXT_PUBLIC_API_URL as string;
  const res = await fetch(`${url}/Fish`)
  const resp: Fish[] = await res.json();
  return resp;
}
