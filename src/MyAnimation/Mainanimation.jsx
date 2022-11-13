import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Container } from "@chakra-ui/react";

export default function MyFunctionalComponent() {
    useEffect(() => {
        AOS.init()

      }, []);
  return (
    <div style={{color:"blue",width:"200px",background:"yellow",height:"200px"}} data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500">

        Suvam panda
</div>
  );
}