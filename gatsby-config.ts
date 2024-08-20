import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Design Code`,
    description: `The best design and code resources on the web.`,
    siteUrl: `https://youssefmeskini.me`,
    twitterUsername: `@youssefmeskini`,
    image: `/images/og-image.jpg`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-styled-components"]
};

export default config;
