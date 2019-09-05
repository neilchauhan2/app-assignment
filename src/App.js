import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateDomain from "./components/domain/CreateDomain";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/createDomain" component={CreateDomain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
