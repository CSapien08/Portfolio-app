import React, {Component } from 'react';
import MainPage from './pages';
import AboutMe from './pages/aboutme';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Life from './pages/life'
import './App.css';
import NavigationMenu from './components/NavigationMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



class App extends Component {
  render() {
    return (
    <Router>
      <NavigationMenu />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/aboutme' component={AboutMe} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/life' component={Life} />
      </Switch>
    </Router>
    )
  }
}


export default App;
