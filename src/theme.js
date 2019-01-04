import typography from './utils/typography'

const {rhythm} = typography

const theme = {
  breakpoints: ['1024px'], // ipad landscape
  space: [0, 0.5, 1, 2, 4, 8, 16].map(i => rhythm(i)),
}

export default theme
