/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")

exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents
}) => {
  setHeadComponents([
  ])
  setPreBodyComponents([
    <div id="preloader">
      {/* Optional: */}
      <div className="preloader_animation"></div>
    </div>
  ])
  setBodyAttributes({
    className: "preloader_active"
  })
  setPostBodyComponents([
  ])
}