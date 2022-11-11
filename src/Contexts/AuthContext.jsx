import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext()
const initialState={isAuth:false,token:null,username:""}

const HandleLogin=()=>{}
const HandleLogout=()=>{}

export function AuthContextPeovider({children}){
    const [state,setstate]=useState(initialState)
    return <AuthContext.Provider value={{HandleLogin,HandleLogout,state,setstate}}>

        {children}
    </AuthContext.Provider>



} 