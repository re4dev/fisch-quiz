import { Fish } from "@/types/fish";
import Learning from "../../components/Learning";

export default async function Page() {
    const data: Fish[] = await getData();

    return (
        <div className='bg-white'>
            <Learning data={data}></Learning>
        </div>
    );
}

async function getData(): Promise<Fish[]> {
    const url: string = process.env.NEXT_PUBLIC_API_URL as string;
    const res = await fetch(`${url}/Fish`)
    const resp: Fish[] = await res.json();
    return resp;
}
