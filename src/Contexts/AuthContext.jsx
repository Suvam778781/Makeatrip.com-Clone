import { Alert, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const AuthContext = createContext()
import Swal from 'sweetalert2'
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
                setstate({...state,isAuth:true,username:ele.name,usertype:ele.type})
                flag='Admin'
                }
                else{
                    setstate({...state,isAuth:true,username:ele.name,usertype:ele.type})
                    flag="user"
                }
            }
        })

    if(flag=="Admin"){
        Swal.fire({
            title: 'Welcome Back Admin',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
        <Navigate to ="/"/>
    }
else if(flag=="user"){
    Swal.fire({
        title: 'Welcome Back User',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });

    <Navigate to ="/"/>
}

else {
    Swal.fire({
        title: 'User Not Found Please Sign Up First',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
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
    }, [])

    return <AuthContext.Provider value={{ HandleLogin, HandleSignup, state, setstate,allUser}}>
        {children}
    </AuthContext.Provider>
} 