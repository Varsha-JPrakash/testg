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
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
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
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Sleep is good, he said, and books are better
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <form>
        <div class="mb-3 align-items-center">
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            type="text"
            onChange={(e) => handleChange(e, "username")}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="text"
            onChange={(e) => handleChange(e, "password")}
          ></input>
        </div>
        
 
       {/* <Link to ="/dash"> */}
        <button className="login-btn" onClick={(e)=>handleLogin(e)}>login</button>
        <AuthContext.Provider value={{ loginStatus: loginValue }}>
        <MainPage></MainPage>
        </AuthContext.Provider>
        {/* <Dash></Dash> */}
      </form>
    </div>
  );
};

export default AuthProvider;

