import type { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

const ProtectedRoute =  ({children}:{children:ReactNode}) =>{
    const {isAuthendicated}= useAuth()

    

// return children;
    return isAuthendicated? children: <Navigate to={'/login'} replace />

}


export default ProtectedRoute;