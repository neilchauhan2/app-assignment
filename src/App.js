import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateDomain from "./components/domain/CreateDomain";
import './App.css';

// extract current doman/subdomain
const host = window.location.hostname;

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          { //routes for localhost or the base url 
            host === "localhost" ?
              <Route exact path="/createDomain" component={CreateDomain} />
              : // routes for the subdomain 
              <h1> 404 page does not exist! </h1>}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
