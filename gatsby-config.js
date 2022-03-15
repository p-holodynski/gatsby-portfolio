module.exports = {
  siteMetadata: {
    title: `Patryk Holodynski Portfolio`,
    description: `Portfolio Website`,
    author: `@p_holodynski`,
    siteUrl: `https://patrykholodynski.com`,
    image: "src/static/logo.png",
    keywords: `patryk, holodynski, patrykholodynski, freelance, fullstack, developer, portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/static/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    'gatsby-plugin-netlify',
    'gatsby-plugin-minify-html',
    'gatsby-plugin-sitemap'
  ],
}
