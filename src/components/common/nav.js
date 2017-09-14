import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">Resume</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
