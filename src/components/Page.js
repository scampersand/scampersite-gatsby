import React from 'react'
import PropTypes from 'prop-types'
import {Global} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import theme from '~/theme'
import {Card, Footer, SEO} from '.'

const Thread = props => {
  const threadWidth = 2
  return (
    <Card
      bg="thread"
      css={{
        height: '100vh',
        position: 'fixed',
        left: `calc(50% - ${threadWidth / 2}px)`,
        width: `${threadWidth}px`,
        zIndex: -1,
      }}
      {...props}
    />
  )
}

export const Page = ({keywords, title, ...props}) => (
  <>
    <SEO title={title} keywords={keywords} />
    <ThemeProvider theme={theme}>
      <Global styles={theme['global']} />
      <Thread />
      <main role="main" {...props} />
      <Footer />
    </ThemeProvider>
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  keywords: PropTypes.array,
  title: PropTypes.string.isRequired,
}
