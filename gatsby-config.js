module.exports = {
  siteMetadata: {
    title: 'Richard Simms',
    description: 'I design human-centered services, transforming ideas into digital products and creating unique customer experiences.',
    keywords: 'UX, Design, Product, human-centered, UI, Strategy, value-based, service, Lean UX, App, Website, sketch, figma, prototypes, startup, '
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    'gatsby-plugin-favicon',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56512737-4",
        respectDNT: true,
      },
    },
  ],
}
