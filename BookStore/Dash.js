import React from "react";
import MainPage from "./mainpage";
import AuthProvider from "../BookStore/AuthProvider";
import product from "../BookStore/product";
import AuthContext from "../BookStore/AuthContext";
import{ BrowserRouter as Routers, Route, Switch } from 'react-router-dom';


function Dash() {
  return (
    <Routers>
      
    <div>
   
      <div class="card">
        <h5 class="card-header">Welcome Back!</h5>
        <div class="card-body">
          <h5 class="card-title">Your details</h5>
          <p class="card-text">
            Address: No: 21/1, ground floor, Jayanagar , Banglore
          </p>
          <p class="card-text">
            your wishlist:
            The Great Gatsby
            Atomic Habits
            Ikigai
          </p>
          <p class="card-text">
            Recently Purschased items:
            The Power of Your Subconscious Mind
            The Psychology of Money
          </p>
          <a href="/product" class="btn btn-primary">
            Shopping!
          </a>
          
        {/* <MainPage></MainPage> */}
       
        </div>
      </div>
      
    </div>
    </Routers>
  );
}

export default Dash;
