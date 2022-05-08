import type { GatsbyConfig } from "gatsby";


require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});


const config: GatsbyConfig = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    "gatsby-plugin-image",
     "gatsby-plugin-react-helmet", 
     "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  },
   "gatsby-plugin-sharp",
   "gatsby-transformer-sharp", { 
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    // __key: "images"
  }, {
    resolve: `gatsby-source-strapi`,
    options: {
      apiURL: process.env.STRAPI_API_URL,
      accessToken: process.env.STRAPI_TOKEN,
      collectionTypes: ['category',"gallery","testimonial"],
      // singleTypes: []
    },
  }, 
]
};

export default config;
