import React, { useState } from "react";
import Desktop from "./Desktop";
import Logo from "./Logo";
import {Menu, X} from 'lucide-react';
import Mobile from "./mobile";

const Header: React.FC = ()=>{

    const [openMobile,setOpenMobile] = useState(false);
    return <>

    <header className="bg-primary_dark text-winter py-3">

        <div className="flex items-center justify-between lg:justify-start px-10 mx-auto">

            <Logo />

            <Desktop />

            <button onClick={()=>setOpenMobile(!openMobile)} className="cursor-pointer lg:hidden text-winter">
                {openMobile?<X size={28} />:<Menu size={28} />}
            </button>

        </div>

{
    openMobile&&<nav id="mobile-navigtion" className="pt-3">
            <Mobile isOpen={openMobile} />
        </nav>
}
        

    </header>
    
    </>
}


export default Header;