import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateDomain from "./components/domain/CreateDomain";
import Navbar from "./components/layouts/Navbar";
import './App.css';


// extract current doman/subdomain
const host = window.location.hostname;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          { //routes for localhost or the base url 
            host === "localhost" ?
              <Route exact path="/" component={CreateDomain} />
              : // routes for the subdomain 
              <h1> 404 page does not exist! </h1>}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
