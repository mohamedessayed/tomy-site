import {createContext, useEffect, useState } from "react";
import type { userContextProps, userProps, userProvider } from "./userTypes";





export const userContext = createContext<userContextProps|null>(null);

const UserContextProvider = ({children}:userProvider)=>{

    const [user,setUser] = useState<userProps|undefined>(undefined);

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