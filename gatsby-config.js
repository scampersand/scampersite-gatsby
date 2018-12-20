const THINSP = '\u2009'
const MDASH = '\u2014'

module.exports = {
  siteMetadata: {
    title: `Scampersand${THINSP}${MDASH}${THINSP}Web & Mobile Applications, Providence`,
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
        name: 'Scampersand',
        short_name: 'Scampersand',
        start_url: '/',
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
