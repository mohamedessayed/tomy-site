import { useContext } from "react"
import type { userProps } from "../context/userTypes"
import { userContext } from "../context/userContext"



export const useAuth =() =>{

    const context = useContext(userContext);

    if(!context) {
        throw new Error("useAuth must be used withn context");
    }

    const {user,setUser} = context;


    const login = (userData:userProps)=>{
        localStorage.setItem('user',JSON.stringify(userData))
        setUser(userData);
    }


    const logout = ()=>{
        localStorage.removeItem('user');
        setUser(undefined);

    }
    

    const isAuthendicated = Boolean(user?.accessToken)
    
    return {
        user,login,logout,isAuthendicated
    }
}