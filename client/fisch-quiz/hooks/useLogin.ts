import { useState } from "react";

export default function useLogin() {
    const [loginError, setLoginError] = useState<string | null>("");
    const [loginResponse, setLoginResponse] = useState("");
    const [loginIsLoading, setLoginIsLoading] = useState(false);

    const login = async (loginUser: ILoginUser): Promise<void> => {
        setLoginIsLoading(true);
        setLoginError("");
        setLoginResponse("");
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/User/Login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginUser)
            });
            
            if(response.status != 200){
                const json = await response.json();
                setLoginResponse(json);
            }
            else{
                setLoginResponse("Login successful")
            }

        } catch {
            console.log("Fehler")
            setLoginError("fehler");
        } finally {
            setLoginIsLoading(false);
        }
        
    }

    return { login, loginResponse, loginError, loginIsLoading }
}
