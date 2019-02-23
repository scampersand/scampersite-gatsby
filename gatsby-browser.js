/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onInitialClientRender = () => {
  // Set this here instead of theme.global so that initial jump to last
  // scroll position is instant.
  window.setTimeout(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, 1)
}
