import React from "react";
import appRoutes from "../../../routes";
import { Link } from "react-router";

const Desktop: React.FC = ()=>{

    return <>
    
    <nav className="hidden lg:block">
        <ul className="flex flex-row gap-3">
            {appRoutes&&appRoutes.map((route,index)=><li key={index}>
                <Link to={route.href}>{route.title}</Link>
            </li>)}
        </ul>
    </nav>
    
    
    
    
    </>

}


export default Desktop;