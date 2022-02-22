import * as React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Moon from "../components/moon"
import MoonBackground from "../components/moonBackground"
import StarBackground from "../components/starBackground"
import { anime } from "react-anime"
import phpLogo from "../static/php-file.svg"
import laravelLogo from "../static/laravel-logo.svg"
import wordpressLogo from "../static/wordpress-logo.svg"
import javascriptLogo from "../static/javascript.svg"
import reactLogo from "../static/react.svg"
import vueLogo from "../static/vue.svg"
import serverlessLogo from "../static/serverless.svg"
import gatsbyLogo from "../static/gatsby.svg"
import gridsomeLogo from "../static/gridsome.svg"
import databaseLogo from "../static/database.svg"
import redisLogo from "../static/redis.svg"
import mysqlLogo from "../static/mysql.svg"
import uxDesignLogo from "../static/user-experience-design.svg"
import webDesignLogo from "../static/design-skills.svg"
import responsiveLogo from "../static/responsive.svg"
import seoLogo from "../static/seo.svg"
import pageSpeedLogo from "../static/rocket-ship.svg"

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

        var textWrapperHeaderWork = document.querySelector(".header.work.ml14 .letters")
        textWrapperHeaderWork.innerHTML =
          textWrapperHeaderWork.textContent.replace(
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
            .add(
              {
                targets: ".header.skills.ml12 .letter",
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 800,
                delay: (el, i) => 100 + 30 * i,
              },
              "-=400"
            )
            .add(
              {
                targets: ".cover",
                left: ["-100%", "100%"],
                easing: "easeOutCubic",
                duration: 2000,
                delay: (el, i) => i * 200,
              },
              "-=400"
            )
            .add(
              {
                targets: ".announcement .row .col div",
                opacity: [0, 1],
                easing: "easeOutCubic",
                duration: 2000,
                delay: (el, i) => i * 100,
              },
              "-=2000"
            )

            anime({
              targets: ".blog-card.js-moon, .header.work.ml14",
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
        if (destination.index === 2) {

          anime({
            targets: ".card.js-moon",
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
              targets: ".header.work.ml14",
              translateX: ["100%", 0],
              translateZ: 0,
              opacity: [0, 1],
              easing: "easeOutCubic",
              duration: 800,
            }, "-=400")
            .add({
              targets: ".header.work.ml14 .line",
              scaleX: [0, 1],
              opacity: [0.5, 1],
              easing: "easeInOutExpo",
              duration: 900,
            })
            .add({
              targets: ".header.work.ml14 .letter",
              opacity: [0, 1],
              translateX: [40, 0],
              translateZ: 0,
              scaleX: [0.3, 1],
              easing: "easeOutExpo",
              duration: 800,
              offset: "-=600",
              delay: (el, i) => 150 + 25 * i,
            })
            .add({
              targets: ".blog-card",
              translateX: ["100%", 0],
              translateZ: 0,
              opacity: [0, 1],
              easing: "easeOutCubic",
              duration: 800,
              delay: function (el, i) {
                return 500 + 50 * i
              },
            }, "-=1500")
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
                    <div className="wrapper">
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
                            <img src={javascriptLogo} />
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src={reactLogo} />
                            <span>React</span>
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src={vueLogo} />
                            <span>Vue</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="skill-icon">
                            <img src={serverlessLogo} />
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src={gatsbyLogo} />
                            <span>Gatsby</span>
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src={gridsomeLogo} />
                            <span>Gridsome</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="skill-icon">
                            <img src={databaseLogo} />
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src={mysqlLogo} />
                            <span>MySQL</span>
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src={redisLogo} />
                            <span>Redis</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="skill-icon">
                            <img src={webDesignLogo} />
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src={uxDesignLogo} />
                            <span>UX/UI Design</span>
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src={responsiveLogo} />
                            <span>Responsive</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className="skill-icon">
                            <img src={seoLogo} />
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src={pageSpeedLogo} />
                            <span>Fast Pages</span>
                          </div>
                          <div className="skill-icon-wrapper">
                            <img src="" />
                            <span></span>
                          </div>
                        </div>
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
            <div className="section work">
              <div className="slide">
                <div className="fullpage__slide">
                  <div className="header work ml14">
                    <span className="text-wrapper">
                      <span class="letters">Work</span>
                      <span class="line"></span>
                    </span>
                  </div>
                  <div className="js-moon blog-card spring-fever">
                    <div className="title-content">
                      <h3>
                        <a href="#">Tahiti Badminton Federation</a>
                      </h3>
                      <div className="intro">
                        {" "}
                        <a href="#">Website</a>{" "}
                      </div>
                    </div>
                    <div className="card-info">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim...
                      <a href="#">
                        Read Article
                        <span className="licon icon-arr icon-black"></span>
                      </a>
                    </div>
                    <div className="utility-info">
                      <ul className="utility-list">
                        <li>
                          <span className="licon icon-like"></span>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <span className="licon icon-com"></span>
                          <a href="#">12</a>
                        </li>
                        <li>
                          <span className="licon icon-dat"></span>03 jun 2017
                        </li>
                        <li>
                          <span className="licon icon-tag"></span>
                          <a href="#">Photos</a>, <a href="#">Nice</a>
                        </li>
                      </ul>
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="color-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="slide">test</div>
            </div>
            <div className="section contact">
              <div className="fullpage__slide">
                <div className="card js-moon">
                  <div className="header skills ml12">
                    <span className="text-wrapper">Contact</span>
                  </div>
                  <div className="announcement">
                    <div className="corner"></div>
                    <div className="corner"></div>
                    <div className="corner"></div>
                    <div className="corner"></div>
                    <div className="cover first"></div>
                    <div className="cover second"></div>
                    <div className="cover third"></div>
                    <div className="wrapper">
                      <div className="row">
                        <div className="col"></div>
                        <div className="col"></div>
                      </div>
                    </div>
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
