import {createContext, useEffect, useState } from "react";
import type { userContextProps, userProps, userProvider } from "./userTypes";





export const userContext = createContext<userContextProps|null>(null);

const UserContextProvider = ({children}:userProvider)=>{

    const getInitialUser = (): userProps | undefined => {
        if (typeof window === "undefined") return undefined;

        try {
            const storedUser = localStorage.getItem("user");
            return storedUser ? (JSON.parse(storedUser) as userProps) : undefined;
        } catch {
            localStorage.removeItem("user");
            return undefined;
        }
    };




    const [user,setUser] = useState<userProps|undefined>(getInitialUser);

    useEffect(()=>{
        const userApp = localStorage.getItem('user');
        

        if(userApp){
            setUser(JSON.parse(userApp))
        }

    },[])


    return <userContext.Provider value={{user,setUser}}>

        {children}

    </userContext.Provider>
}


export default UserContextProvider