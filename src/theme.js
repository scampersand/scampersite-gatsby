import fp from 'lodash/fp'
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
    border: 0;
    color: inherit;
    font-size: 100%;
    font-style: inherit;
    font-weight: inherit;
    font: inherit;
    margin: 0;
    padding: 0;
    text-decoration: none;
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

// Define styled-system lookup tables in advance, so we can also reference
// them directly while defining the theme below.
//
// https://github.com/jxnblk/styled-system/blob/master/docs/table.md
//
const breakpoints = {
  phone: 0,
  ipadp: '768px',
  ipadl: '1024px',
  laptop: '1200px',
  fhd: '1920px',
}
const mq = fp.mapValues(v => `@media(min-width: ${v})`, breakpoints)
const fonts = {
  sans: 'brother-1816, sans-serif',
  serif: 'mrs-eaves, serif',
}
const baseFontSizes = {
  phone: 20,
  ipadp: 22,
  ipadl: 24,
}
const baseLineHeights = {
  phone: 1.3,
}
const px = n => isNaN(n) ? n : `${n}px`
const threeBreakPoints = fp.mapValues(
  vs => ({
    phone: px(vs[0]),
    ipadp: px(vs[1]),
    ipadl: px(vs[2]),
  }))
export const fs = threeBreakPoints({
  landingLogo: [14, 16, 18],
  landingNav: [12, 14, 16],
  sansTitle: [14, 16, 16],
  footerIcon: [24, 26, 28],
  footerLogo: [12, 14, 14],
  footerText: [16, 18, 18],
  quote: [24, 26, 28],
  serifTitle: [26, 32, 32],
  lede: [24, 33, 36],
})
const fontWeights = {
  normal: 400,
  bold: 700,
}
const baseColors = {
  greyDk: 'hsla(0, 0%, 0%, 0.8)',
  greyLt: 'hsla(0, 0%, 0%, 0.2)',
  blue: '#0060ad',
  blueTint: '#a8c9e3', // blue tint 66%
  green: '#86a5a6', // from #4a797a
  greenShade: '#7f9d9e', // green shade 5%
  gold: '#b87812',
  magenta: '#a9047a',
}
const colors = {
  background: 'white',
  text: baseColors.greyDk,

  emphasis: baseColors.gold,
  button: baseColors.magenta,
  link: baseColors.magenta,

  accent: baseColors.blueTint,
  frame: baseColors.blue,
  slab: baseColors.green,
  logoBg: baseColors.greenShade,
  footer: baseColors.blueTint,

  // not currently used
  thread: baseColors.greyLt,
}
const borders = {
  accent: `4px solid ${colors.accent}`, // not used?
  input: `1px solid ${colors.thread}`,
}
export const bb = threeBreakPoints({
  quote: [3, 4, 4].map(x => `${x}px solid ${colors.accent}`),
  frame: [8, 15, 30].map(x => `${x}px solid ${colors.frame}`),
  nav: [2, 3, 3].map(x => `${x}px solid ${colors.text}`),
})
const radii = {
  rounded: '6px',
}

const theme = {
  borders,
  breakpoints,
  colors,
  fonts,
  fontWeights,
  radii,
  space: {},

  global: css`
    ${reset}
    ${{
      html: {
        fontFamily: fonts.serif,
        fontSize: baseFontSizes.phone,
        boxSizing: 'border-box',
        // scrollBehavior is set in gatsby-browser.js
      },
      [mq.ipadp]: {
        html: {
          fontSize: baseFontSizes.ipadp,
        },
      },
      [mq.ipadl]: {
        html: {
          fontSize: baseFontSizes.ipadl,
        },
      },
      [mq.laptop]: {
        html: {
          fontSize: baseFontSizes.laptop,
        },
      },
      '*,*:before,*:after': {
        boxSizing: 'inherit',
      },
      body: {
        lineHeight: baseLineHeights.phone,
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
