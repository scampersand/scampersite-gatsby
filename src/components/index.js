import styled from '@emotion/styled'
import * as rebass from '@rebass/emotion'

export {Button} from './Button'
export {ContactForm} from './ContactForm'
export {Container} from './Container'
export {Fieldset, Input, Label} from './forms'
export {FlexGrid} from './FlexGrid'
export {GatsbyImg} from './GatsbyImg'
export {Image} from './Image'
export {ImageGrid} from './ImageGrid'
export {InlineList} from './InlineList'
export {LogoGrid} from './LogoGrid'
export {NamedLink} from './NamedLink'
export {Page} from './Page'
export {Project} from './Project'
export {SEO} from './SEO'
export {Section} from './Section'
export {SimpleImg} from './SimpleImg'
export {Box, Flex, Text, Heading, Card} from '@rebass/emotion'

const themed = key => props => props.theme[key]

export const H1 = styled(rebass.Heading)(themed('H1'))
H1.defaultProps = {as: 'h1'}
H1.displayName = 'H1'

export const H2 = styled(rebass.Heading)(themed('H2'))
H2.defaultProps = {as: 'h2'}
H2.displayName = 'H2'

export const H3 = styled(rebass.Heading)(themed('H3'))
H3.defaultProps = {as: 'h3'}
H3.displayName = 'H3'

// rebass.Link is based on Box instead of Text, whoops
// https://github.com/rebassjs/rebass/blob/master/src/index.js
export const Link = styled(rebass.Text)
Link.defaultProps = {as: 'a'}
