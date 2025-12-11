import React from "react";
import { Link } from "react-router";



const Logo: React.FC = ()=>{
    return <>
    
    <Link to={'/'} aria-label="Go to App Homepage">
    
    <img src="/vite.svg" alt="App Logo" className="block h-16 w-auto" aria-hidden="false" />

    </Link>
    
    </>
}


export default Logo;