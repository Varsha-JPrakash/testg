
import React from "react";
import { Link } from "react-router-dom";
import MainPage from "./mainpage";
import AuthProvider from "../BookStore/AuthProvider";
import product from "../BookStore/product";
import AuthContext from "../BookStore/AuthContext";
import{ BrowserRouter as Routers, Route, Switch } from 'react-router-dom';
import "./mainpage.css"


function Dash() {
  return (
   
      
    <div >
   
      <div class="card">
        <div className="column">
        <div className="row">
        <h5 class="card-header">Welcome Back Rahul!</h5>
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
          <Link to='/product'>
            <button type="button" class="btn btn-primary">Shopping!</button>
          </Link>
       
        </div>
      </div>
      </div>
      </div>
    </div>
   
  );
}

export default Dash;


