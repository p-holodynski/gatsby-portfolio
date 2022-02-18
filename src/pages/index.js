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
import phpLogo from "../static/php-file.svg"
import laravelLogo from "../static/laravel-logo.svg"
import wordpressLogo from "../static/wordpress-logo.svg"

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

        var textWrapperHeaderSkills = document.querySelector(
          ".header.skills.ml12 .text-wrapper"
        )
        textWrapperHeaderSkills.innerHTML =
          textWrapperHeaderSkills.textContent.replace(
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

          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".js-letter",
              translateX: ["-100%", "0%"],
              translateZ: 0,
              opacity: [0, 1],
              easing: "easeOutCubic",
              duration: 800,
              delay: function (el, i) {
                return 50 * i
              },
            })
            .add(
              {
                targets: ".ml9 .lettersFirstName .letter",
                scale: [0, 1],
                duration: 1000,
                elasticity: 600,
                delay: (el, i) => 30 * (i + 1),
              },
              500
            )
            .add(
              {
                targets: ".ml9 .lettersLastName .letter",
                scale: [0, 1],
                duration: 1000,
                elasticity: 600,
                delay: (el, i) => 30 * (i + 1),
              },
              "-=200"
            )
            .add(
              {
                targets: ".js-letter-lines",
                translateX: ["100%", 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutCubic",
                duration: 800,
                delay: function (el, i) {
                  return 500 + 50 * i
                },
              },
              "-=1000"
            )
            .add(
              {
                targets: ".ml12 .lettersFirstRowPosition .letter",
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 800,
                delay: (el, i) => 100 + 30 * i,
              },
              "-=200"
            )
            .add(
              {
                targets: ".ml12 .lettersLastRowPosition .letter",
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 800,
                delay: (el, i) => 100 + 30 * i,
              },
              "-=400"
            )

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

          anime({
            targets: ".card",
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
            targets: ".js-letter",
            translateX: ["0%", "-100%"],
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

          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".card",
              translateX: ["100%", 0],
              translateZ: 0,
              opacity: [0, 1],
              easing: "easeOutCubic",
              duration: 800,
              delay: function (el, i) {
                return 500 + 50 * i
              },
            })
            .add({
              targets: ".header.skills.ml12 .letter",
              translateX: [40, 0],
              translateZ: 0,
              opacity: [0, 1],
              easing: "easeOutExpo",
              duration: 800,
              delay: (el, i) => 100 + 30 * i,
            }, "-=400")
            .add({
              targets: ".cover",
              left: ["-100%", "100%"],
              easing: "easeOutCubic",
              duration: 2000,
              delay: (el, i) => i * 200,
            }, "-=400")
            .add(
              {
                targets: ".announcement .row .col div",
                opacity: [0, 1],
                easing: "easeOutCubic",
                duration: 2000,
                delay: (el, i) => i * 200,
              },
              "-=2000"
            )
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
                        Freelancer \
                      </span>
                      <br />
                      <span className="lettersLastRowPosition">
                        Web Designer
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
            <div className="section skills">
              <div className="fullpage__slide">
                <div className="card js-moon">
                  <div className="header skills ml12">
                    <span className="text-wrapper">Skills</span>
                  </div>
                  <div className="announcement">
                    <div className="corner"></div>
                    <div className="corner"></div>
                    <div className="corner"></div>
                    <div className="corner"></div>
                    <div className="cover first"></div>
                    <div className="cover second"></div>
                    <div className="cover third"></div>
                    <div className="row">
                      <div className="col">
                        <div className="skill-icon">
                          <img src={phpLogo} />
                        </div>
                        <div className="skill-icon-wrapper">
                          <img src={laravelLogo} />
                          <span>Laravel</span>
                        </div>
                        <div className="skill-icon-wrapper">
                          <img src={wordpressLogo} />
                          <span>Wordpress</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="skill-icon">
                          <i className="fab fa-docker"></i>
                        </div>
                        <h3>DevOps</h3>
                        <p>Docker, Ansible, Kubernetes</p>
                      </div>
                      <div className="col">
                        <div className="skill-icon">
                          <i className="fab fa-aws"></i>
                        </div>
                        <h3>Cloud Engineering</h3>
                        <p>
                          AWS EC2, EKS, CloudFormation, CloudWatch, networking
                          etc.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="skill-icon">
                          <i className="fab fa-python"></i>
                        </div>
                        <h3>Python</h3>
                        <p>Flask, Django, Click</p>
                      </div>
                      <div className="col">
                        <div className="skill-icon">
                          <i className="fas fa-database"></i>
                        </div>
                        <h3>Databases</h3>
                        <p>Cassandra, Redis, MySQL</p>
                      </div>
                      <div className="col">
                        <div className="skill-icon">
                          <i className="fab fa-jenkins"></i>
                        </div>
                        <h3>Continuous Integration</h3>
                        <p>Jenkins CI, Travis CI</p>
                      </div>
                    </div>
                    <a
                      className="inspiration"
                      href="https://icons8.com/icon/pKaVdzbCJGgA/php"
                    >
                      PHP icon by Icons8
                    </a>
                  </div>
                </div>
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
