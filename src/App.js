import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AllQuestionDisplayPage from "./pages/AllQuestionDisplayPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import QuestionPage from "./pages/QuestionPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/question/:setcode">
            <QuestionPage />
          </Route>
          <Route path="/allsets">
            <AllQuestionDisplayPage />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
