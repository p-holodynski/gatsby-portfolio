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
import ContactForm from "../components/contactForm"

const IndexPage = props => (
  <div>
    <header>
      <a className="name" href="./">
        PH
      </a>
      <div className="wrap">
        <div className="icons">
          <a href="https://github.com/p-holodynski" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#8f3d4b"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/patryk-holodynski/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#8f3d4b"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
        </div>
      </div>
    </header>
    <ReactFullpage
      //fullpage options
      //Navigation
      easingcss3={"cubic-bezier(0.645, 0.045, 0.355, 1)"}
      scrollingSpeed={1e3}
      anchors={[
        "home-section",
        "skills-section",
        "work-section",
        "contact-section",
      ]}
      navigation={!0}
      navigationPosition={"bottom"}
      animateAnchor={!1}
      lazyLoading={true}
      //sectionsColor={["yellow", "orange", "#C0C0C0", "#ADD8E6"]}
      onLeave={(origin, destination, direction) => {
        // This will return the width of the viewport
        var intFrameWidth = window.innerWidth
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

        var textWrapperHeaderWork = document.querySelector(
          ".header.work.ml14 .letters"
        )
        textWrapperHeaderWork.innerHTML =
          textWrapperHeaderWork.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          )

        var textWrapperHeaderContact = document.querySelector(
          ".header.contact.ml12 .text-wrapper"
        )
        textWrapperHeaderContact.innerHTML =
          textWrapperHeaderContact.textContent.replace(
            /\S/g,
            "<span class='letter'>$&</span>"
          )

        // console.log("onLeave event", { origin, destination, direction })
        var background1 =
          "linear-gradient(to left, #ffbd8b, #ffbd8b, #7da3be, #7da3be, #7da3be)"
        var background2 =
          "linear-gradient(to top left, #ffbd8b, #ffbd8b, #7da3be, #7da3be, #24344b)"
        var background3 =
          "linear-gradient(to top left, #ffbd8b, #ffbd8b, #7da3be, #24344b, #24344b)"
        var background4 =
          "linear-gradient(to top left, #ffbd8b, #7da3be, #24344b, #24344b, #24344b)"
        if (intFrameWidth <= 420) {
          var background1 =
            "linear-gradient(to bottom, #ffbd8b, #ffbd8b, #7da3be, #7da3be, #7da3be)"
          var background2 =
            "linear-gradient(to top, #ffbd8b, #ffbd8b, #7da3be, #7da3be, #24344b)"
          var background3 =
            "linear-gradient(to top, #ffbd8b, #ffbd8b, #7da3be, #24344b, #24344b)"
          var background4 =
            "linear-gradient(to top, #ffbd8b, #7da3be, #24344b, #24344b, #24344b)"
        }
        if (destination.index !== 0) {
          document.querySelector(".star").style.display = "block"
        }
        if (destination.index === 0) {
          document.querySelector(".star").style.display = "none"
          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".sky-color",
              backgroundImage: [background2, background1],
              duration: 100,
              easing: "easeOutCubic",
            })

          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".moonlight",
              top: ["75%", "0"],
              duration: 2000,
              easing: "easeOutCubic",
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
            targets: ".js-parallax-moon",
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
            targets: ".card.skills",
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
          if (direction === "down") {
            anime
              .timeline({
                loop: false,
              })
              .add({
                targets: ".moonlight",
                top: ["0", "75%"],
                duration: 2000,
                easing: "easeOutCubic",
                delay: (el, i) => 45 * (i + 1),
              })
              .add(
                {
                  targets: ".sky-color",
                  backgroundImage: [background1, background2],
                  duration: 100,
                  easing: "easeOutCubic",
                },
                "-=3000"
              )
          }

          if (direction === "up") {
            anime
              .timeline({
                loop: false,
              })
              .add({
                targets: ".moonlight",
                top: ["1000px", "75%"],
                easing: "easeOutCubic",
                duration: 2000,
                delay: (el, i) => 45 * (i + 1),
              })
              .add(
                {
                  targets: ".sky-color",
                  easing: "easeOutCubic",
                  backgroundImage: [background3, background2],
                  duration: 1000,
                },
                "-=3000"
              )
          }

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
            targets: ".js-parallax-moon",
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
              targets: ".card.skills",
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
                targets: ".header.skills.ml12 .letter",
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 800,
                delay: (el, i) => 100 + 30 * i,
              },
              "-=2200"
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
          if (direction === "down") {
            anime
              .timeline({
                loop: false,
              })
              .add({
                targets: ".moonlight",
                top: ["75%", "1000px"],
                easing: "easeOutCubic",
                duration: 2000,
                delay: (el, i) => 45 * (i + 1),
              })
              .add(
                {
                  targets: ".sky-color",
                  easing: "easeOutCubic",
                  backgroundImage: [background2, background3],
                  duration: 1000,
                },
                "-=3000"
              )
          }

          if (direction === "up") {
            anime
              .timeline({
                loop: false,
              })
              .add({
                targets: ".moonlight",
                top: ["1000px", "75%"],
                easing: "easeOutCubic",
                duration: 2000,
                delay: (el, i) => 45 * (i + 1),
              })
              .add(
                {
                  targets: ".sky-color",
                  easing: "easeOutCubic",
                  backgroundImage: [background4, background3],
                  duration: 1000,
                },
                "-=3000"
              )
          }

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
            .add(
              {
                targets: ".header.work.ml14",
                translateX: ["100%", 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutCubic",
                duration: 800,
              },
              "-=400"
            )
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
            .add(
              {
                targets: ".blog-card",
                translateX: ["100%", 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutCubic",
                duration: 800,
                delay: function (el, i) {
                  return 500 + 50 * i
                },
              },
              "-=1500"
            )

          anime({
            targets: ".contact.card.js-moon, .header.contact.ml14",
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

        if (destination.index === 3) {
          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".moonlight",
              top: ["1000px", "2000px"],
              easing: "easeOutCubic",
              duration: 2000,
              delay: (el, i) => 45 * (i + 1),
            })
            .add(
              {
                targets: ".sky-color",
                easing: "easeOutCubic",
                backgroundImage: [background3, background4],
                duration: 1000,
              },
              "-=3000"
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

          anime
            .timeline({
              loop: false,
            })
            .add({
              targets: ".contact.card",
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
                targets: ".header.contact.ml12 .letter",
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 800,
                delay: (el, i) => 100 + 30 * i,
              },
              "-=1000"
            )
            .add(
              {
                targets: ".card.contact .announcement .wrapper",
                opacity: ["0", "1"],
                easing: "easeOutExpo",
                duration: 1000,
                delay: (el, i) => i * 200,
              },
              "-=800"
            )
        }
      }}
      render={({ state, fullpageApi }) => {
        //console.log("render prop change", state, fullpageApi) // eslint-disable-line no-console
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
              </div>
            </div>
            <div className="section skills">
              <div className="fullpage__slide">
                <div className="card js-moon skills">
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
                      <span className="letters">Work</span>
                      <span className="line"></span>
                    </span>
                  </div>
                  <div className="js-moon blog-card spring-fever tahiti-badminton-federation">
                    <div className="title-content">
                      <h3>
                        <a href="https://ftbadminton.pf/">
                          Tahiti Badminton Federation
                        </a>
                      </h3>
                      <div className="intro">
                        {" "}
                        <a href="https://ftbadminton.pf/">Website</a>{" "}
                      </div>
                    </div>
                    <div className="card-info">
                      Static Generated Website built for the Tahitian Badminton
                      Federation. Project involved using Jamstack framework
                      Gridsome for serverless hosting and fast content delivery
                      and Headless CMS - Netflify for a convenient way to update
                      content of the website.
                      <a href="https://ftbadminton.pf/">
                        Visit Website
                        <span className="licon icon-arr icon-black"></span>
                      </a>
                    </div>
                    <div className="utility-info">
                      <ul className="utility-list">
                        <li>
                          <span className="licon"></span>
                          <a href="https://vuejs.org/">Vue</a>
                        </li>
                        <li>
                          <span className="licon"></span>
                          <a href="https://gridsome.org/">Gridsome</a>
                        </li>
                        <li>
                          <span className="licon"></span>Serverless
                        </li>
                        <li>
                          <span className="licon"></span>Headless CMS
                        </li>
                      </ul>
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="color-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="fullpage__slide">
                  <div className="header work ml14">
                    <span className="text-wrapper">
                      <span className="letters">Work</span>
                      <span className="line"></span>
                    </span>
                  </div>
                  <div className="js-moon blog-card spring-fever parkway-volkswagen">
                    <div className="title-content">
                      <h3>
                        <a href="https://www.parkwayvolkswagen.co.uk/">
                          Parkway Volkswagen Website
                        </a>
                      </h3>
                      <div className="intro">
                        {" "}
                        <a href="https://www.parkwayvolkswagen.co.uk/">
                          Website
                        </a>{" "}
                      </div>
                    </div>
                    <div className="card-info">
                      Website built for the Parkway Volkswagen Dealerships in
                      England. Project included building multiple dynamic
                      websites for different dealerships that are linked with
                      internal managements systems, APIs and a custom CMS
                      platform.
                      <a href="https://www.parkwayvolkswagen.co.uk/">
                        Visit Website
                        <span className="licon icon-arr icon-black"></span>
                      </a>
                    </div>
                    <div className="utility-info">
                      <ul className="utility-list">
                        <li>
                          <span className="licon"></span>
                          <a href="https://vuejs.org/">Laravel</a>
                        </li>
                        <li>
                          <span className="licon"></span>
                          <a href="https://gridsome.org/">Redis & MySQL</a>
                        </li>
                        <li>
                          <span className="licon"></span>Vue
                        </li>
                        <li>
                          <span className="licon"></span>Custom built CMS
                          platform
                        </li>
                      </ul>
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="color-overlay"></div>
                  </div>
                </div>
              </div>
              <div className="slide">
                <div className="fullpage__slide">
                  <div className="header work ml14">
                    <span className="text-wrapper">
                      <span className="letters">Work</span>
                      <span className="line"></span>
                    </span>
                  </div>
                  <div className="js-moon blog-card spring-fever hrstolinska">
                    <div className="title-content">
                      <h3>
                        <a href="https://hrbystolinska.pl/">
                          HR Freelancer Website
                        </a>
                      </h3>
                      <div className="intro">
                        {" "}
                        <a href="https://hrbystolinska.pl/">Website</a>{" "}
                      </div>
                    </div>
                    <div className="card-info">
                      Website built for the HR Freelancer in Poland. Using
                      Wordpress and Divi Theme builder to deliver an easy to
                      maintain personal website.
                      <a href="https://hrbystolinska.pl/">
                        Visit Website
                        <span className="licon icon-arr icon-black"></span>
                      </a>
                    </div>
                    <div className="utility-info">
                      <ul className="utility-list">
                        <li>
                          <span className="licon"></span>
                          <a href="https://wordpress.com/">WordPress</a>
                        </li>
                        <li>
                          <span className="licon"></span>
                          <a href="https://www.elegantthemes.com/">
                            Divi Theme Builder
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="gradient-overlay"></div>
                    <div className="color-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section contact">
              <div className="fullpage__slide">
                <div className="card contact js-moon">
                  <div className="header contact ml12">
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
                      <form
                        name="contact-me-form"
                        method="POST"
                        data-netlify="true"
                        className="contact-me"
                      >
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                        <textarea
                          name="message"
                          placeholder="Your message"
                        ></textarea>
                        <input
                          type="hidden"
                          name="form-name"
                          value="contact-me-form"
                        />
                        <button type="submit">Send</button>
                      </form>
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
