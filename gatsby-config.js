const path = require('path')

const THINSP = '\u2009'
const MDASH = '\u2014'

module.exports = {
  siteMetadata: {
    titlePrefix: `Scampersand${THINSP}${MDASH}${THINSP}`,
    defaultTitle: `Web & Mobile Applications, Providence`,
    description: `We work with startups and organizations to build software that makes a difference.`,
    twitter: `scampersandco`,
    // prettier-ignore
    links: [
      {name: '18f', href: 'https://18f.gsa.gov'},
      {name: 'abc-clio', href: 'https://www.abc-clio.com'},
      {name: 'ada', href: 'https://www.ada.org/'},
      {name: 'appsembler', href: 'https://appsembler.com'},
      {name: 'codie', href: 'http://www.siia.net/codie/'},
      {name: 'einstein', href: 'https://einsteinpapers.press.princeton.edu'},
      {name: 'figures', href: 'https://www.appsembler.com/blog/an-inside-look-at-figures-a-better-way-to-measure-course-performance-in-open-edx/'},
      {name: 'gw', href: 'https://www.g-w.com'},
      {name: 'open-edx', href: 'https://open.edx.org'},
      {name: 'princeton-university-press', href: 'https://press.princeton.edu'},
      {name: 'ripul', href: 'http://ripul.org'},
      {name: 'tizra', href: 'https://www.tizra.com'},
      {name: 'twitter', href: 'https://twitter.com/scampersandco'},
      {name: 'github', href: 'https://github.com/scampersand'},
      {name: 'linkedin', href: 'https://www.linkedin.com/company/scampersand'},
    ]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        '~': path.join(__dirname, `src`),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `don3dwd`,
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scampersand`,
        short_name: `Scampersand`,
        start_url: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-77612407-1',
      },
    },
  ],
}
