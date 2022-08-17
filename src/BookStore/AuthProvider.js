import { useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../BookStore/AuthContext";
import MainPage from "../BookStore/mainpage";
import Dash from "../BookStore/Dash";

const AuthProvider = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginValue, setLogin] = useState(false);
  const handleChange = (e, key) => {
    if (key === "username") {
      setUsername(e.target.value);
    }
    if (key === "password") {
      setPassword(e.target.value);
    }
  };
  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid" >
          <a class="navbar-brand" href="product.js">
            BOOKSTORE!
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <h4
                  class="nav-link active"
                  aria-current="page"
                  color="white"
                >
                  Sleep is good, he said, and books are better
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <br></br>

      <form>
        <div class="form text-center">
            <div className="coloum" >
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            type="text"
            onChange={(e) => handleChange(e, "username")}
          ></input>
        </div>
        <div class="form">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="text"
            onChange={(e) => handleChange(e, "password")}
          ></input>
        </div>
        
 
       <Link to ="/dash">
    <button  className="login-btn" onClick={(e)=>handleLogin(e)}> login</button></Link>
    {/* <Link className={loginValue?'btn btn-primary':'btn btn-primary disabled'} to= {`/Dash`}> login</Link> */}
       
       
        <AuthContext.Provider value={{ loginStatus: loginValue }}>
        <MainPage></MainPage>
        </AuthContext.Provider>
        {/* <Dash></Dash> */}
        </div>
      </form>
    </div>
  );
};

export default AuthProvider;

