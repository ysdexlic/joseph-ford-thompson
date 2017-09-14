import React, { Component } from 'react'
import { connect } from 'react-redux'
import Main from '../main'
import Header from './common/header'
import Modal from './common/modal'

export class App extends Component {

	render() {
		return (
			<div id="app">
				<div className={`content ${this.props.modal.open ? 'modal-open' : ''}`}>
					<div className="modal-background"></div>
					<Header />
					<Main />
				</div>
				<Modal />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		modal: state.modal
	}
}

export default connect(mapStateToProps)(App)
