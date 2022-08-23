import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { useDispatch } from "react-redux";
import { signup } from "../Redux/Authentication/Action";

const Signup = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserData((values) => ({ ...values, [name]: value }));
 };
 

  const handleSubmit = (event) => {
    event.preventDefault();
   console.log("data", userData);
   dispatch(signup(userData));
   navigate("/login")
 };
 
  return (
    <div className="container">
      <div className="mainDiv">
        <form className="" onSubmit={handleSubmit}>
          <div className="">
            <p className="labels">Name</p>
            <TextField
              onChange={handleChange}
              value={userData.name}
              name="name"
              className="inputs"
              type="text"
              required
              placeholder="Your Name"
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </div>

          <div className="">
            <p className="lables">Email</p>
            <TextField
              onChange={handleChange}
              value={userData.email}
              name="email"
              className="inputs"
              required
              placeholder="your Email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </div>

          <div className="">
            <p className="labels">Password</p>
            <TextField
              onChange={handleChange}
              value={userData.password}
              name="password"
              className="inputs"
              type="password"
              required
              placeholder="Secret Password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </div>

          <div>
            <input
              className="submitButton"
              type="submit"
              
              value={"Sign Up"}
            />
          </div>
        </form>
        <div onClick={() => navigate("/login")} className="already">
          <p>If You Have Account ?</p>
          <p className="togalButton">Login</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
