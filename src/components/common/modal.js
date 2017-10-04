import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Modal extends Component {

  render() {
    const { modal } = this.props

    return (
      <div className={`modal ${modal.open ? 'active' : ''}`}>
        <h2>{modal.title}</h2>
        <p>{modal.body}</p>
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
