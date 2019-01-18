import Typography from 'typography'

export const baseFontSize = 24

export const options = {
  baseFontSize: baseFontSize + 'px',
  baseLineHeight: 1.5,
  headerFontFamily: ['brother-1816', 'sans-serif'],
  bodyFontFamily: ['mrs-eaves', 'serif'],
  headerWeight: '400',
  boldWeight: '700',
}

export const typography = new Typography({
  ...options,
  overrideStyles: ({ rhythm }) => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1,
      marginBottom: rhythm(1/2),
      textTransform: 'uppercase',
    },
    h1: {
      fontSize: `${baseFontSize * .83333333}px`,
    },
    h2: {
      fontSize: `${baseFontSize * 1.33333333}px`,
      textTransform: 'none',
    },
    h3: {
      fontSize: `${baseFontSize * .83333333}px`,
    },
    a: {
      fontWeight: options.boldWeight,
      textDecoration: 'none',
    },
    blockquote: {
      fontSize: `${baseFontSize * 1.16666666}px`,
      fontStyle: 'italic',
      fontWeight: options.boldWeight,
    },
    cite: {
      fontSize: `${baseFontSize * 1}px`,
      fontStyle: 'normal',
      fontWeight: '400',
    }
  }),
})

export const {rhythm} = typography

// for gatsby-plugin-typography
export default typography
