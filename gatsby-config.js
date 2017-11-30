module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typography`,
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`
  ],

}
