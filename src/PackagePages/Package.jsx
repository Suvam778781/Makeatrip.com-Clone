import { ChevronRightIcon } from "@chakra-ui/icons"
import { Badge, Box, Button, Divider, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
export function Package({ packagedata, button, heading, dis }) {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([])

    const Getdata = () => {
        setloading(true)
        axios(`http://localhost:3000/${packagedata}`).then(res => {

            setdata(res.data)
            setloading(false)
        })
    }
    useEffect(() => {

        Getdata()

    }, [])
    return (
        <div style={{marginTop:"30px"}}>
            <Text  fontSi5ze={"10px"} display={dis} py="10px" textAlign={"left"} w="90%" margin={"auto"}><ChevronRightIcon color={"#55AAFF"} boxSize="24px" /> Exclusive Tours & Holiday Packages</Text>
            <Text fontSize={"30px"} py="10px" fontWeight={"bold"} textAlign={"left"} w="90%" margin={"auto"}>{heading}</Text>
            <Grid w="90%" m="auto" templateColumns={{ base: "repeat(1, 1fr)", sm: 'repeat(2, 1fr)', "lg": 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)', "2xl": 'repeat(3, 1fr)' }} gap="9px">
                {!loading && data?.map((ele) =>
                    <VStack key={ele.id} lineHeight={"30px"} pb="10px" maxW='sm' borderRadius='lg' overflow='hidden'>
                        <Image src={ele.image} alt={ele.image} />

                        <Badge borderRadius='full' ba px='2' color={"#359391;"}>
                            Package
                        </Badge>

                        <Text >{ele.description}</Text>

                        <HStack w="90%" margin={"auto "} justifyContent={"space-between"}>

                            <Badge borderRadius='full' fontSize={"10px"} h="30px" backgroundColor='#359391;'>
                                {ele.location}
                            </Badge>
                            <Badge
                                color='black'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                backgroundColor="#359391"
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                                h="30px"
                                borderRadius={"6px"}
                            >
                                {ele.DN}
                            </Badge>
                        </HStack>
                        <HStack w="90%" margin={"auto "} justifyContent={"space-between"}>
                            <Box as='span' color='gray.600' fontSize='sm'>
                                <span style={{ fontWeight: "bold", color: "black" }}>₹ {ele.price}</span> / Person
                            </Box>
                            <Button border={"1px solid #359391;"} fontSize={"12px"} w="80px" h="30px">{button}</Button>
                        </HStack>
                        <Divider />
                        </VStack>
                )}
            </Grid>


        </div>
    )
}
export function PackageText(){ 
return (
    <VStack py={"100px"}  lineHeight={"26px"} w="90%" textAlign={"left"} margin="auto">

<Text textAlign={"left"} margin="auto" w="100%" fontSize={"30px"} fontWeight="semibold">Customizable Tour Packages</Text>
<Divider/>
<p style={{textAlign:"left" ,margin:"auto", w:"100%"}}>Need help in getting a perfect travel experience according to your need? Tripoto has curated several travel packages covering some of the most popular holiday destinations for you!</p>
<Grid templateColumns={{ base: "repeat(1, 1fr)", sm: 'repeat(2, 1fr)', "lg": 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)', "2xl": 'repeat(3, 1fr)' }} gap="20px" >
    <Image borderRadius={"6px"} w="360px" src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597313001_coup.jpg" />
    <Image  borderRadius={"6px"} w="360px" src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597742263_f.jpg"/>
    <Image  borderRadius={"6px"} w="360px" src="https://cdn1.tripoto.com/media/filter/tst/img/1789711/Image/1597312306_budget.jpg"/>
</Grid>
<Text  textAlign={"left"} margin="auto" w="100%" fontSize={"30px"} fontWeight="semibold">Domestic Getaways</Text>
<Divider/>
 <p>There's a striking difference between travelling on your own terms and being bound by an itinerary designed by somebody else. That's why, Tripoto allows you to customise your packages to the best possible extent. Choose from Tripoto's select range of sanitised properties available at unbelievable prices for a safe & memorable getaway!</p>
<Text textAlign={"left"} margin="auto" w="100%" fontSize={"30px"} fontWeight="semibold">Pick from hundreds of holiday packages</Text>
<Divider/>
<p>There is something for everyone who visits on Tripoto platform. Whether you wish to get a taste of India's rich heritage in Rajasthan, or pay a visit to the Himalayas to heal your senses; it's all included. Also, on offer are international holiday packages, specially curated for Indian travellers. Witness the breathtaking beaches of Thailand or stroll through the bustling cities in Australia. Newlyweds can chose from some of the most sought after honeymoon destinations like Maldives or Iceland, or go off the beaten path in destinations like China or Egypt. If you are looking for a quick break, plan a weekend getaway to some of the top hideouts near your city. Business travellers and group tours are in the mix as well - popular packages include trips to places like Dubai and Malaysia. If you are seeking some serious adventure, select from trekking packages through some of the most scenic mountainous ranges in the world and capture moments for a lifetime. Skydiving, scuba diving, adventure biking, and much more on Tripoto - it's a one of the most dynamic selection of trips and activities for Indian travellers.</p>
<Text textAlign={"left"} margin="auto" w="100%" fontSize={"30px"} fontWeight="semibold">Why book holidays with Tripoto?</Text>
<Divider/>
<p><span>Tripoto's</span> travel partners provide some of the best India tour packages and International tour packages. We are passionate about travel and strive to offer experiences that matter. Get in touch with our team with any query about holiday packages in India.</p>
<Text textAlign={"left"} margin="auto" w="100%" fontSize={"30px"} fontWeight="semibold">How to book holidays with Tripoto?</Text>
<Divider/>
<p>Booking holidays on Tripoto is as easy as it gets. Pick from hundreds of packages. We will then connect you with your choices of travel providers via email and/or phone. Tripoto partners with leading travel companies in India, like MakeMyTrip, Thomas Cook, SOTC, Yatra, to name a few, to help you plan the perfect vacation. Here is the step-by-step guide to booking domestic or international packages on Tripoto.</p>
<VStack textAlign={"first"} w="100%" margin={"auto"}>
    <Text textAlign={"first"} w="100%" margin={"auto"}>Step 1: Click on the 'Book Holidays' button on the top right corner of any page on Tripoto.</Text>
    <Text textAlign={"first"} w="100%" margin={"auto"}>Step 2: You will be taken to a page with different categories of packages.</Text>
    <Text textAlign={"first"} w="100%" margin={"auto"}>Step 3: Click on any package to submit your requirements. We will attend to your query and put you in touch with a representative from our travel partners within 48 hours.</Text>
</VStack>
</VStack>
)


} 