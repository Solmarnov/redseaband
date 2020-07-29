import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import AddMusic from './pages/AdminAddMusic';
import EditMusic from './pages/AdminEditMusic';
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
        <Route exact path="/admin/add-music">
          <AddMusic />
        </Route>
        <Route exact path="/admin/edit-music/:id">
          <EditMusic />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
