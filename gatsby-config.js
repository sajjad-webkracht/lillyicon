/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Lilly Icon`,
    siteUrl: `https://www.lillyicon.com`,
  },
  plugins: [
    `postcss`, `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-copy-files-enhanced`,
      options: {
        source: `${__dirname}/src/static`,
        destination: `/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static/`,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:100,100italic,300,300italic,400,400italic,500,500italic,700,700italic,900,900italic`,
        ],
        display: 'swap',
      },
    },
  ],
}
