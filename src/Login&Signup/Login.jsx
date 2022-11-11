import { Button, FormControl, FormLabel,Link, Input, Modal, ModalBody,Text, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, HStack, Container } from "@chakra-ui/react"
import { useRef } from "react"

export function LoginPage(){

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef =useRef(null)
    const finalRef = useRef(null)
  
    return (
      <Container>
        <Link onMouseOver={onOpen} >Open Modal</Link>
        <Modal 
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent height={"400px"} lineHeight="33px">
            <ModalHeader>Login To Your Account</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input ref={initialRef} placeholder='Enter Email' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Enter Password</FormLabel>
                <Input placeholder='Password' type={"password"}  />
              </FormControl>
            </ModalBody>
          
            <ModalFooter>
                <FormControl W="100%"   >
                <Text >  Don't Have An Account ?</Text>
                <Button>Sign Up</Button>
                </FormControl>
              <Button colorScheme='blue' mr={3}>
              Login 
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    )
  

}