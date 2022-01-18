module.exports = {
  plugins: [
    // Tailwind
    "gatsby-plugin-postcss",

    // Gallery
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images/`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/`,
    //   },
    // },
  ],
}
