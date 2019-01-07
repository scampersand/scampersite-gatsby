import React from 'react'
import Img from 'gatsby-image'
import {Box} from '.'

export const GatsbyImg = props => <Box as={Img} {...props} />

GatsbyImg.displayName = GatsbyImg
