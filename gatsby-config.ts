const tsconfig = require("./tsconfig.json")
const aliases = Object.entries(tsconfig.compilerOptions.paths).reduce((acc, [key, value]) => {
  acc[key] = value[0]
  return acc
}, {})

import type { GatsbyConfig } from "gatsby"
import adapter from "gatsby-adapter-netlify"

const config: GatsbyConfig = {
  adapter: adapter(),
  plugins: [
    // Gallery
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },

    // Dev stuff
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: aliases,
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    // Tailwind
    "gatsby-plugin-postcss",
  ],
}

export default config
