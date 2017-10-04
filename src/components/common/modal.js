import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Modal extends Component {

  render() {
    const { modal } = this.props

    return (
      <div className={`modal ${modal.open ? 'active' : ''}`} dangerouslySetInnerHTML={{__html: modal.html}}>
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
