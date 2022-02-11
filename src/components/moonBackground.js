import React, { Component } from "react"
import Parallax from "parallax-js" // Now published on NPM

class MoonBackground extends Component {
  componentDidMount() {
    this.parallax = new Parallax(this.scene)
  }
  componentWillUnmount() {
    this.parallax.disable()
  }
  render() {
    return (
      <div> 
        <div className="moon-background">
          <div className="moonlight">
            <div className="moonlight__wrap js-parallax-moonlight" ref={el => (this.scene = el)}>
              <div className="layer moonlight__img" data-depth="0.2"></div>
            </div>
          </div>
        </div>
        <div className="sky-color"></div>
      </div>
    )
  }
}

export default MoonBackground