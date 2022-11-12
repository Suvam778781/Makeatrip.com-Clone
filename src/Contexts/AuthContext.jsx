import { Alert, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const AuthContext = createContext()
const initialState = { isAuth: false, token: null, username: "",usertype:"" }

export function AuthContextPeovider({ children }) {
    const [state, setstate] = useState(initialState)
    const [allUser, setalluser] = useState([])
    const [usertype,setusertype]=useState()
    // here i will check the user type and then iwill redirect the user to the perticular page
    const HandleLogin = (logindata) => {
console.log(logindata)
console.log(state)
let flag=""
        allUser.map((ele) => {
            if (ele.email == logindata.email && ele.password ==logindata.password) {
                if (ele.type === "Admin"){
                setstate({...state,isAuth:true,usename:ele.name,usertype:ele.type})
                flag='Admin'
                }
                else{
                    setstate({...state,isAuth:true,usename:ele.name,usertype:ele.type})
                    flag="user"
                }
            }
        })

    if(flag=="Admin"){

        <Navigate to ="/admin"/>
    }
else if(flag=="user"){

    <Navigate to ="/"/>
}
else {
    alert ("Please Signup First")
}

    }
    const HandleSignup = (signupdata) => {
        axios.post(`http://localhost:3000/users`, signupdata).then(res => {
            console.log(res)
            alert("Sign Up succesfully Please Login")
        })
    }
    useEffect(() => {
        axios(`http://localhost:3000/users`).then(res => {
            setalluser(res.data)
        })
    }, [HandleSignup])

    return <AuthContext.Provider value={{ HandleLogin, HandleSignup, state, setstate,allUser}}>
        {children}
    </AuthContext.Provider>
} 