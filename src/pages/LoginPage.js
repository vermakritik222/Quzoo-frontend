import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../http/axios";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button } from "@mui/material";
import Nav from "../components/Nav";
import { setAuth } from "../features/authSlice";
import requests from "../util/request";
import "../pages/sass/LoginPage.scss";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const onLode = async () => {
  //     const res = await axios.get(requests.verifyOnLode);
  //     console.log(res.data);
  //     if (res.data.user) {
  //       dispatch(setAuth(res.data));
  //     }
  //   };

  //   onLode();
  // }, [dispatch]);

  const submitLogInForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(requests.login, {
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
