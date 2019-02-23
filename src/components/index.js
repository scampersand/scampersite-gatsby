import React from 'react'
import styled from '@emotion/styled'
import * as Rebass from '@rebass/emotion'
import {
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  variant,
} from 'styled-system'

export {Button} from './Button'
export {ContactForm} from './ContactForm'
export {Container} from './Container'
export {Fieldset, Input, Label} from './forms'
export {FlexGrid} from './FlexGrid'
export {Footer} from './Footer'
export {GatsbyImg} from './GatsbyImg'
export {Image} from './Image'
export {ImageGrid} from './ImageGrid'
export {InlineList} from './InlineList'
export {Landing} from './Landing'
export {LogoGrid} from './LogoGrid'
export {NamedLink} from './NamedLink'
export {Page} from './Page'
export {Project} from './Project'
export {SEO} from './SEO'
export {Section} from './Section'
export {SimpleImg} from './SimpleImg'
export {Slab} from './Slab'
export {Thread} from './Thread'
export {Box, Flex, Card} from '@rebass/emotion'

export const themed = key => props => props.theme[key]

const textStyles = variant({key: 'textStyles'})

export const Text = styled(Rebass.Box)(
  textStyles,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
)

Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...textAlign.propTypes,
  ...textStyles.propTypes,
}

export const P = styled(Text)()
P.defaultProps = {as: 'p'}
P.displayName = 'P'

export const Lede = props => (
  <Text as="p" fontSize="serifDisplay" lineHeight="1.125" mb="1em" {...props} />
)

export const H1 = props => (
  <Text as="h1" variant="titleSans" fontSize="sansSmall" mb="0.5em" {...props} />
)

export const H2 = props => (
  <Text as="h2" variant="titleSerif" fontSize="serifXlarge" mb="0.5em" {...props} />
)

export const H3 = props => (
  <Text as="h3" variant="titleSans" fontSize="sansXsmall" mb="0.5em" {...props} />
)

// Rebass.Link is based on Box instead of Text, whoops
// https://github.com/rebassjs/rebass/blob/master/src/index.js
export const Link = styled(Text)({textDecoration: 'none'})
Link.defaultProps = {
  as: 'a',
  color: 'link',
  fontWeight: 'bold',
}
Link.displayName = 'Link'
