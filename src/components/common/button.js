import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Button extends Component {

  constructor() {
    super();
    this.state = {
      bottom: null
    }
  }

  openModal = (e) => {
    e.preventDefault();
    let target = e.target;
    if(target.className.split(' ').indexOf('button') == -1) {
      target = e.target.parentElement;
    }
    const elementPosition = target.offsetTop;
    const elementHeight = target.clientHeight;
    const scrollPosition = window.pageYOffset;
    const windowSize     = window.innerHeight;
    const bodyHeight     = document.body.offsetHeight;
    const scrollFromBottom = Math.max(bodyHeight - (scrollPosition + windowSize), 0);

    const bottom = (bodyHeight - (elementPosition + elementHeight)) - scrollFromBottom;

    this.setState({bottom})
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      this.props.dispatch({type: 'OPEN_MODAL', payload: {
        title: this.props.title,
        body: this.props.body
      }})

      this.setState({bottom: null})
    }, 10)
  }

  closeModal = (e) => {
    e.preventDefault();
    this.props.dispatch({type: 'CLOSE_MODAL'})
    document.body.style.overflow = null;
  }

  render() {
    return (
      <div className={`button ${this.props.modal.open ? 'close' : 'open' }`}
        style={{bottom: this.state.bottom}}
        onClick={!this.props.modal.open ? this.openModal : this.closeModal}>

        <span>+</span>
        <p>{this.props.name}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps)(Button)
