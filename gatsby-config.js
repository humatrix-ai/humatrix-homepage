/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.example.com`,
  },
  plugins: [`gatsby-plugin-sitemap`,'gatsby-plugin-robots-txt',
    {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://jujekebab.com`,
      stripQueryString: true,
    },
  },
],
}
