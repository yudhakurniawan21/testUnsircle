import React from "react";
import { SubmissionError } from "redux-form";
import DashBoard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (!["yudha", "test", "admin", "member"].includes(values.username)) {
      throw new SubmissionError({
        username: "User does not exist",
        _error: "Login failed!"
      });
    } else if (values.password !== "123456") {
      throw new SubmissionError({
        password: "Wrong password",
        _error: "Login failed!"
      });
    } else {
      return (
        <Router>
          <Switch>
            <Link to="/dashboard">dashboard</Link>
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </Router>
      );
    }
  });
}

export default submit;
