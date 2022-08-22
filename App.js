import React from "react";
import { Routes,Route, BrowserRouter} from "react-router-dom";
import Navbar from '../src/Movie/components/navbar';
import Main from "../src/Movie/components/main";
import Home from '../src/Movie/components/home';

import Admin from '../src/Movie/components/Admin';
import List from '../src/Movie/components/customer';
import 'App.css'
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="main" element={<Main></Main>}></Route>
        <Route path="customer" element={<List></List>}></Route>
        {/* <Route path='book' element={<Book></Book>}></Route> */}
    </Routes>
    </BrowserRouter>
    </>
    )
    
}

export default App






















// import React, { useContext } from "react";
// import { ThemeContext } from "../src/ThemeChanger/ThemeContext";
// import SwitchButton from "../src/ThemeChanger/Button";
// import "../src/ThemeChanger/Theme.css";

// function App() {
//   const theme = useContext(ThemeContext);
//   const darkMode = theme.state.darkMode;
//   return (
//     <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
//       <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
//         {darkMode ? "Dark Mode" : "Light Mode"}
//       </h1>
//       <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
//         The new React Context API, introduced with React v.16.3, allows us to
//         pass data through our component trees, giving our components the ability
//         to communicate and share data at different levels. In this tutorial, we
//         will explore how we can use React Context to avoid prop drilling. First,
//         we will cover what prop drilling is and why we should avoid it.
//       </p>
//       <SwitchButton />
//     </div>
//   );
// }

// export default App;

// import pdata from "./BookStore/Bookdata";
// import product from "./BookStore/product";
// import Dash from "./BookStore/Dash";
// import AuthProvider from "./BookStore/AuthProvider";
// import MainPage from "./BookStore/mainpage";
// import { BrowserRouter, Link } from "react-router-dom";

// function App() {
//   return (
//     <>
//     <div>
//       <Link to="/"></Link>
//       <Link to="product"></Link>
//       {/* <Link to="dash"><button>DASHBOARD</button></Link> */}
//       {/* <Link to="Dash">dashboard</Link>
//       <Link to="Dash">dashboard</Link> */}

//       <Routes>
//         <Route path="/" element={<AuthProvider></AuthProvider>}></Route>
//         <Route path="/dash" element={<Dash></Dash>}></Route>
//         <Route path="/product" element={<product data={pdata}></product>}> </Route>
//       </Routes>

//       {/* <AuthProvider></AuthProvider> */}

//       {/* <Routes>

//             <Route path="Dash" element={<Dash></Dash>}></Route>
//             </Routes> */}
//     </div>
//     </>
//   );
// }
// export default App;
