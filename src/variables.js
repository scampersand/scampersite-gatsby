import typography from './utils/typography'

const {rhythm} = typography

export default {
  breakpoints: ['1024px'], // ipad landscape
  logoColumns: [2, 4],
  logoGutter: '11px', // XXX
  logoAspect: 3 / 2,
  sectionMargin: rhythm(2),
  subSectionMargin: rhythm(1),
}
