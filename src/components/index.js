import React from 'react'
import styled from '@emotion/styled'
import {
  space,
  color,
  width,
  height,
  minWidth,
  minHeight,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
} from 'styled-system'

const themed = key => props => props.theme[key]

export const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  width,
  height,
  minWidth,
  minHeight,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  themed('Box'),
)
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...minWidth.propTypes,
  ...minHeight.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
}

export const Flex = styled(Box)(
  {
    display: 'flex',
  },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('Flex'),
)
Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes,
}

const textStyles = variant({key: 'textStyles'})
export const Text = styled(Box)(
  textStyles,
  fontFamily,
  fontWeight,
  fontStyle,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('Text'),
)
Text.propTypes = {
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...fontStyle.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
  ...textStyles.propTypes,
}

export const Link = styled(Text)({textDecoration: 'none'})
Link.defaultProps = {
  as: 'a',
  color: 'link',
  fontWeight: 'bold',
}

export const Button = styled(Box)(
  {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  fontWeight,
  fontStyle,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  themed('Button'),
)
Button.propTypes = {
  ...fontWeight.propTypes,
  ...fontStyle.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...buttonStyle.propTypes,
}
Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  p: 0,
  color: 'white',
  bg: 'button',
  border: 0,
  borderRadius: 4,
}

export const ButtonText = styled(Text)()
ButtonText.defaultProps = {
  variant: 'titleSans',
  fontSize: 'sansSmall',
  px: '2.5em',
  py: '1.25em',
}

const cards = variant({key: 'cards'})
export const Card = styled(Box)(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  cards,
  themed('Card'),
)
Card.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...opacity.propTypes,
  ...cards.propTypes,
}

export const P = styled(Text)()
P.defaultProps = {as: 'p'}
P.displayName = 'P'

export const Lede = props => (
  <Text as="p" fontSize="serifDisplay" lineHeight="1.125" mb="1em" {...props} />
)

export const H1 = props => (
  <Text
    as="h1"
    variant="titleSans"
    fontSize="sansSmall"
    mb="0.5em"
    {...props}
  />
)

export const H2 = props => (
  <Text
    as="h2"
    variant="titleSerif"
    fontSize="serifXlarge"
    mb="0.5em"
    {...props}
  />
)

export const H3 = props => (
  <Text
    as="h3"
    variant="titleSans"
    fontSize="sansXsmall"
    mb="0.5em"
    {...props}
  />
)

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
