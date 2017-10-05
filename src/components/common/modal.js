import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Modal extends Component {

  onScroll = (e) => {
    const element = document.getElementById('modal');
    const height = (element.scrollHeight - element.scrollTop) - window.innerHeight;

    if (height <= 120 && !this.props.modal.scrolled) {
      this.props.dispatch({type: 'SHOW_BUTTON_TEXT'})
    }
    if (height > 120 && this.props.modal.scrolled) {
      this.props.dispatch({type: 'HIDE_BUTTON_TEXT'})
    }
  }

  render() {
    const { modal } = this.props

    return (
      <div onScroll={this.onScroll} id="modal" className={`modal ${modal.open ? 'active' : ''}`} dangerouslySetInnerHTML={{__html: modal.html}}>
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
