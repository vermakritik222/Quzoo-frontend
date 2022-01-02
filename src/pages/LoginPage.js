import axios from "axios";
import React, { useEffect, useState } from "react";
import "../pages/sass/LoginPage.scss";

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

    console.log(credentials);
  }

  return (
    <div className="loginPage">
      <div className="loginPage__container">
        <form className="loginPage__form" onSubmit={(e) => submitLogInForm(e)}>
          <input type="text" name="token" placeholder="token" id="" />
          <input type="email" name="email" placeholder="Email" id="" />
          <input type="text" name="pas" placeholder="Password" id="" />
          <button type="submit">Log in</button>
        </form>
        {/* <p>{token}</p> */}
      </div>
    </div>
  );
}

export default LoginPage;
