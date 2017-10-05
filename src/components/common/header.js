import React, { Component } from 'react'
import { Splitter } from './splitter'

export class Header extends Component {
	render() {

		return (
			<header>
				<div className="desktop-only">
					<div style={{display: 'table'}}>
						<div style={{display: 'table-cell', verticalAlign: 'middle'}}>
							<h3>Joseph Ford Thompson</h3>
							<Splitter style={{marginBottom: 0}} />
						</div>
					</div>
				</div>
				<div className="social-icons">
					<a href="http://www.linkedin.com/in/josephfordthompson" target="_blank" className="l-icon"></a>
					<a href="http://www.twitter.com/jfordthompson" target="_blank" className="t-icon"></a>
				</div>
			</header>
		);
	}

}

export default Header;
