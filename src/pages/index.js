import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ReactFullpage from "@fullpage/react-fullpage"
import Moon from "../components/moon"
import MoonBackground from "../components/moonBackground"
import StarBackground from "../components/starBackground"
import Anime, { anime } from "react-anime"

const IndexPage = props => (
  <div>
    <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      //sectionsColor={["yellow", "orange", "#C0C0C0", "#ADD8E6"]}
      onLeave={(origin, destination, direction) => {
        // Wrap every letter in a span
        var textWrapper = document.querySelector(".ml9 .letters")
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        )
        console.log(textWrapper)
        anime
          .timeline({
            loop: false,
          })
          .add({
            targets: ".ml9 .letter",
            scale: [0, 1],
            duration: 1500,
            elasticity: 600,
            delay: (el, i) => 45 * (i + 1),
          })
          
        console.log("onLeave event", { origin, destination, direction })
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi) // eslint-disable-line no-console
        return (
          <ReactFullpage.Wrapper>
            <div className="section" id="scene">
              <div className="fullpage__slide">
                <div className="title title--top">
                  <h1 className="title__text js-letter ml9">
                    <span className="text-wrapper">
                      <span className="letters">Patryk Holodynski</span>
                    </span>
                  </h1>
                  <div className="border js-letter">
                    <span></span>
                    <span className="js-letter"></span>
                  </div>
                  <p className="title__lead js-letter">
                    web designer /<br />
                    markup engineer.
                  </p>
                </div>
                <Moon />
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
            </div>
            <div className="section">
              <div className="fullpage__slide">
                <div className="title">
                  <h2 className="title__text js-letter">
                    Hair Space
                    <br />
                    REILE
                  </h2>
                  <div className="border js-letter">
                    <span></span>
                    <span className="js-letter"></span>
                  </div>
                  <p className="title__lead js-letter">website</p>
                  <div className="btn-wrap js-letter">
                    <a className="btn" href="./reile.html">
                      Show me more
                    </a>
                  </div>
                </div>
                <a className="image image--works" href="/reile.html">
                  <div className="image__over">
                    <div className="image__cover"></div>
                    <div className="image__cover"></div>
                  </div>
                  <div className="page-num">
                    <p>01</p>
                  </div>
                </a>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        )
      }}
    />
    <MoonBackground />
    <StarBackground />
    <div class="curtain"></div>
      <div class="loader"></div>
  </div>
)

export default IndexPage
