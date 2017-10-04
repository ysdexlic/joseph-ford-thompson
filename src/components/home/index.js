import React, { Component } from 'react'
import Button from '../common/button'

export class Home extends Component {

  constructor() {
    super();
    this.state = {
      bottom: null
    }
  }

  openAboutModal = (e) => {
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

    setTimeout(() => {
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

      this.setState({bottom: null})
    }, 10)

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
            <span className="pink">My professional motivation</span> is to collaborate
            <span className="italic">without ego or preconception</span> on emotionally engaging products.
            I believe in shining light on colleagues’ talents
            at solving problems and incorporating their ideas into the design work.
          </p>
          <p>
            <span className="pink">I come from a family</span> of psychologists, tech workers and musicians and correspondingly,
            my influences are varied. I view every design problem as an opportunity to empathise
            deeper with the needs of the users, as well as colleagues and stakeholders.
          </p>
          <p>
            <span className="pink">My passion is creating</span>, especially collaboratively. Professionally, prior to my design
            training, I’ve spent 7 years as an opera singer, portrait photographer, workshop leader,
            and user tester. I’m now looking for the next big challenge. I’m easy to work with,
            responsive, and a restless proponent of lifelong learning.
          </p>
        </div>

        <Button name="read more"
          title="About"
          body={
            `some stuff about joe, oh jeeeez
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.`
          }
        />

        <div style={{marginBottom: '200px'}}></div>

      </div>
    )
  }
}

export default Home
