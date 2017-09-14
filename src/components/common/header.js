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

	componentDidMount() {
		let scroll = this.state.scrollMax;
		if(window.scrollY < this.state.scrollMax) scroll = window.scrollY
		this.setState({scroll: scroll})
	}

	scroll = () => {
		if(window.scrollY <= this.state.scrollMax) {
			this.setState({scrolled: true, scroll: window.scrollY});
		}

		if(window.scrollY > this.state.stickyAfter && !this.props.sticky) {
			this.props.dispatch({type: 'SET_STICKY_HEADER', payload: true})
		} else if(window.scrollY < (this.state.stickyAfter) && this.props.sticky) {
			this.props.dispatch({type: 'SET_STICKY_HEADER', payload: false})
		}
	}

	render() {

		const logoStyle = {
			width: `${90 - this.state.scroll}%`,
			left: `-${this.state.scroll * 0.6}%`
		}

		const headerStyle = {
			background: `rgba(255,255,255,${this.state.scroll/this.state.scrollMax})`
		}

		return (
			<header style={headerStyle} className={this.props.sticky ? 'a sticky' : 'a'}>
				<NavLink exact to="/" activeClassName="active">
					<div className="logo" style={logoStyle}></div>
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
