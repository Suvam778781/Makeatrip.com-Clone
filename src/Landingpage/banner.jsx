import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { HStack, Skeleton, Stack, VStack, Image, Grid, Heading, Text, IconButton } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function Banner() {
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(0)
    const [data, setdata] = useState([])
    
    const GetBannerData = (page) => {

        setloading(false)
        axios(`http://localhost:3000/posts?_page=${page}&_limit=4`).then(res => {
            console.log(res)
            setdata(res.data)
            setloading(true)
        })
    }
    useEffect(() => {

        GetBannerData(page)

    }, [page])
    if (!loading) {
        return <Skeleton1 />
    }
    return (

        <Stack  w="80%" margin={"auto"}>
            <Heading fontSize={{md:"20px","xl":"30px",base:"18px"}} marginLeft={"40px"} alignSelf={"start"}>In the Spotlight: Partnerships</Heading>
        <HStack alignItems={'center'} margin="auto" justifyContent={"center"} >

            <IconButton disabled={page === 1} onClick={() => setpage(page - 1)} ><ArrowLeftIcon w={8} /></IconButton>
            <Grid templateColumns={{ base: "repeat(2, 1fr)", sm: 'repeat(2, 1fr)', "lg": 'repeat(4, 1fr)' }} rowGap="30px" gap="10px" justifyContent={"center"} alignItems="center" margin={"auto"} pb="30px" w="100%" >
                {data.map((ele) =>
                    <VStack alignSelf={"initial"} height="350px" >
                        <Image borderRadius={"6px"} height={"60%"} src={ele.image} />
                        <Text fontSize={{md:"14px",base:"12p","xl":"17px",lg:"16px"}} color="red" fontWeight={"semibold"} alignSelf={"start"}>{ele.title}</Text>
                        <Text fontSize={{md:"14px",base:"12p","xl":"17px",lg:"16px"}} style={{ "alignSelf": "start" }}>{ele.description}</Text>
                    </VStack>
                )}
            </Grid>
            <IconButton disabled={page===3} onClick={() => setpage(page + 1)} w="10px"><ArrowRightIcon /></IconButton>
        </HStack>
        </Stack>
    )
}

export function Skeleton1() {

    return (

        <Stack w="70%" margin={"auto"}>
            
            <Grid gap="10px" templateColumns={{ base: "repeat(2, 1fr)", sm: 'repeat(2, 1fr)', "lg": 'repeat(4, 1fr)' }} height="auto" justifyContent={"center"} alignItems="center" margin={"auto"} w="100%" >
                <VStack spacing={1}>
                    <Skeleton isLoaded={false} h="300px" w="280px" />

                </VStack>
                <VStack >
                    <Skeleton isLoaded={false} h="300px" w="280px" />

                </VStack>
                <VStack >
                    <Skeleton isLoaded={false} h="300px" w="280px" />

                </VStack>
                <VStack >
                    <Skeleton isLoaded={false} h="300px" w="280px" />
                  
                </VStack>
            </Grid>
        </Stack>

    )

}

export const Banner2=()=>{


    const [count,setcount]=useState(0)
    const [crouserImg,setcrouserImg]=useState(["https://cdn1.tripoto.com/media/filter/nxxl/img/30751/Image/1665394736_homepage_banner_singapore_copy.jpg","https://cdn1.tripoto.com/media/transfer/img/2224454/Image/1665126895_67098315_6056_4dc2_976b_45c23888b05f.gif"])
    
useEffect(()=>{

    let ff=setInterval(() => {
        if(count===0){
     setcount(1)}
     else if(count===1){
        setcount(0)
     }
    },1000);

    if(count>=2){
        
        return clearInterval(ff)}
},[])
console.log(count)
return (
<Image w="100%" height="300px" src={crouserImg[count]}/>
)


}