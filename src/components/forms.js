import React from 'react'
import {Box, Text} from '.'

export const Fieldset = props => <Box as="fieldset" {...props} />

export const Input = props => <Text as="input" {...props} />

export const Label = props => <Text as="label" {...props} css={[{display: 'block'}, props.css]} />
