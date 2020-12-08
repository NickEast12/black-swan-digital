require(`dotenv`).config({ path: `.env` });
const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Black Swan Digital`,
    siteUrl: `https://wwww.nick-east.com`,
    description: `Enter`,
    twitter: `@comebacktothis`,
    image: `/icon.png`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, 'images'),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nick East `,
        short_name: `Nick East`,
        description: `I'm a front-end web developer based in London, UK. With a love for designing and writing code.`,
        start_url: `/`,
        lang: `en`,
        background_color: `#162129`,
        theme_color: `#1bbc9b`,
        display: `minimal-ui`,
        icon: `./src/static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_ID,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_KEY,
      },
    },
    {
      resolve: `gatsby-transform-portable-text`,
      options: {
        extendTypes: [{ typeName: `SanityPost`, contentFieldName: 'body' }],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svgs/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#1bbc9b`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-138434630-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-138434630-1',
          anonymize: true,
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.nick-east.com',
        sitemap: 'https://www.nick-east.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
