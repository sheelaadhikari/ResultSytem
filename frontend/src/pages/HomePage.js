import React, { useState } from "react";
import "../App.css";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
// import { useAuth } from './../context/auth';
import { BASEURL } from "./../constant";
const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [auth, setAuth] = useAuth;
  const navigate = useNavigate();
  const location = useLocation();

  //  form function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASEURL}/api/v1/auth/login`, {
        email,
        password,
      });
      console.log(res.data);
      if (res.data.success) {
        console.log(res.data.message);
        // setAuth({
        //     ...auth,
        //     user: res.data.user,
        //     token: res.data.token,
        // });
        localStorage.setItem("auth", JSON.stringify(res.data));
        axios.defaults.headers.common["Authorization"] = res.data.token;
        navigate(location.state || "/Upload");
      } else {
        console.log(" user not found", res.data.message);
      }
    } catch (error) {
      console.log(error);
      console.log("something went wrong");
    }
  };

  return (
    <div className="form">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Login Admin</h4>

          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder=" Enter Your Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="click">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
