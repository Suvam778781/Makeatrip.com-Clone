import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { HStack, Image, Link, MenuButton, Menu, MenuList, MenuItem, VStack, Heading, Input, Icon, useDisclosure, Grid, Skeleton, Collapse } from "@chakra-ui/react";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const { isOpen1, onToggle } = useDisclosure()
    return (
        <VStack  h={"400px"} backgroundImage="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg" >
            <HStack  position={"fixed"} color={"white"} alignItems="start" textDecoration={"none"} fontWeight={"semibold"} justifyContent={"space-between"} mt="10px" h={"400px"} px="30px" w={"100%"}>
                <HStack>
                    <Image  style={{ "-webkit-tap-highlight-color": "blue" }} w="90px" h={"65px"} src="https://i.ibb.co/MNTTqts/tour-and-travel-removebg-preview.jpg" alt="tour-and-travel-removebg-preview" border="0" />
                </HStack>
                <HStack gap={"15px"}>
                    <Menu >
                        <MenuButton isOpen={isOpen} as={Link}>
                            Inspirations
                        </MenuButton>
                        <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} color="black">
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
                    <Link to="#">Forum</Link>
                    <Link to="#">Package</Link>
                    <Menu >
                        <MenuButton as={Link}>
                            Publish Trip
                        </MenuButton>

                        <MenuList color={"black"} transition={"ease-in-out"} transitionDelay="1sec" >

                            <MenuItem as={Link}>Create New</MenuItem>
                            <MenuItem as={Link}>Uploads Photo/Videos</MenuItem>
                            <MenuItem as={Link}>Import Blog</MenuItem>

                        </MenuList>
                    </Menu>
                    <Link>Sign In</Link>
                </HStack>
            </HStack>
            <VStack pt="150px">
                <Heading fontSize={"32px"} color={"white"}>Indias Largest Community of Travellers</Heading>
                <HStack visibility={{ base: "hidden", xl: "visible" }} borderRadius={"6px"} lineHeight={"20px"}>
                    <Input backgroundColor={"white"} border="none" w={{ md: "330px", "lg": "530px" }} h="46px"></Input>
                    <SearchIcon position={"absolute"} right="400px" zIndex={"20"} background={"white"} w={4} h={4} />
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