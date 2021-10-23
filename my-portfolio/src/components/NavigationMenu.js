import React, {Component } from 'react';
import { NavLink } from 'react-router-dom'
import myLogo1 from '../imgs/sapiano08-01-01.svg'


class NavigationMenu extends Component {
    render() {
      return (
        <header>
          <NavLink to="/">
            <img
              src={myLogo1}
              alt="Chauncy Sapien logo"
              className="my-logo"
              
            />
            <strong style={{fontFamily:'Verdana'}}>Chauncy Sapien</strong>
          </NavLink>
          <div className="nav-links">
            <ul>
              <NavLink to="/aboutme">About Me</NavLink>
            </ul>
            <ul>
              <NavLink to="/projects">My Projects</NavLink>
            </ul>
            <ul>
              <NavLink to="/resume">My Resume</NavLink>
            </ul>
          </div>
        </header>
      )
    }
  }
  
  export default NavigationMenu;
  