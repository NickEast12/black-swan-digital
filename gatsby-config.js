require(`dotenv`).config({ path: `.env` });

module.exports = {
  siteMetadata: {
    title: `Black Swan Digital`,
    siteUrl: `https://wwww.nick-east.com`,
    description: `Enter`,
    twitter: `@comebacktothis`,
    image: `/icon.png`,
  },
  plugins: [
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
        icon: `./src/assets/images/icon.png`,
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
        trackingId: "UA-138434630-1",
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: "UA-138434630-1",
          anonymize: true,
        },
        environments: ["production", "development"],
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.nick-east.com",
        sitemap: "https://www.nick-east.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
