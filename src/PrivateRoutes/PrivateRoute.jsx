import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContext"

export default function PrivateRoute1({children}){
const {state}=useContext(AuthContext)

if(!state.isAuth){
return <Navigate to="/"/>
}

    return(children)

}

export function PrivateRoute2({children}){
    const {state}=useContext(AuthContext)
    if(!state.isAuth){
    return <Navigate to="/"/>
    }
    return (children)
     }