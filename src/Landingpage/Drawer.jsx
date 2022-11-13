import { AddIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button, Input, IconButton, HStack, Link,Image
} from '@chakra-ui/react'
import { useContext, useRef } from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'

export function Draweer() {
const navi=useNavigate()
  const {state}=useContext(AuthContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <HStack justifyContent={"flex-end"}>
      <IconButton ref={btnRef} background="black" onClick={onOpen}>
        <HamburgerIcon />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
           <Link><Image w="140px" src="https://i.ibb.co/3mNc4H5/makeatrip-logopng.png"/></Link>
          <DrawerBody>
          <Link>Log In</Link>
          </DrawerBody>

          <DrawerFooter>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  )
}
export function Footer2() {
  return <HStack backgroundColor={"white"}
  
  position="fixed"
  px={"20px"}
  left= "0"
  bottom="0"
  right={"0"}
  width="100%"  
  gap="120px"display={{base:"flex",xl:"none","2xl":"none",lg:"none"}} w="100%"  >
   <Link to="/"><Image w="200px" src="https://illustoon.com/photo/7784.png"/>Home</Link>
    <Link> <Image w="200px" src="https://media.istockphoto.com/id/876112880/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=i8nFCIM2WK2l5VwT_Y516dCmALU-aYyUvYSy0iXL93o="/>Explore</Link>
    <Link > <  AddIcon w="200px"/></Link>
    <Link    ><Image w="200px" src="https://cdn-icons-png.flaticon.com/512/1067/1067555.png"/> Package</Link>
    <Link><Image w="200px" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22px' height='21px' viewBox='0 0 22 21' version='1.1'%3e %3cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cg transform='translate(-44.000000%2c -85.000000)' fill='%23585858' fill-rule='nonzero'%3e %3cg transform='translate(45.000000%2c 86.000000)'%3e %3cpath d='M3.64775226%2c14.1075 C4.1396268%2c14.1075 4.50062427%2c14.5207755 4.47519315%2c14.9861757 L4.42309039%2c15.736401 C4.39765937%2c16.1763593 4.60358918%2c16.5896348 4.96582717%2c16.8223349 L5.48313283%2c17.1568025 C5.84413031%2c17.3895028 6.05130064%2c17.8040192 6.05130064%2c18.2172946 L6.05130064%2c18.2694195 C6.05130064%2c18.8123865 5.61152877%2c19.2523449 5.06879208%2c19.2523449 L3.36304805%2c19.2523449 C2.94994781%2c19.2523449 2.56227879%2c18.9675199 2.43264225%2c18.5542445 L1.39927144%2c15.1158672 C1.27087542%2c14.5983422 1.63187289%2c14.1075 2.12250692%2c14.1075 L3.64775226%2c14.1075 Z M19.6923496%2c6.86381264 C19.7698834%2c8.10487998 19.7698834%2c10.6136978 19.6923496%2c11.8802071 C19.3046805%2c18.3182442 16.5909968%2c18.8357693 16.4613603%2c18.8090863 C16.3583954%2c18.7836445 15.1953881%2c18.9642198 12.9469073%2c15.4737177 C10.8534942%2c12.2159158 7.02890594%2c12.396491 5.55576336%2c12.3710492 C4.47028989%2c12.3456073 2.32477408%2c12.3456073 1.03337071%2c12.3710492 C0.465202901%2c12.3710492 -2.7533531e-13%2c11.9056489 -2.7533531e-13%2c11.33724 L-2.7533531e-13%2c7.48434626 C-2.7533531e-13%2c6.91593741 0.465202901%2c6.45053719 1.03337071%2c6.45053719 C2.3260146%2c6.45053719 4.49696153%2c6.47597903 5.582435%2c6.45053719 C7.05557758%2c6.42509525 10.9068374%2c6.60567059 12.9735789%2c3.34786869 C15.1966286%2c-0.142633408 16.3329643%2c0.0379419332 16.4371698%2c0.0124999974 C16.5909968%2c-0.0905085472 19.3046805%2c0.297324968 19.6923496%2c6.86381264 Z M16.6713104%2c1.69352581 C16.5987601%2c1.69352581 16.5270621%2c1.70649828 16.4563925%2c1.73181812 C16.3860215%2c1.70648302 16.3147885%2c1.69352581 16.2428604%2c1.69352581 C15.2603518%2c1.69352581 14.4341515%2c4.07265204 14.20155%2c7.27832908 C14.8993544%2c7.74372939 15.3645573%2c8.51939651 15.3645573%2c9.4247552 C15.3645573%2c10.3034309 14.9247855%2c11.105781 14.226981%2c11.5444983 C14.4850136%2c14.621725 15.3124545%2c16.8711596 16.2682915%2c16.8711596 C16.3407573%2c16.8711596 16.4122636%2c16.8584702 16.4826582%2c16.8336894 C16.5528786%2c16.85829 16.6244428%2c16.8711596 16.6967415%2c16.8711596 C17.8851799%2c16.8711596 18.8155857%2c13.4582242 18.8155857%2c9.2696218 C18.8155857%2c5.08101927 17.8343176%2c1.69352581 16.6713104%2c1.69352581 Z' id='Combined-Shape' stroke='%23585858' stroke-width='0.9405'/%3e %3cpath d='M1.15474144%2c15.1158672 C1.02634542%2c14.5983422 1.38734289%2c14.1075 1.87797692%2c14.1075 L3.40322226%2c14.1075 C3.8950968%2c14.1075 4.25609427%2c14.5207755 4.23066315%2c14.9861757 L4.17856039%2c15.736401 C4.15312937%2c16.1763593 4.35905918%2c16.5896348 4.72129717%2c16.8223349 L5.23860283%2c17.1568025 C5.59960031%2c17.3895028 5.80677064%2c17.8040192 5.80677064%2c18.2172946 L5.80677064%2c18.2694195 C5.80677064%2c18.8123865 5.36699877%2c19.2523449 4.82426208%2c19.2523449 L3.11851805%2c19.2523449 C2.70541781%2c19.2523449 2.31774879%2c18.9675199 2.18811225%2c18.5542445 L1.15474144%2c15.1158672 Z' id='Shape'/%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/svg%3e" />Forum</Link>
  </HStack>
}