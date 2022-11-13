import { Divider } from "@chakra-ui/react";
import { useContext, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { Visible } from "../Contexts/ContextforVisiblity";
import Banner, { Banner2, Banner3, Banner4 } from "./banner";
import { FooterPart } from "./footer";
import Navbar, { Banner1 } from "./Navbar";


import AOS from 'aos';
import 'aos/dist/aos.css';
// console.log(position+1)
export default function LandingPage() {

    const { position, setposition } = useContext(Visible)
    const handleScroll = () => {
        const posi = window.scrollY;
        if(posi>2){
            setposition(true)
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [position]);
    return <div onScroll={handleScroll}>
        <Navbar ih="400px" text={"India's Largest Community of Travellers"} image={"https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"} position={position} />
        <Banner1 id="a2" />
        <Banner id="a3" />
        <Banner2 />
        <Banner3 bannertext={"Find Best Places to Visit in India in November & December"} bannername={"banner2"} image="https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1666956480_rajasthan_1.jpg"/>
        <Banner4/>
        <Banner3 bannertext={"Plan You Next International Trip During November & December"} bannername={"banner4"} image="https://cdn1.tripoto.com/media/filter/nxxl/img/2215463/Image/1666956495_indonesia_1.jpg"/>
        <Divider my={"50px"} />
        <FooterPart />
    </div>
}