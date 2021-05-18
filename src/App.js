import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Home from './component/Home/home.js'
import Comments from "./component/Comments/comments.js";

// Styles
import logo from './logo.svg';
import './App.scss';


function App() {
  return (
    <div className="App">
        <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/comments" >
            <Comments/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
