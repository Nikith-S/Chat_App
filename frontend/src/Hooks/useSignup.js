import { useContext, useState } from "react";

import React from 'react'
import toast from "react-hot-toast";
import {  useAuthContext } from "../context/AuthContext";

function useSignup() {
const [loading, setLoading]= useState(false);
const {setAuthUser} = useAuthContext();

const signup = async({fullname, username, password, confirmpassword, gender}) => {
const success = handleInputErrors({fullname, username, password, confirmpassword, gender})

if(!success) return;
setLoading(true)
try{
const res = await fetch("/api/auth/signup",{
method:"POST",
headers:{"content-type": "application/json"},
body:JSON.stringify({fullname, username, password, confirmpassword, gender})
})

const data= await res.json();
if(data.error){
    throw new Error(data.error)
}

localStorage.setItem("chat-user", JSON.stringify(data))
setAuthUser(data);

}
catch(error){
toast.error(error.message)
}finally{
    setLoading(false)
}

}

return {loading, signup}

}

export default useSignup;

function handleInputErrors({fullname, username, password, confirmpassword, gender}){
    if(!fullname || !username || !password, !confirmpassword, !gender ){

        toast.error("please fill in all details")
        return false
    }

    if(password != confirmpassword){
        toast.error("please check your password")
        return false;
    }

    if(password.length < 6){
        toast.error("password condition not satisfied")
        return false;
    }

    return true
}
