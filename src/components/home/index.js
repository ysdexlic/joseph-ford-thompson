import React, { Component } from 'react'
import Button from '../common/button'
import { Splitter } from '../common/splitter'

export class Home extends Component {

  render() {
    return (
      <div className="home">

        <div className="landing">
          <div className="gradient"></div>
          <div>
            <h2>Joseph Ford Thompson</h2>
            <h1>UX Designer</h1>
          </div>
        </div>

        <div className="about">
          <Splitter />
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

        <div className="about">
          <Splitter />
          <h1>Work</h1>
          <p>
            <span className="pink">mynextgame</span> - a GoodReads style social network for gamers to catalogue and review their video game library, as well as find the next great game to play.
          </p>
          <div className="portfolio-item">
            <div className="portfolio-item_image">
              <img src="/style/images/mockup-iphone-x@3x.png"/>
            </div>
          </div>
        </div>

        <Button name="See the design process"
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
          style={{fontSize: '11px'}}
        />

      <Splitter />

      <div className="contact">
        
      </div>

      </div>
    )
  }
}

export default Home
