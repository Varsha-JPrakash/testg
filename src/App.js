import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import pdata from "./BookStore/Bookdata";
import product from "./BookStore/product";
import Dash from "./BookStore/Dash";
import AuthProvider from "./BookStore/AuthProvider";
import MainPage from "./BookStore/mainpage";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <>
    <div>
      <Link to="/"></Link>
      <Link to="product"></Link>
      {/* <Link to="dash"><button>DASHBOARD</button></Link> */}
      {/* <Link to="Dash">dashboard</Link>
      <Link to="Dash">dashboard</Link> */}
    
      
      <Routes>
        <Route path="/" element={<AuthProvider></AuthProvider>}></Route>
        <Route path="/dash" element={<Dash></Dash>}></Route>
        <Route path="/product" element={<product data={pdata}></product>}> </Route>
      </Routes>

      {/* <AuthProvider></AuthProvider> */}

      {/* <Routes>
            
            <Route path="Dash" element={<Dash></Dash>}></Route>
            </Routes> */}
    </div>
    </>
  );
}
export default App;
