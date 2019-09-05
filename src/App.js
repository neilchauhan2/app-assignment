import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Domain from "./components/domain/Domain";
import './App.css';

function App() {
  return (
    <Router>  
      <div className="App">
        <Switch>
        <Route exact path="/" component={Domain} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
