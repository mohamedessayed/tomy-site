import React from "react";
import appRoutes from "../../../routes";
import { Link } from "react-router";

const Desktop: React.FC = ()=>{

    return <>
    
    <nav className="hidden lg:flex justify-between items-center w-full">
        <ul className="flex flex-row gap-3">
            {appRoutes&&appRoutes.map((route,index)=><li key={index}>
                <Link to={route.href}>{route.title}</Link>
            </li>)}
        </ul>

        <Link to={'/login'} className="bg-winter cursor-pointer text-brown p-3 rounded-lg">
            Login
        </Link>
    </nav>
    
    
    
    
    </>

}


export default Desktop;