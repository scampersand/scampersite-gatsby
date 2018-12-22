import React from 'react'
import {Flex, Box} from '@rebass/grid/emotion'

import vars from '../variables'
import Image from './Image'

const Logo = props => (
  // XXX 100px here is completely bogus but not sure how to get the aspect
  // we want without padding hacks.
  <div css={{height: '100px'}}>
    <Image
      style={{height: '100%'}}
      imgStyle={{
        height: '100%',
        width: '100%',
        objectFit: 'contain',
        objectPosition: 'center center',
        filter: 'grayscale(100%)',
      }}
      {...props}
    />
  </div>
)

const LogoGrid = ({images}) => {
  images = Object.keys(images)
    .sort()
    .map(k => images[k])
  return (
    <Flex
      alignItems="center"
      flexWrap="wrap"
      justifyContent="space-between"
      mx={'-' + vars.logoGutter}
    >
      {images.map(image => (
        <Box
          width={vars.logoColumns.map(n => 1 / n)}
          px={vars.logoGutter}
          py={vars.logoGutter}
          key={image.name}
        >
          <Logo image={image} />
        </Box>
      ))}
    </Flex>
  )
}

export default LogoGrid
