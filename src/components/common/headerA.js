import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends Component {

	render() {

		return (
			<header className="static">
				<NavLink exact to="/" activeClassName="active">
					<div className="logo"></div>
				</NavLink>
			</header>
		);
	}

}

export default Header
