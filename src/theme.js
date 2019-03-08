import _ from 'lodash'
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
const mq = _.mapValues(breakpoints, v => `@media(min-width: ${v})`)
const space = {}
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
  phone: 1.25,
}
export const fs = _.mapValues({
  landingLogo: [14, 16, 18],
  landingNav: [12, 14, 16],
  sansTitle: [14, 16, 16],
  footerIcon: [24, 26, 28],
  footerLogo: [12, 14, 14],
  footerText: [16, 18, 18],
  quote: [24, 26, 28],
  serifTitle: [26, 32, 32],
  lede: [26, 40, 48],
}, vs => ({
  phone: vs[0] + 'px',
  ipadp: vs[1] + 'px',
  ipadl: vs[2] + 'px',
}))
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
  fontWeights,
  radii,
  space,

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
