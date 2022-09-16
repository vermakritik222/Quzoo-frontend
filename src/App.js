import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AllQuestionDisplayPage from "./pages/AllQuestionDisplayPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import QuestionPage from "./pages/QuestionPage";
import requests from "./util/request";
import axios from "./http/axios";
import { setAuth } from "./features/authSlice";

// const isAuth = false;

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <GuestRoute path="/login">
            <LoginPage />
          </GuestRoute>

          <ProtectedRoute exact path="/">
            <></>
          </ProtectedRoute>

          <ProtectedRoute path="/allsets">
            <AllQuestionDisplayPage />
          </ProtectedRoute>

          <ProtectedRoute path="/question/:setcode">
            <QuestionPage />
          </ProtectedRoute>

          <ProtectedRoute path="/Dashboard">
            <Dashboard />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

const GuestRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.authSlice);
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isAuth ? (
          <Redirect
            to={{
              pathname: "/allsets",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

const ProtectedRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  if (!isAuth) {
    axios.get(requests.verifyOnLode).then((res) => {
      console.log(res.data);
      if (res.data.user) {
        dispatch(setAuth(res.data));
      }
    });
  }

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isAuth ? (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        ) : (
          children
        );
      }}
    ></Route>
  );
};

export default App;
