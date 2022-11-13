import { AddIcon, SearchIcon } from "@chakra-ui/icons";

import { Button, FormControl, FormLabel, Link, Input, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, HStack, Container, Image, MenuButton, Menu, MenuList, MenuItem, VStack, Heading, Icon, Grid, Skeleton, Collapse, Text, Modal } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { style1, style2 } from "../AllStyles/Styles";
import { AuthContext } from "../Contexts/AuthContext";
import { LoginPage } from "../Login&Signup/Login";
import { Draweer } from "./Drawer";
export default function Navbar({ position=true,display="visible",image="",ih="100px" ,text=""}) {
    const navigate=useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {state}=useContext(AuthContext)
    // console.log(state)
    const {username}=state
    return (
        <VStack h={ih} w="100%" backgroundImage={image} >
            <HStack style={position ? style2 : style1} h={"60px"} zIndex="20" px="30px" w={"100%"}>
                <HStack w="100px" my={"auto"} alignItems={"center"}>

                    <Link onClick={()=>navigate("/")} _hover={{ textDecoration: "none", color: "gray" }} alignItems={"center"}><Image fontSize={"20px"} ml="-40px" textAlign={"center"} height={"100%"} width={{ "2xl": "260px" }} fontFamily={"cursive"} pl="20px" h={"60px"} src="https://i.ibb.co/3mNc4H5/makeatrip-logopng.png"/></Link>
                </HStack>
                <HStack my="auto" w={{ md: "400px", lg: "450px", xl: "500px" }} style={!position ? { display: "none" } : { display: "flex" }} overflow="hidden" borderRadius={"7px"} alignItems={"center"}> <Input my="10px" backgroundColor="white" w="500px" color={"black"} placeholder="Search for itineraries,destinations,hotels or activities" /><SearchIcon /></HStack>

                <HStack visibility={{base:"hidden",lg:"visible","2xl":"visible",xl:"visible"}} fontSize={{ md: "14px", base: "12px", xl: "16px", "2xl": "18px", lg: "15px" }} py={"15px"} gap={{ md: "8px", lg: "11px", xl: "13px", "2xl": "15px" }}>
                    <Menu >
                        <MenuButton as={Link} _hover={{ textDecoration: "none", color: "gray" }}>
                            Inspirations
                        </MenuButton>
                        <MenuList color="black">
                            <MenuItem as={Link}>Vigit Singapore</MenuItem>
                            <MenuItem as={Link}>Beaches</MenuItem>
                            <MenuItem as={Link}>Mountains</MenuItem>
                            <MenuItem as={Link}>Heritage</MenuItem>
                            <MenuItem as={Link}>Weakend Guide</MenuItem>
                            <MenuItem as={Link}>Upcoming Festivals</MenuItem>
                            <MenuItem as={Link}>Honeymoon Packages</MenuItem>
                            <MenuItem as={Link}>Wildlife Tourism</MenuItem>
                            <MenuItem as={Link}>Road Trips</MenuItem>
                            <MenuItem as={Link}>Getaways Guide</MenuItem>
                            <MenuItem as={Link}>Luxury Travel</MenuItem>
                            <MenuItem as={Link}>Explore More</MenuItem>
                        </MenuList>
                        </Menu>
                    <Link _hover={{ textDecoration: "none", color: "gray" }} >Forum</Link>
                    <Link onClick={()=>navigate("/package")} _hover={{ textDecoration: "none", color: "gray" }} >Package</Link>
                    <Menu>
                        <MenuButton _hover={{ textDecoration: "none", color: "gray" }} as={Link}>
                            Publish Trip
                        </MenuButton>

                        <MenuList color={"black"} transition={"ease-in-out"} transitionDelay="1sec" >
                            <MenuItem as={Link}>Create New</MenuItem>
                            <MenuItem as={Link}>Uploads Photo/Videos</MenuItem>
                            <MenuItem as={Link}>Import Blog</MenuItem>
                        </MenuList>
                    </Menu>
                    <Link onMouseDown={onOpen} _hover={{ textDecoration: "none", color: "gray" }}>{state.isAuth?state.username:"Sign In"}</Link>

                    <Link onClick={()=>navigate("/admin")}>{state.usertype=="Admin"?"Admin Page":null}</Link>

                    
                </HStack>
                <HStack display={{base:"flex",lg:"none","2xl":"none",xl:"none"}} visibility={{base:"visible",lg:"hidden","2xl":"hidden",xl:"hidden"}} py={"11px"} > <Draweer visibility={{base:"visible",md:"hidden",lg:"hidden","2xl":"hidden",xl:"hidden"}} margin="auto"/></HStack>
               
            </HStack>
            <VStack pt="150px">
                <Heading fontSize={"32px"} color={"white"}>{text}</Heading>
                <HStack style={position ? { display: "none" } : { display: "block" }} visibility={{ lg: "visible", "2xl": "visible" }} borderRadius={"6px"} lineHeight={"20px"}>
                    <Input backgroundColor={"white"} fontWeight="normal" border="none" w={{ md: "330px", "lg": "530px" }} h="46px" placeholder="Search for itineraries,destinations,hotels or activities" />
                    <SearchIcon onClick={() => console.log("Clicked")} right="400px" position={"relative"} left='-35px' zIndex={"18"} background={"white"}  />
                </HStack>
            </VStack>
            {/* here login part starts manage onclose isopen and onopen on click of login login modal will shown */}
            <LoginPage isOpen={isOpen} onClose={onClose} />
        </VStack>
    ) 
}
// adding banner,search functionality,and heading
export function Banner1() {
    return (
        <Grid templateColumns={{ base: "repeat(2, 1fr)", sm: 'repeat(2, 1fr)', "lg": 'repeat(4, 1fr)' }} paddingY={"30px"} w="80%" margin={"auto"}>
            <Image h="80px" w="500px" src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png" />
            <Image h="80px" w={"500px"} src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png" />
            <Image h="80px" w="500px" src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png" />
            <Image h="80px" w="500px" src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png" />
        </Grid>
    )
}