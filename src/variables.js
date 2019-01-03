import typography from './utils/typography'

const {rhythm} = typography

export default {
  breakpoints: ['1024px'], // ipad landscape
  logoColumns: [2, 4],
  logoGutter: 20,
  logoAspect: 2.5 / 1,
  logoRowGutter: rhythm(2),
  projectImageWidth: 2 / 3,
  sectionMargin: rhythm(2),
  subSectionMargin: rhythm(1),
}
