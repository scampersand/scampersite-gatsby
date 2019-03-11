import React from 'react'
import PropTypes from 'prop-types'
import {Global} from '@emotion/core'
import {ThemeProvider} from 'emotion-theming'
import theme from '~/theme'
import {Box, Card, Flex, Footer, SEO} from '.'

export const AbsoluteReserved = props => (
  <>
    <Box
      ariaHidden="true"
      {...props}
      css={{visibility: 'hidden', ...props.css}}
    />
    <Box position="absolute" {...props} />
  </>
)

export const Bottom = props => (
  <AbsoluteReserved bottom="0" left="0" width="100%" {...props} />
)

export const Page = ({keywords, title, ...props}) => (
  <>
    <SEO title={title} keywords={keywords} />
    <ThemeProvider theme={theme}>
      <Global styles={theme['global']} />
      <Flex
        flexDirection="column"
        minHeight="100vh"
        position="relative"
        overflow={'hidden auto' /* for appsembler image */}
      >
        <Card as="main" role="main" flex="1" {...props} />
        <Bottom>
          <Footer />
        </Bottom>
      </Flex>
    </ThemeProvider>
  </>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  keywords: PropTypes.array,
  title: PropTypes.string,
}
