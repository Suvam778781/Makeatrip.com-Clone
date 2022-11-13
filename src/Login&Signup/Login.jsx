import { Button, FormControl, FormLabel, Link, Input, Modal, ModalBody, Text, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, HStack, Container } from "@chakra-ui/react"
import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContext"
const initialLogindata = { email: "", password: "" }
export function LoginPage({ isOpen, onClose }) {
    const [signupopen,setsignupopen]=useState(false)
    const { HandleLogin, HandleSignup, state } = useContext(AuthContext)
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [formdata, setformdata] = useState(initialLogindata)
    const handlesign=()=>{
        onClose()
        setsignupopen(true)
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
    }
if(state.isAuth&&state.usertype==="Admin"){
 onClose();

}
else if (state.isAuth&&state.usertype===""){
onClose();
}
// console.log(state)
    return (
        <Container>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}>
                <ModalOverlay />
                <ModalContent height={"400px"} lineHeight="33px">
                    <ModalHeader>Login To Your Account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input onChange={handleChange} name="email" value={formdata.email} ref={initialRef} placeholder='Enter Email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Enter Password</FormLabel>
                            <Input onChange={handleChange} value={formdata.password} placeholder='Password' name="password" type={"password"} />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <FormControl W="100%"   >
                            <Text >  Don't Have An Account ?</Text>
                            <Button onClick={handlesign} >Sign Up</Button>
                        </FormControl>
                        <Button onClick={() =>{ HandleLogin(formdata);onClose()}} colorScheme='blue' mr={3}>
                            Login
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <SignupPage signupopen={signupopen}/>        
        </Container>

    )
}
const initialdata = {
    name: "",
    email: "",
    password: "",
    type: ""
}
export function SignupPage({signupopen}) {
    const {HandleSignup,state}=useContext(AuthContext)
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    // i  have to know the user is loged in or not 
    const {isOpen,onOpen,onClose}=useDisclosure()
    const [formdata, setformdata] = useState(initialdata)
    const handleChange= (e) => {
        const { name, value } = e.target
        setformdata({ ...formdata, [name]: value })
    }
     
        // here i will make post request here then iwill store the data to my database 
        // then iwill call call on close firse 
        // then the login page will open then login  
        useEffect(()=>{
            if(!state.isAuth){
                onOpen()
            }
        },[signupopen])
        // onClose()

   
    return <>
        <Container>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent height={"500px"} lineHeight="33px">
                    <ModalHeader>Create New Account..</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Enter Name.</FormLabel>
                            <Input value={formdata.name} onChange={handleChange} name="name" ref={initialRef} placeholder='Enter Name' />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Enter Email.</FormLabel>
                            <Input name="email" onChange={handleChange} value={formdata.email} ref={initialRef} placeholder='Enter Email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Enter Password.</FormLabel>
                            <Input value={formdata.password} onChange={handleChange} name="password" placeholder='Password' type={"password"} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <FormControl W="100%"   >
                            <Text >Already Resisterd ?</Text>
                            <Button>Login</Button>
                        </FormControl>
                        <Button onClick={()=>HandleSignup(formdata)} colorScheme='blue' mr={3}>
                            Sign Up
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    </>



}