import React from 'react';
import './App.css';
import SideNavbar from './components/side-navbar/side-navbar.component';
import Bugs  from './components/bugs/bugs.component';
import AddBug from './components/add-bug/add-bug.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <React.Fragment>
        <SideNavbar />
        <Switch>
          <Route path='/' exact component={Bugs} />
          <Route path='/add_bug' exact component={AddBug} />
          <Route path='/update_bug/:id' exact component={AddBug} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
