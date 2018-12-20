module.exports = {
  siteMetadata: {
    title: 'Scampersand&thinsp;&mdash;&thinsp;Web &amp; Mobile Applications, Providence',
    description: 'We work with startups and organizations to build the right thing at the right time.',
    twitter: 'scampersandco',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'scampersand-com',
        short_name: 'scampersand',
        start_url: '/',
        background_color: '#663399', // XXX
        theme_color: '#663399', // XXX
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'don3dwd',
        }
      },
    },
  ],
}
