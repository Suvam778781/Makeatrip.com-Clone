import { Button, Container, Divider, FormControl, FormLabel, Input, Select } from "@chakra-ui/react"
import axios from "axios"
import { useState } from "react"
import { FooterPart } from "../Landingpage/footer"
import Navbar from "../Landingpage/Navbar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2"
import { useEffect } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"
export function AdminPage() {
    const navi=useNavigate()
  
    const [UpdateDataName, setUpdateDataName] = useState("")
    useEffect(()=>{ AOS.init()},[UpdateDataName])
    const handleChange = (e) => {
        e.preventDefault()
        setUpdateDataName(e.target.value)
    }
    console.log(UpdateDataName)
    // here i will add some packages to my old data for admin access and show it to the dom
    return (
        <>
            <Container>
                <Navbar/>
                <Link  to="/">Package</Link>
                <FormControl>
                    <FormLabel>Chose Category of Data Want To Update</FormLabel>
                    <Select onChange={handleChange} value={UpdateDataName} placeholder="Select Update">
                        <option value="PackageMindful">PackageMindful</option>
                        <option value="banner4">banner4</option>
                        <option value="banner2">banner2</option>
                    </Select>
                </FormControl>
            </Container>
            <Form1 UpdateDataName={UpdateDataName} />
            <Divider my="40px"/>
            <FooterPart />
            
        </>
    )
}
const Form1 = ({ UpdateDataName }) => {

    useEffect(()=>{
        AOS.init()
    },[])
 
    const initialdata = { image: "", DN: "", description: "", price: "", location: "" }
    const initialdata1 = { image: "", description: "", by: "" }
    const initialdata2 = { image: "", description: "", by: "" }
    const [formdata, setformdata] = useState(initialdata)
    const [formdata1, setformdata1] = useState(initialdata1)
    const [formdata2, setformdata2] = useState(initialdata2)
    const handleChange1 = (e) => {
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
    }
    const handleChange2 = (e) => {
        const { name, value } = e.target
        setformdata1({ ...formdata1, [name]: value })
    }
    const handleChange3 = (e) => {
        const { name, value } = e.target
        setformdata2({ ...formdata2, [name]: value })
    }
    if (UpdateDataName === "PackageMindful") {
        return (<Container data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" mt="50px" py="30px" border={"1px solid grey"} borderRadius="6px" >
            <FormControl mt={4}>
                <FormLabel>Url:</FormLabel>
                <Input onChange={handleChange1} value={formdata.image} placeholder='Enter url' name="image" type={"url"} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>D-N:</FormLabel>
                <Input onChange={handleChange1} value={formdata.DN} placeholder='D-N' name="DN" type={"text"} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Description:</FormLabel>
                <Input onChange={handleChange1} value={formdata.description} placeholder='Enter Description' name="description" type={"text"} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Price:</FormLabel>
                <Input onChange={handleChange1} value={formdata.price} placeholder='Enter Price' name="price" type={"number"} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Location:</FormLabel>
                <Input onChange={handleChange1} value={formdata.location} placeholder='Enter Location' name="location" type={"text"} />
            </FormControl>
            <Container mt="30px" onClick={() => funcforAddData(formdata, UpdateDataName,setformdata,initialdata)} ><Button>ADD DATA</Button></Container>
        </Container>)
    }
    else if (UpdateDataName === "banner4") {
        return (<Container data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"mt="50px" py="30px" border={"1px solid grey"} borderRadius="6px" >
            <FormControl mt={4}>
                <FormLabel>Url:</FormLabel>
                <Input onChange={handleChange2} value={formdata1.image} placeholder='Enter url' name="image" type={"url"} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Description:</FormLabel>
                <Input onChange={handleChange2} value={formdata1.description} placeholder='Enter Description' name="description" type={"text"} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>BY:</FormLabel>
                <Input onChange={handleChange2} value={formdata1.by} placeholder='Enter BY' name="by" type={"text"} />
            </FormControl>
            <Container mt="23px" onClick={() => funcforAddData(formdata1, UpdateDataName,setformdata1,initialdata1)}><Button>ADD DATA</Button></Container>
        </Container>)
    }
    else if (UpdateDataName == "banner2") {
        return (<Container data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" mt="50px" py="30px" border={"1px solid grey"} borderRadius="6px" >
            <FormControl mt={4}>
                <FormLabel>Url:</FormLabel>
                <Input onChange={handleChange3} value={formdata2.image} placeholder='Enter url' name="image" type={"url"} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>Description:</FormLabel>
                <Input onChange={handleChange3} value={formdata2.description} placeholder='Enter Description' name="description" type={"text"} />
            </FormControl>
            <FormControl mt={4}>
                <FormLabel>BY:</FormLabel>
                <Input onChange={handleChange3} value={formdata2.by} placeholder='Enter BY' name="by" type={"text"} />
            </FormControl>
            <Container mt="23px" color="blue.300" onClick={() => funcforAddData(formdata2, UpdateDataName,setformdata2,initialdata2)}><Button>ADD DATA</Button></Container>


        </Container>)
    }



}
// "id": 3,
// "image": "https://cdn1.tripoto.com/media/filter/tst/img/2163002/Image/1638778652_image_cover_b.jpg",
// "DN": "3D-2N",
// "description": "Learn to Cook a Traditional Rajasthani Meal at a 200 Year-Old Luxury Haveli ",
// "location": "Rajastan",
// "price": 3799

// "banner4": [
//     {
//       "id": "1",
//       "image": "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666951500_1509083176_1509083171_novvac4.jpg",
//       "by": "Aakanksha Magan",
//       "description": "8 Best Countries To Visit In November"
//     },

// "Banner2": [
//     {
//       "id": "1",
//       "image": "https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1666949436_1666075538_shutterstock_1243206058.jpg",
//       "by": "Tanisha Mundra",
//       "description": "Cheapest Domestic Flights For November & December 2022"
//     },

const funcforAddData = (data, type,setdata,initial) => {
    axios.post(`http://localhost:3000/${type}`,data).then(res=>{
    console.log(res)
    })
 Swal.fire({
            title: 'DATA UPDATE SUCCESFULLY',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });

          setdata(initial)
    console.log(data)
}