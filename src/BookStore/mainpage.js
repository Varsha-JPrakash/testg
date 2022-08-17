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
              authStatus.loginStatus?<h3>You have loged</h3>:<h3>Please login to view your dashboard!</h3>
          }        
      </div>
  )
}
export default MainPage