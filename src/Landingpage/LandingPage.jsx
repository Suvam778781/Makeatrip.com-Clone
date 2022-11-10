import { Divider } from "@chakra-ui/react";
import { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import Banner, { Banner2 } from "./banner";
import { FooterPart } from "./footer";
import Navbar, { Banner1 } from "./Navbar";

export default function LandingPage() {
    const [scrollPosition, setScrollPosition] = useState(1);
const handleScroll = () => {
    const position = window.screenY;
    setScrollPosition(position);
};
useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
console.log(scrollPosition)
    return <div onScroll={handleScroll} >
        <Navbar />
        <Banner1 id="a2" />
        <Banner id="a3"/>
        <Banner2 />
        <Divider my={"50px"} />
        <FooterPart />
    </div>
}