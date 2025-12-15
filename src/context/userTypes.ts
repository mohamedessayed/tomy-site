import type React from "react";
import type { ReactNode } from "react";

export type userProps = {
accessToken:string;
email:string;
firstName:string;
gender:string;
id:number;
image:string;
lastName:string;
refreshToken:string; 
username: string;
}


export type userProvider = {
    children: ReactNode;
}

export type userContextProps = {
    user: userProps| undefined;
    setUser: React.Dispatch<React.SetStateAction<userProps| undefined>>;
}