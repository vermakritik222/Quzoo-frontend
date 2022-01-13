import axios from "axios";
import React, { useEffect, useState } from "react";
import "../pages/sass/LoginPage.scss";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button } from "@mui/material";
import Nav from "../components/Nav";

axios.defaults.withCredentials = true;
function LoginPage() {
  const [token, setToken] = useState({});
  // useEffect(() => {

  //     }, [token])
  function submitLogInForm(e) {
    e.preventDefault();
    const credentials = {
      email: "",
      password: "",
    };
    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].name === "email") {
        credentials.email = e.target[i].value;
      }
      if (e.target[i].name === "pas") {
        credentials.password = e.target[i].value;
      }
    }
    axios
      .post("http://127.0.0.1:8000/api/v1/user/login", credentials)
      .then((res) => {
        setToken(res.data.token);
        e.target[0].value = res.data.token;
        console.log(res.data);
      });

    // console.log(credentials);
  }

  return (
    <div className="loginPage">
      <Nav />
      <div className="loginPage__cover">
        <div className="loginPage__container">
          <h1 className="loginPage__heading">login</h1>
          <form
            className="loginPage__form"
            onSubmit={(e) => submitLogInForm(e)}
          >
            <label htmlFor="" className="loginPage__form__labels">
              <input type="text" name="Token" placeholder="token" id="" />
            </label>

            <label htmlFor="email" className="loginPage__form__labels">
              <DraftsOutlinedIcon
                sx={{ fontSize: 29 }}
                style={{ color: "#1976d2", cursor: "pointer" }}
              />
              <input type="email" name="email" placeholder="Email" id="email" />
            </label>
            <label htmlFor="pas" className="loginPage__form__labels">
              <LockOutlinedIcon
                sx={{ fontSize: 29 }}
                style={{ color: "#1976d2", cursor: "pointer" }}
              />
              <input type="text" name="pas" placeholder="Password" id="pas" />
            </label>
            <Button
              type="submit"
              variant="contained"
              // color="success"
              style={{ textTransform: "capitalize", width: "91%" }}
            >
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
