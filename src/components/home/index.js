import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {

  openAboutModal = (e) => {
    e.preventDefault();
    this.props.dispatch({type: 'OPEN_MODAL', payload: {
      title: 'About',
      body: `some stuff about joe, oh jeeeez
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.`
    }})
  }


  render() {
    return (
      <div className="home">

        <div className="landing">
          <div>
            <h2>Joseph Ford Thompson</h2>
            <h1>UX Designer</h1>
          </div>
        </div>

        <div className="about">
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
          <div className="button">
            <span onClick={this.openAboutModal}>+</span>
          </div>
        </div>

      </div>
    )
  }
}

export default connect()(Home)
