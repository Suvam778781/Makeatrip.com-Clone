import { Route, Routes } from "react-router-dom"
import LandingPage from "../Landingpage/LandingPage"
import { Allpackages } from "../PackagePages/Allpackages"
import { Package } from "../PackagePages/Package"

 export default function Allroutes(){

    return (
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/package" element={<Allpackages/>}/>
<Route path="/admin" element={<h1>Admin page</h1>}/>
    </Routes>)
 }