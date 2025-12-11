import React from "react";
import type { HeroInterface } from "./interface";

const Hero: React.FC<HeroInterface> = ({image,title,description}) => {

    return <>
    
    <div className="container mx-auto overflow-hidden">
        <div>
            <img src={image} alt={title??'image logo'} className="max-w-1/2 mx-auto" />
        </div>
        {
            (title)&&<div className="text-center text-primary_dark dark:text-winter">
            {title&&<h2>{title}</h2>}
            {description&&<p>{description}</p>}
        </div>
        }
    </div>

    </>

}

export default Hero;