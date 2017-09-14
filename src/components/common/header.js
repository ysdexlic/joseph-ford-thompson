import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

export class Header extends Component {

	constructor() {
		super();
		this.state = {
			scrolled: false,
			stickyAfter: 50,
			scrollMax: 50,
			scroll: 0,
		}
	}

	componentWillMount() {
    window.addEventListener("scroll", this.scroll);
	}

	scroll = () => {
		if(window.scrollY > this.state.stickyAfter && !this.props.sticky) {
			this.props.dispatch({type: 'SET_STICKY_HEADER', payload: true})
		} else if(window.scrollY < (this.state.stickyAfter) && this.props.sticky) {
			this.props.dispatch({type: 'SET_STICKY_HEADER', payload: false})
		}
	}

	render() {

		return (
			<header className={this.props.sticky ? 'sticky' : ''}>
				<NavLink exact to="/" activeClassName="active">
					<div className="logo"></div>
				</NavLink>
			</header>
		);
	}

}

const mapStateToProps = state => {
	return {
		sticky: state.header.sticky
	}
}

export default connect(mapStateToProps)(Header)
