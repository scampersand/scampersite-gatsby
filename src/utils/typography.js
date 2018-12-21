import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['brother-1816', 'sans-serif'],
  bodyFontFamily: ['brother-1816', 'sans-serif'],
  headerWeight: '400',
  overrideStyles: ({ rhythm }) => ({
    'h1,h2,h3,h4,h5,h6': {
      marginBottom: rhythm(1/2),
    },
  }),
})

export default typography
