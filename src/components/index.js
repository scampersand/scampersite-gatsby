import styled from '@emotion/styled'
import * as rebass from '@rebass/emotion'

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
export {Box, Flex, Text, Card} from '@rebass/emotion'

export const themed = key => props => props.theme[key]

export const P = styled(rebass.Text)()
P.defaultProps = {as: 'p'}
P.displayName = 'P'

export const Heading = styled(rebass.Text)({
  textTransform: 'uppercase',
  lineHeight: 1,
})
Heading.defaultProps = {
  fontFamily: 'title',
}
Heading.displayName = 'Heading'

export const H1 = styled(Heading)(themed('H1'))
H1.defaultProps = {
  as: 'h1',
  fontSize: 'small',
  mb: 1,
}
H1.displayName = 'H1'

export const H2 = styled(Heading)(themed('H2'))
H2.defaultProps = {
  as: 'h2',
  fontSize: 'large',
  textTransform: 'none',
  mb: 1,
}
H2.displayName = 'H2'

export const H3 = styled(Heading)(themed('H3'))
H3.defaultProps = {
  as: 'h3',
  fontSize: 'small',
  mb: 1,
}
H3.displayName = 'H3'

// rebass.Link is based on Box instead of Text, whoops
// https://github.com/rebassjs/rebass/blob/master/src/index.js
export const Link = styled(rebass.Text)(themed('Link'))
Link.defaultProps = {as: 'a'}
Link.displayName = 'Link'
