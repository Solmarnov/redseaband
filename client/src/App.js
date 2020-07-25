import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Music from './pages/Music';

// For more than one route paths
// <Route exact path={["/", "/home"]}></Route>

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/music">
          <Music />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
