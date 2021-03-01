module.exports = {
  siteMetadata: {
    title: 'Richard Simms',
    author: {
      name: `Richard Simms`,
      summary: `A user experience and interaction design expert in Melbourne. He is focused on optimisations and value-based design practices.`,
    },
    description: 'Richard Simms is a user experience and interaction design expert in Melbourne. He is focused on optimisations and value-based design practices for eCommerce.',
    keywords: 'UX, Design, Product, human-centered, UI, Strategy, value-based, service, Lean UX, App, Website, sketch, figma, prototypes, startup, ',
    siteUrl: `https://rsimms.com`,
    social: {
      twitter: `_rsimms`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog/`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },    
    `gatsby-plugin-feed`,
/*     {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/favicon.png`,
      }, 
    },*/
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet', 
    
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Sans\:300,400,500,700`, 
          `Fira Sans Condensed\:500`, 
          `Roboto`, 
          `Pacifico`
        ],
        
      }
    },

    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 295758,
        sv: 6
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.rsimms.com`,
      },
    },
/*     {
      resolve: "gatsby-plugin-hubspot",
      options: {
          trackingCode: "6214193",
          respectDNT: true,
          productionOnly: true,
      },
    }, */
  ],
};