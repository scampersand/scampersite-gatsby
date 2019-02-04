import _ from 'lodash'
import Typography from 'typography'
import {css} from '@emotion/core'

// Reset based on http://meyerweb.com/eric/tools/css/reset/ v2.0
// prettier-ignore
const reset = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

// Use typography.js to make the rhythm function
const baseFontSize = 24
const baseLineHeight = 1.5
const typography = new Typography({
  baseFontSize: baseFontSize + 'px',
  baseLineHeight,
})
const {rhythm} = typography

// Define styled-system lookup tables in advance, so we can also reference
// them directly while defining the theme below.
//
// https://github.com/jxnblk/styled-system/blob/master/docs/table.md
//
const breakpoints = ['1024px', '1880px'] // ipad landscape, max desktop
const space = [0, 1 / 2, 1, 2, 4, 8, 16].map(i => rhythm(i))
const fonts = {
  text: 'mrs-eaves, serif',
  title: 'brother-1816, sans-serif',
}
const fontSizes = _.mapValues(
  {
    small: 5 / 6,
    text: 1,
    large: 7 / 6,
    larger: 8 / 6,
  },
  i => baseFontSize * i + 'px',
)

const fontWeights = {
  normal: 400,
  bold: 700,
}
const colors = {
  background: 'white',
  text: 'hsla(0, 0%, 0%, 0.8)',
  accent: '#0fa7b1',
}
const borders = {
  accent: `2px solid ${colors.accent}`,
  nav: `2px solid ${colors.text}`,
}

const theme = {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  space,

  global: css`
    ${reset}
    ${{
      html: {
        fontFamily: fonts.text,
        fontSize: baseFontSize,
        boxSizing: 'border-box',
      },
      '*,*:before,*:after': {
        boxSizing: 'inherit',
      },
      body: {
        lineHeight: baseLineHeight,
        color: colors.text,
        backgroundColor: colors.background,
      },
    }}
  `,

  Link: {
    fontWeight: fontWeights.bold,
    textDecoration: 'none',
  },
}

export default theme
