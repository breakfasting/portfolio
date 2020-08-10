module.exports = {
  siteMetadata: {
    title: `Wayne Su`,
    description: `A GIS researcher-turned-software engineer with a big affinity for innovative concepts amongst their real-world applications`,
    author: `waynesu`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
        modalProps: {
          className: 'react-modal',
          overlayClassName: 'react-modal-overlay',
          closeTimeoutMS: 400,
        },
      },
    },
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `600`, `700`]
          },
          {
            family: `Ubuntu Mono`,
            variants: [`400`]
          },
        ],
      },
    },
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
        name: `Wayne Su Portfolio`,
        short_name: `WayneSu`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#F8F8F8`,
        display: `standalone`,
        icon: `src/images/logo-small.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
