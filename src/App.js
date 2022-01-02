import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
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
          <Route path="/question">
            <QuestionPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
