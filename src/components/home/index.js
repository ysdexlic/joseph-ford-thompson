import React, { Component } from 'react'
import Button from '../common/button'
import { Splitter } from '../common/splitter'
import { About } from './about'

export class Home extends Component {

  render() {
    return (
      <div className="home">

        <div className="landing">
          <div className="landing-image"></div>
          <div className="landing-gradient"></div>
          <div className="desktop-only landing-background"></div>
          <div className="landing-text">
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

        <Button name="Read More"
          html={`
            <h1>About</h1>

            <div>
              <p>
                I am a User Experience obsessive. Having recently completed a course at the Interaction Design Foundation where I placed in the top 10 of all UK Course takers for <span style="font-weight: bold">Psychology of Interaction Design</span>, I am looking to start my career as a UX Designer. I am a creative worker, confident communicator and a lifetime geek.
              </p>
              <p>
                I believe in the power of excellent, emotionally engaging design for real humans. Humans that get stressed. Humans that are busy. Humans that walk into a room and forget what they went in there to do. Good design massages these pain points, and gives a helpful point in the right direction - and that engenders gratefulness, trust, and (if it’s done really well) delight. That is my motivation - I believe in making sure that the technology we create should be as kind and humane as our intentions.
              </p>
              <p>
                This isn’t just flowery talk. It’s good business. Studies have shown that it can be anywhere from 5-25 times more expensive to find a new customer than to retain an existing one. If our design can engender and build trust with our users, they’ll forgive smaller mistakes, and be far more likely to recommend our product.
              </p>
            </div>

            <div class="quote">
              <p>I believe in making sure that the technology we create should be as kind and humane as our intentions</p>
            </div>

            <div>
              <p>
                I have a unique perspective on UX design from my studies of cognitive psychology and my creative background as a professional operatic performer and photographer. I especially pride myself on being able to simplify and crystallise complex design issues into understandable and friendly language, with defined business goals for my stakeholders. I can then confidently communicate these design maxims and business goals to all levels of a company.
              </p>
              <p>
                When I was scouted to be a UX designer on a consulting session for Impossible Labs, I decided that I had to pursue my lifelong passion of technology and enabling and facilitating users to experience that technology in a delightful and usable way. I took a course at IDF, and now I am beyond excited to design professionally, creating an emotional bond between the user and the product.
              </p>
              <p>
                I’m proficient in Sketch, Axure, wireframing, prototyping, user testing, flows, stories, personas, scenarios, customer journey maps and many other User Experience design processes, but I am an insatiable learner and always keen to learn and develop new skills.
              </p>


            </div>


          `}
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
          html={`
            <h1>hello</h1>
          `}
          style={{fontSize: '11px'}}
        />

      <Splitter />

      <div className="contact about">
        <div className="li">View profile on linkedin</div>
        <div className="cv">Download my CV</div>
        <div className="contact">Contact me</div>
      </div>

      </div>
    )
  }
}

export default Home
