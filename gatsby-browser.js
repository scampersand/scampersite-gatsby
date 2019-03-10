/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const smoothscroll = require('smoothscroll-polyfill')

exports.onClientEntry = () => {
  smoothscroll.polyfill()
}

exports.onInitialClientRender = () => {
  // Set this here instead of theme.global so that initial jump to last
  // scroll position is instant. Note this doesn't affect scrolling for the
  // nav links... those are done in JS so that Safari works (with the
  // smoothscroll polyfill). This only affects clicking browser back, and
  // only Firefox and Chrome.
  window.setTimeout(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, 1)
}
