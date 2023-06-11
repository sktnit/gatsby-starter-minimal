module.exports = {
  siteMetadata: {
    lang: 'en',
    title: 'Shailesh Thakur | Junior Infrastructure Engineer',
    description: "I'm Shailesh Thakur, a Software Engineer, from India.",
    author: 'Shailesh Thakur',
    siteUrl: 'https://shaileshnit.com',
    imageShare: 'share.png',
    email: 'sktnit.cs18@gmail.com',
    social: [
      { name: 'linkedin', url: 'https://www.linkedin.com/in/sktnit/' },
      { name: 'github', url: 'https://github.com/sktnit' },
      { name: 'twitter', url: 'https://twitter.com/ShaileshTh95273' },
      { name: 'dev', url: 'https://dev.to/sktnitcs18' },
    ],
  },
  plugins: [
    'gatsby-plugin-sharp',
    `gatsby-transformer-sharp`,
    'gatsby-plugin-image',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-external-links
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-images
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
            },
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-156556339-1`,
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Shailesh Thakur | Computer Science Student',
        short_name: 'Shailesh Thakur',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#02aab0',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
  ],
};
