import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { HStack, Image, Link, MenuButton, Menu, MenuList, MenuItem, VStack, Heading, Input, Icon, useDisclosure, Grid, Skeleton, Collapse, Text } from "@chakra-ui/react";
import { style1, style2 } from "../AllStyles/Styles";
export default function Navbar({ position }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const { isOpen1, onToggle } = useDisclosure()    
    return (
        <VStack  h={"400px"} w="100%" backgroundImage="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" >
            <HStack  style={position ? style2 : style1} h={"60px"} zIndex="20" px="30px" w={"100%"}>
                <HStack w="100px" my={"auto"} alignItems={"center"}>
    
                 <Link _hover={{textDecoration:"none",color:"gray"}}  alignItems={"center"}><Text fontSize={"20px"} ml="-40px" textAlign={"center"} height={"100%"}  width={{md:"100px",lg:"150px","2xl":"200px"}} fontFamily={"cursive"}>MAKE A TRIP</Text></Link> 
                </HStack>
                <HStack my="auto" w={{md:"400px",lg:"450px",xl:"500px"}} style={!position?{display:"none"}:{display:"flex"}}  overflow="hidden"borderRadius={"7px"}  alignItems={"center"}> <Input  my="10px" backgroundColor="white" w="500px" color={"black"}  placeholder="Search for itineraries,destinations,hotels or activities" /><SearchIcon/></HStack>
               
                <HStack fontSize={{md:"14px",base:"12px",xl:"16px","2xl":"18px",lg:"15px"}} py={"15px"} gap={{md:"8px",lg:"11px",xl:"13px","2xl":"15px"}}>
                    <Menu >
                        <MenuButton onMouseOver={onOpen} as={Link} _hover={{textDecoration:"none",color:"gray"}}>
                            Inspirations
                        </MenuButton>
                        <MenuList  isOpen={isOpen} onClose={onClose} color="black">
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
                    <Link href="" _hover={{textDecoration:"none",color:"gray"}} >Forum</Link>
                    <Link href="" _hover={{textDecoration:"none",color:"gray"}} to="#">Package</Link>
                    <Menu >
                        <MenuButton href="" _hover={{textDecoration:"none",color:"gray"}} as={Link}>
                            Publish Trip
                        </MenuButton>

                        <MenuList color={"black"} transition={"ease-in-out"} transitionDelay="1sec" >

                            <MenuItem as={Link}>Create New</MenuItem>
                            <MenuItem as={Link}>Uploads Photo/Videos</MenuItem>
                            <MenuItem as={Link}>Import Blog</MenuItem>

                        </MenuList>
                    </Menu>
                    <Link href="" _hover={{textDecoration:"none",color:"gray"}}>Sign In</Link>
                </HStack>
            </HStack>
            <VStack pt="150px">
                <Heading fontSize={"32px"} color={"white"}>Indias Largest Community of Travellers</Heading>
                <HStack style={position?{display:"none"}:{display:"block"}} visibility={{ lg: "visible", "2xl": "visible" }} borderRadius={"6px"} lineHeight={"20px"}>
                    <Input  backgroundColor={"white"} fontWeight="normal" border="none" w={{ md: "330px", "lg": "530px" }} h="46px" placeholder="Search for itineraries,destinations,hotels or activities" />
                    <SearchIcon onClick={() => console.log("Clicked")} position={"absolute"} right="400px" zIndex={"18"} background={"white"} w={4} h={4} />
                </HStack>
            </VStack>
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