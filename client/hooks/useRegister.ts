import { useEffect, useState } from "react";

export default function useRegister() {
    const [registerError, setRegisterError] = useState<string | null>("");
    const [registerResponse, setRegisterResponse] = useState("");
    const [registerIsLoading, setRegisterIsLoading] = useState(false);

    const register = async (registerUser: IRegisterUser): Promise<void> => {
        setRegisterIsLoading(true);
        setRegisterError("");
        setRegisterResponse("");
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/User/Register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(registerUser)
            });

            if(response.status != 200){
                const json = await response.json();
                setRegisterResponse(json);
            }
            else{
                setRegisterResponse("Registration successful")
            }

        } catch {
            console.log("error")
            setRegisterError("error.message");
        } finally {
            setRegisterIsLoading(false);
        }
        
    }

    return { register, registerResponse, registerError, registerIsLoading }
}
