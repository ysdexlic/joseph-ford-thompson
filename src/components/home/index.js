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
          <div className="landing-background"></div>
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
              <img src="/style/images/mockup-iphone-x@3x.png" style={{maxHeight: '250px'}}/>
            </div>
          </div>
        </div>

        <Button name="See the design process" id="design-process-button"
          html={`
            <h1>Work</h1>

            <div>
              <h2 class="pink">MYNEXTGAME</h2>
              <div class="portfolio-item" style="margin-bottom: 20px;">
                <div class="portfolio-item_image">
                  <img src="/style/images/mockup-iphone-x@3x.png" style="max-height: 250px;"/>
                </div>
              </div>
            </div>

            <div>
              <h2 class="pink">OBJECTIVES</h2>
              <ul>
                <li>Ideate and create a social network from scratch</li>
                <li>Model after GoodReads / Letterboxd</li>
                <li>Find ways to give value to the user while making the user valuable to stakeholders</li>
              </ul>

              <div class="portfolio-item_image" style="margin-bottom: 20px;">
                <img src="/style/images/scanned-documents@3x.jpg" style="max-width: 100%; max-height: 500px"/>
              </div>
            </div>

            <div>
              <h2 class="pink">CHALLENGES</h2>
              <ul>
                <li>Lots of features - potential for overwhelm</li>
                <li>How to onboard users and get them to start a library and wishlist</li>
                <li>Big database set and issues of how to reconcile duplicates</li>
              </ul>

              <div class="portfolio-item_image" style="margin: 20px 0;">
                <img src="/style/images/signupwireframe@3x.png" style="max-height: 400px;"/>
              </div>
              <div class="portfolio-item_image" style="margin: 20px 0;">
                <img src="/style/images/reviewwireframe@3x.png" style="max-height: 400px;"/>
              </div>
            </div>

            <div>
              <h2 class="pink">DESIGN DECISIONS</h2>
              <p>
                <span style="font-weight: 600;">Simple experience</span>
                <br />
                Funnel mobile users to home tab, where it is easy to add games to want list and diary, as well as see content from prodigious reviewers
              </p>
              <p>
                <span style="font-weight: 600;">Guided usage based on standard T-shaped eye tracking pattern</span>
                <br />
                just-in-time updates that are relevant to the user’s now playing and want list queue
              </p>
              <p>
                <span style="font-weight: 600;">A minimalistic but full featured hub</span>
                <br />
                Deals, news, reviews, curated lists, all organised neatly on the home screen
              </p>

              <div class="portfolio-item_image" style="margin: 20px 0;">
                <img src="/style/images/i-pad-pro-mockup@3x.png" style="max-width: 100%; max-height: 500px"/>
              </div>
              <div class="portfolio-item_image" style="margin: 20px 0;">
                <img src="/style/images/iphone-7-login@3x.png" style="max-height: 400px;"/>
              </div>
              <div class="portfolio-item_image" style="margin: 20px 0;">
                <img src="/style/images/mockup-iphone-x@3x.png" style="max-height: 400px;"/>
              </div>

            </div>

          `}
        />

      <Splitter />

      <div className="contact about">
        <a href="http://www.linkedin.com/in/josephfordthompson" target="_blank" className="li">View profile on linkedin</a>
        <a href="/docs/cv.pdf" target="_blank" className="cv">Download CV</a>
        <a href="mailto:jfordthompson@gmail.com" className="email">Contact me</a>
      </div>

      </div>
    )
  }
}

export default Home
