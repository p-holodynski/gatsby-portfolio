import React, { Component } from "react"
import Parallax from "parallax-js" // Now published on NPM
import Anime, { anime } from "react-anime"
import { StaticImage } from "gatsby-plugin-image"
import sun from "../static/sun-svg-animated.svg"
import cloud1 from "../static/cloud1.svg"
import cloud2 from "../static/cloud3.svg"
import cloud3 from "../static/cloud2.svg"
import bCloud1 from "../static/b_cloud01.svg"
import bCloud2 from "../static/b_cloud02.svg"
import palm from "../static/palm1.svg"
import palmFlip from "../static/palm-flip.svg"

class Moon extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene)
    anime
      .timeline()
      .add({
        targets: ".loader",
        translateY: [0, "-100%"],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
        complete: function () {
          document.querySelector(".loader").classList.add(".js-hidden")
        },
      })
      .add({
        targets: ".js-moon",
        translateX: ["100%", 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutCubic",
        duration: 800,
        delay: function (el, i) {
          return 500 + 50 * i
        },
        offset: "-=1000",
      })
      .add({
        targets: ".active .js-letter",
        translateX: ["-105%", 0],
        translateZ: 0,
        easing: "easeInOutCubic",
        duration: 800,
        delay: function (el, i) {
          return 50 * i
        },
        offset: "-=1200",
      })
  }
  componentWillUnmount() {
    this.parallax.disable()
  }
  render() {
    return (
      <div className="moon">
        <div
          className="moon__img js-parallax-moon"
          ref={el => (this.scene = el)}
        >
          <div className="moon__front layer" data-depth="0.2">
            <div className="moon__text-wrap">
              <p className="moon__text js-moon" data-depth="0.5">
                Full Stack
              </p>
              <p className="moon__text js-moon" data-depth="0.5">
                Web Developer
              </p>
            </div>
          </div>
          <div className="moon__front layer" data-depth="0.8">
            <div className="cloud cloud--front1 js-moon">
              {/* <img src={cloud1} /> */}
            </div>
          </div>
          <div className="moon__back layer" data-depth="0.4">
            <div className="cloud cloud--back2 js-moon">
              <img src={bCloud2} />
            </div>
          </div>
          <div className="moon__front layer" data-depth="0.6">
            <div className="cloud cloud--front2 js-moon">
              <img src={palm} />
            </div>
          </div>
          <div className="moon__back layer sun"data-depth="0.5">
            <img className="js-moon" src={sun} />
          </div>
          <div className="moon__front layer" data-depth="0.7">
            <div className="cloud cloud--front3 js-moon">
              {/* <img src={cloud3} /> */}
            </div>
          </div>
          <div className="moon__back layer" data-depth="0.3">
            <div className="cloud cloud--back1 js-moon">
              <img src={bCloud1} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Moon
