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
        var textWrapperFirstName = document.querySelector(
          ".ml9 .lettersFirstName"
        )
        textWrapperFirstName.innerHTML =
          textWrapperFirstName.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          )
        var textWrapperLastName = document.querySelector(
          ".ml9 .lettersLastName"
        )
        textWrapperLastName.innerHTML = textWrapperLastName.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        )
        var textWrapperPositionFirstRow = document.querySelector(
          ".ml12 .lettersFirstRowPosition"
        )
        textWrapperPositionFirstRow.innerHTML =
          textWrapperPositionFirstRow.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          )
        var textWrapperPositionLastRow = document.querySelector(
          ".ml12 .lettersLastRowPosition"
        )
        textWrapperPositionLastRow.innerHTML =
          textWrapperPositionLastRow.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          )

        console.log("onLeave event", { origin, destination, direction })
        var background1 =
          "linear-gradient(to left, #ffbd8b, #ffbd8b, #7da3be, #7da3be, #7da3be)"
        var background2 =
          "linear-gradient(to top left, #ffbd8b, #ffbd8b, #7da3be, #7da3be, #24344b)"

        if (destination.index === 0) {
          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".sky-color",
              backgroundImage: [background2, background1],
              duration: 100,
            })
          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".moonlight",
              top: ["75%", "0"],
              duration: 1000,
              delay: (el, i) => 45 * (i + 1),
            })

          anime({
            targets: ".js-letter-lines",
            translateX: ["100%", 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutCubic",
            duration: 800,
            delay: function (el, i) {
              return 500 + 50 * i
            },
          })

          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".ml9 .lettersFirstName .letter",
              scale: [0, 1],
              duration: 1500,
              elasticity: 600,
              delay: (el, i) => 90 * (i + 1),
            })

          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".ml9 .lettersLastName .letter",
              scale: [0, 1],
              duration: 1500,
              elasticity: 600,
              delay: (el, i) => 90 * (i + 1),
            })

          anime.timeline({ loop: false }).add({
            targets: ".ml12 .lettersFirstRowPosition .letter",
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i,
          })

          anime.timeline({ loop: false }).add({
            targets: ".ml12 .lettersLastRowPosition .letter",
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            delay: (el, i) => 500 + 30 * i,
          })

          anime({
            targets: ".js-moon",
            translateX: ["100%", 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutCubic",
            duration: 800,
            delay: function (el, i) {
              return 500 + 50 * i
            },
          })

        }
        if (destination.index === 1) {
          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".sky-color",
              backgroundImage: [background1, background2],
              duration: 100,
            })
          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".moonlight",
              top: ["0", "75%"],
              duration: 1000,
              delay: (el, i) => 45 * (i + 1),
            })

          anime({
            targets: ".js-moon",
            translateX: [0, "100%"],
            translateZ: 0,
            opacity: [1, 0],
            easing: "easeOutCubic",
            duration: 800,
            delay: function (el, i) {
              return 50 * i
            },
          })

          anime({
            targets: ".js-letter-lines",
            translateX: [0, "100%"],
            translateZ: 0,
            opacity: [1, 0],
            easing: "easeOutCubic",
            duration: 800,
            delay: function (el, i) {
              return 50 * i
            },
          })
        }
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
                      <span className="lettersFirstName">Patryk</span>
                      <br />
                      <span className="lettersLastName">Holodynski</span>
                    </span>
                  </h1>
                  <div className="border js-letter-lines">
                    <span></span>
                    <span className="js-letter-lines"></span>
                    <span className="js-letter-lines"></span>
                  </div>
                  <p className="title__lead js-letter ml12">
                    <span className="text-wrapper">
                      <span className="lettersFirstRowPosition">
                        Full Stack
                      </span>
                      <br />
                      <span className="lettersLastRowPosition">
                        Web Developer
                      </span>
                    </span>
                  </p>
                </div>
                <Moon />
                {/* <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button> */}
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
    <div className="curtain"></div>
    <div className="loader"></div>
  </div>
)

export default IndexPage
