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
  /* avoid blue outline on focused input */
  *:focus {
    outline: none;
  }
`

// Use typography.js to make the rhythm function
const baseFontSize = 24
const baseLineHeight = 1.25
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
const breakpoints = {
  phone: 0,
  ipadp: '768px',
  ipadl: '1024px',
  fhd: '1920px',
}
const space = {}
const fonts = {
  sans: 'brother-1816, sans-serif',
  serif: 'mrs-eaves, serif',
}
const fontSizes = _.mapValues(
  {
    sansLogo: 3 / 4,
    sansNav: 2 / 3,
    sansSmall: 2 / 3,
    sansFooter: 7 / 12,
    serifFooter: 6 / 8,
    serifMedium: 1,
    serifLarge: 7 / 6,
    serifXlarge: 8 / 6,
    serifDisplay: 2,
  },
  i => baseFontSize * i + 'px',
)
const fontWeights = {
  normal: 400,
  bold: 700,
}
const baseColors = {
  greyDk: 'hsla(0, 0%, 0%, 0.8)',
  greyLt: '#e6e6e6',
  blue: '#0060ad',
  blueLt: '#bfd7eb', // #0060ad tint 75%
  blueMd: '#80b0d6', // #0060ad tint 50%
  blueMdTint: '#8db8da', // #80b0d6 tint 10%
  gold: '#b87812',
  magentaDk: '#a9047a',
}
const colors = {
  background: 'white',
  text: baseColors.greyDk,

  emphasis: baseColors.gold,
  button: baseColors.magentaDk,
  link: baseColors.magentaDk,

  accent: baseColors.blueMd,
  slab: baseColors.blueMd,
  logoBg: baseColors.blueMdTint,
  footer: baseColors.blueLt,

  // not currently used
  thread: baseColors.greyLt,
}
const borders = {
  accent: `4px solid ${colors.accent}`,
  nav: `3px solid ${colors.text}`,
  input: `1px solid ${colors.thread}`,
  pictureFrame: `30px solid #0060ad`,
}
const radii = {
  rounded: '6px',
}

const theme = {
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  space,

  global: css`
    ${reset}
    ${{
      html: {
        fontFamily: fonts.serif,
        fontSize: baseFontSize,
        boxSizing: 'border-box',
        // scrollBehavior is set in gatsby-browser.js
      },
      '*,*:before,*:after': {
        boxSizing: 'inherit',
      },
      body: {
        lineHeight: baseLineHeight,
        color: colors.text,
        backgroundColor: colors.background,
        fontWeight: fontWeights.normal,
      },
    }}
  `,

  textStyles: {
    titleSans: {
      fontFamily: fonts.sans,
      textTransform: 'uppercase',
      lineHeight: 1,
      fontWeight: fontWeights.bold,
    },
    titleSerif: {
      fontFamily: fonts.serif,
      textTransform: 'none',
      lineHeight: 1,
      fontWeight: fontWeights.bold,
    },
  },
}

export default theme
