module.exports = {
  siteMetadata: {
    title: 'Richard Simms',
    description: 'I design human-centered services, transforming ideas into digital products and creating unique customer experiences.',
    keywords: 'UX, Design, Product, human-centered, UI, Strategy, value-based, service, Lean UX, App, Website, sketch, figma, prototypes, startup, ',
    siteUrl: `https://www.rsimms.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`,
      },
    },
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-favicon',
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.rsimms.com',
        sitemap: 'https://www.rsimms.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56512737-4",
        respectDNT: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 295758,
        sv: 6
      },
    },
  ],
}
