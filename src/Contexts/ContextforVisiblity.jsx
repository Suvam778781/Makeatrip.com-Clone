import { useState } from "react"
import { createContext } from "react"

const sForTrans={
background:"blue",
color:"white",
height:"60px",
zindex:"20",
position:"fixed",
top:"0px",

}
export const Visible=createContext() 

export function VisibleProvider(){
const [position,setposition] =useState({position:1,})

return(


<>  </>
)

}


