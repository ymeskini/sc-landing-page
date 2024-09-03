import type { GatsbyConfig } from "gatsby";
import adapter from "gatsby-adapter-netlify";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  adapter: adapter({
    excludeDatastoreFromEngineFunction: false,
    imageCDN: true,
  }),
  siteMetadata: {
    title: "Design Code",
    description: "The best design and code resources on the web.",
    siteUrl: "https://youssefmeskini.me",
    twitterUsername: "@youssefmeskini",
    image: "/images/og-image.jpg",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "hk8p85i4mug2",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};

export default config;
