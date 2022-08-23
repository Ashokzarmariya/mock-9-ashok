import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Login = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUserData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("data", userData);
  };
  return (
    <div className="container">
      <div className="mainDiv">
        <form className="" onSubmit={handleSubmit}>
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
              value={"Login"}
            />
          </div>
        </form>
        <div onClick={() => navigate("/signup")} className="already">
          <p>Not Have Account ?</p>
          <p className="togalButton">signup</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
