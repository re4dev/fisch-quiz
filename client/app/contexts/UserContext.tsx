"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SetStateAction, createContext, Dispatch, useState, useEffect} from "react";


export interface authContextType {
    userLoggedIn: boolean,
    setUserLoggedIn: Dispatch<SetStateAction<boolean>>
};

export const UserContext = createContext<authContextType | null>(null);

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

export default function UserContextProvider({ children }: ThemeContextProviderProps): JSX.Element {
    const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
    const supabase = createClientComponentClient();

    useEffect(() => {
        console.log("test");
      async function getUser(){
        const {data: {user}} = await supabase.auth.getUser();
        if(user){
            setUserLoggedIn(true);
        }
      }
      getUser();
    }, [])


    return (
        <UserContext.Provider value={{userLoggedIn, setUserLoggedIn}}>
            {children}
        </UserContext.Provider>
    );
}



