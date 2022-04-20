import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ViewList from "./components/ViewList";
import CreatePlanner from "./components/CreatePlanner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ViewList />
            </Route>
            <Route path="/create">
              <CreatePlanner />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
