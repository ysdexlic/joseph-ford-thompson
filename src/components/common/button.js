import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Button extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
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
      this.props.dispatch({type: 'OPEN_MODAL', payload: this.props.html})

      this.setState({bottom: null})
      this.setState({open: true})
    }, 10)
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({open: false})
    this.props.dispatch({type: 'CLOSE_MODAL'})
    document.body.style.overflow = null;
  }

  render() {
    return (
      <div className="button-container" id={this.props.id}>
        <div className={`button ${this.state.open ? 'close' : 'open' }`}
          style={{bottom: this.state.bottom}}
          onClick={!this.props.modal.open ? this.openModal : this.closeModal}>

          <span>+</span>
          <p style={this.props.style}>{this.props.name}</p>
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

export default connect(mapStateToProps)(Button)
