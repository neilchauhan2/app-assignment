import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateDomain from "./components/domain/CreateDomain";
import Navbar from "./components/layouts/Navbar";
import './App.css';
import SubdomainApp from './components/subdomainApp/SubdomainApp';


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
              <Route exact path="/" component={SubdomainApp} />
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
