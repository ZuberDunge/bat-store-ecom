import { createContext, useEffect, useState, useRef } from 'react';
import axios from 'axios';
export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [userInfo, setUserInfo] = useState({})
    let token = localStorage.getItem("userToken")
    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState(false)
    const [errorMssg, setErrorMssg] = useState("")
    const [rememberMe, setRememberMe] = useState(true);

    const loginUser = (userDataLogin) => {
        axios.post("/api/auth/login", userDataLogin).then(res => {
            setUserInfo(res.data.foundUser)
            localStorage.setItem("userInfoData", JSON.stringify(res.data.foundUser))
            localStorage.setItem("userToken", res.data.encodedToken)
            if (rememberMe) {
                localStorage.setItem("loginData", JSON.stringify(userDataLogin))
            }
            setLoggedIn(true)
        }).catch((error) => {
            setError(true)
            setErrorMssg(error.response.data.errors[0])
            setTimeout(() => {
                setError(false)
            }, 2000)
        })
    }

    const registerUser = (userData) => {
        axios.post("/api/auth/signup", userData).then(res => {
            localStorage.setItem("userToken", res.data.encodedToken)
            localStorage.setItem("userInfoData", JSON.stringify(res.data.createdUser))
            setUserInfo(res.data.createdUser)
        }).catch((error) => {
            // here you will have access to error.response
            setError(true)
            setErrorMssg(error.response.data.errors[0])
            setTimeout(() => {
                setError(false)
            }, 2000)
        })
    }



    return (
        <AuthContext.Provider value={{ loginUser, setRememberMe, error, errorMssg, setUserInfo, registerUser, loggedIn, setLoggedIn, userInfo }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
