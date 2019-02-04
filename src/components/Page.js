import React from 'react'
import PropTypes from 'prop-types'
import {Global} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import theme from '~/theme'
import {Footer, SEO} from '.'

export const Page = ({keywords, title, ...props}) => (
  <ThemeProvider theme={theme}>
    <Global styles={theme['global']} />
    <SEO title={title} keywords={keywords} />
    <main role="main" {...props} />
    <Footer />
  </ThemeProvider>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  keywords: PropTypes.array,
  title: PropTypes.string.isRequired,
}
