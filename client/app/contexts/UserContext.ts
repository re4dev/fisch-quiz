"use client"
import { SetStateAction, createContext, Dispatch} from "react";


interface authContextType {
    userLoggedIn: boolean,
    setUserLoggedIn: Dispatch<SetStateAction<boolean>>
};

const authContextDefault = {
    userLoggedIn: false,
    setUserLoggedIn: (userLoggedIn: boolean) => {}
} as authContextType


export const UserContext = createContext<authContextType>(authContextDefault);

