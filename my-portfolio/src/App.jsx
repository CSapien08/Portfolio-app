import React from 'react';
import { HomePage } from './pages/homePage';
import AboutMe from './pages/aboutMe';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Life from './pages/life'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/life' component={Life} />
      </Switch>
    </Router>
  )
}

export default App;
