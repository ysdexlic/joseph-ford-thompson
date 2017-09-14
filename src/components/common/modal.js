import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Modal extends Component {

  closeModal = (e) => {
    e.preventDefault();
    this.props.dispatch({type: 'CLOSE_MODAL'})
  }

  render() {
    const { modal } = this.props

    return (
      <div className={`modal ${modal.open ? 'active' : ''}`}>
        <h2>{modal.title}</h2>
        <p>{modal.body}</p>
        <div className="button" onClick={this.closeModal}>
          <span>X</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps)(Modal)
