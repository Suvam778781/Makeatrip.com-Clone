import { useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { AdminPage } from "../AdminPages/Admin"
import { AuthContext } from "../Contexts/AuthContext"
import LandingPage from "../Landingpage/LandingPage"
import { Allpackages } from "../PackagePages/Allpackages"
import { Package } from "../PackagePages/Package"
import PrivateRoute1, { PrivateRoute2 } from "../PrivateRoutes/PrivateRoute"
 export default function Allroutes(){
    return (
        <>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/package" element={<PrivateRoute1><Allpackages/></PrivateRoute1>}/>
<Route path="/admin" element={<PrivateRoute2><AdminPage/></PrivateRoute2>}/>
    </Routes>
    </>)
 }
