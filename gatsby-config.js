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
    siteUrl: `https://humatrix.jp`,
  },
  plugins: ['gatsby-plugin-react-helmet','gatsby-plugin-robots-txt',
    {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://jujekebab.com`,
      stripQueryString: true,
    },
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `,
      resolvePages: ({ allSitePage: { nodes } }) => {
        return nodes.map(page => {
          return { ...page };
        });
      },
      serialize: ({ path }) => {
        return {
          url: path,
          changefreq: `daily`,
          priority: 0.7,
        };
      }
    }
  }
],
}
