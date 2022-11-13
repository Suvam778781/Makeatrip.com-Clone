import { Link, VStack, Text, HStack, Container, Divider, Image, Flex, IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import { Footer2 } from "./Drawer";
export function FooterPart() {
    const navi=useNavigate()
    return (
        
        <VStack w="100%"  >
             <HStack display={{base:"none",xl:"inherit","2xl":"inherit",lg:"inherit"}} marginTop={"auto"} w="100%" margin="auto" justifyContent={"space-around"}>
                <VStack  marginLeft={"20px"}>
                    <Link onClick={()=>navi("/")}>  <Image h={"170px"} w={"110px"} src="https://i.ibb.co/3mNc4H5/makeatrip-logopng.png"/></Link>
                    <Text alignItems={"flex-start"} fontSize={"14px"}>India's Largest Travel Community</Text>
                    {/* Icons */}
                    <Divider/>
                    <HStack>
          <SocialIcon style={{width:"20px",borderRadius:"10px"}} color="blue" network="facebook" bgColor="black"/>
          <SocialIcon style={{width:"20px",borderRadius:"10px"}} network="twitter" bgColor="black"/>
          <SocialIcon style={{width:"20px",borderRadius:"10px"}} network="instagram" bgColor="black"/>
          <SocialIcon style={{width:"20px",borderRadius:"10px"}} network="youtube" bgColor="black"/>
          <SocialIcon style={{width:"20px",borderRadius:"10px"}} network="pinterest" bgColor="black"/>
                    </HStack>
                    <Link href="https://play.google.com/store/apps/details?id=com.tripoto&utm_source=web&utm_medium=footer"> <Image  w="120px" src="https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg" alt="Google Play"/></Link>
                </VStack>
                <Flex verticalAlign={"top"} height="100%" position={"relative"} justifyContent={"space-evenly"}  margin="auto"width="70%">
                <VStack fontSize={"13px"}  align={"flex-start"} verticalAlign={'top'} alignItems={"flex-start"}>
                    <Text fontSize={"18px"}  color={"blue.400"} >How It Works</Text>
                    <Link>FAQ’s</Link>
                    <Divider />
                    <Link>Privacy Policy</Link>
                    <Divider />
                    <Link>Terms & Conditions</Link>
                    <Divider />
                    <Link>Careers</Link>
                    <Divider />
                    <Link>Contact Us</Link>
                </VStack> 
                <VStack fontSize={"13px"} alignItems={"flex-start"}>
                    <Text  color={"blue.400"} fontSize={"18px"}>Products</Text>
                    <Link>Travel Guides</Link>
                    <Divider />
                    <Link>Trips & Itineraries</Link>
                    <Divider />
                    <Link>Weekend Getaways</Link>
                    <Divider />
                    <Link>Places to Visit</Link>
                    <Divider />
                    <Link>Other Travel Categories</Link>
                    <Divider />
                    <Link>Tripoto Forum</Link>
                    <Divider />
                    <Link>Honeymoon Packages</Link>
                </VStack>

                <VStack fontSize={"13px"} alignItems={"flex-start"}>
                    <Text  color={"blue.400"} fontSize={"18px"} >Important Travel Links</Text>
                    <Link>Goa Tourism</Link>
                    <Divider />
                    <Link>Dubai Tourism</Link>
                    <Divider />
                    <Link>Singapore Tourism</Link>
                    <Divider />
                    <Link>Kerala Tourism</Link>
                    <Divider />
                    <Link>Manali Tourism</Link>
                    <Divider />
                    <Link>Bali Tourism</Link>
                    <Divider/>
                    <Link>Sri Lanka Tourism</Link>
                    <Divider/>
                    <Link>Honeymoon Destinations In India</Link>
                </VStack>

                <VStack fontSize={"13px"}  alignItems={"flex-start"}>
                    <Text  color={"blue.400"} fontSize={"18px"} >Partner Programs</Text>
                    <Link>Buy Travel Leads</Link>
                    <Divider/>
                    <Link>Partner With Us</Link>
                    <Divider/>
                    <Link>Earn Credits</Link>
                    <Divider/>
                    <Link>Get Paid To Travel</Link>
                    <Divider />
                    <Link>Import Blog To Itinerary</Link>
                </VStack>
                </Flex>
                
            </HStack >
            <Divider my={"12px"}/>
            <Container visibility={{base:"hidden",xl:"visible","2xl":"visible",lg:"visible"}} w="100%" justifyContent={"center"} display={"flex"}  margin={"auto"} fontWeight={"semibold"} fontSize={"15px"}><Text textAlign={"center"}>© All rights reserved.</Text></Container>
            <Footer2 />
        </VStack>

    

    
    )
} 