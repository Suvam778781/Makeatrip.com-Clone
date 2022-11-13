import { useContext, useEffect } from "react";
import { Visible } from "../Contexts/ContextforVisiblity";
import { FooterPart } from "../Landingpage/footer";
import Navbar from "../Landingpage/Navbar";
import MyFunctionalComponent from "../MyAnimation/Mainanimation";
import { Package, PackageText } from "./Package";

export function Allpackages(){
    
    const { position, setposition } = useContext(Visible)
    const handleScroll = () => {
        const posi = window.scrollY;
        if(posi>2){
            setposition(true)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [position]);
    return <>
    <Navbar ih="500px"  text={"Exclusive Tours &amp; Holiday Packages"}image={"https://cdn1.tripoto.com/media/filter/nxxl/img/311219/Image/1573737581_screen_shot_2019_11_14_at_6_46_59_pm.jpg"} position={position}/>
    <Package  packagedata={"PackageMindful"} button={"Book Now"}heading="Tripoto's Mindful Retreats" dis="flex"/>
   <Package   packagedata={"TrendingDp"} button={"Get Quotes"} heading="Trending Domestic Packages" dis="none"/>
   <Package    packagedata={"TrendingDp"} button={"Get Quotes"} heading=" Trending International Packages" dis="none"/>
   <PackageText  /> 
   <FooterPart />
  
    
    </>
}