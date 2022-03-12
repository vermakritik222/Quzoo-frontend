import axios from "axios";
import React, { useState } from "react";
import "../pages/sass/LoginPage.scss";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button } from "@mui/material";
import { setAuth } from "../features/authSlice";
import { useDispatch } from "react-redux";
import Nav from "../components/Nav";

axios.defaults.withCredentials = true;
function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const submitLogInForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:8000/api/v1/user/login", {
        email,
        password,
      });
      console.log(res.data);
      dispatch(setAuth(res.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="loginPage">
      <Nav />
      <div className="loginPage__cover">
        <div className="loginPage__container">
          <h1 className="loginPage__heading">login</h1>
          <div className="loginPage__form">
            <label htmlFor="email" className="loginPage__form__labels">
              <DraftsOutlinedIcon
                sx={{ fontSize: 29 }}
                style={{ color: "#1976d2", cursor: "pointer" }}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>
            <label htmlFor="pas" className="loginPage__form__labels">
              <LockOutlinedIcon
                sx={{ fontSize: 29 }}
                style={{ color: "#1976d2", cursor: "pointer" }}
              />
              <input
                type="text"
                name="pas"
                placeholder="Password"
                id="pas"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            <Button
              variant="contained"
              onClick={submitLogInForm}
              style={{ textTransform: "capitalize", width: "91%" }}
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
