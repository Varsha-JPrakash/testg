import React from 'react'
import AuthContext from "../BookStore/AuthContext"
import { useContext } from "react"
import { useState } from "react";
import './mainpage.css'
import { Link } from "react-router-dom";


const MainPage=()=>{
  const authStatus=useContext(AuthContext)
  return(
      <div>
          {
              authStatus.loginStatus?<h1>Your Main page</h1>:<h1>Please login to view your dashboard!</h1>
          }        
      </div>
  )
}
export default MainPage