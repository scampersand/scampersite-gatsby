import _ from 'lodash'
import React from 'react'
import {Flex, Box} from '@rebass/grid/emotion'

import vars from '../variables'
import Image from './Image'

const LogoGrid = ({images}) => (
  <Flex
    alignItems="center"
    flexWrap="wrap"
    justifyContent="space-between"
    mx={'-' + vars.logoGutter}
  >
    {_(images)
      .values()
      .map(image => (
        <Box
          width={vars.logoColumns.map(n => 1 / n)}
          px={vars.logoGutter}
          key={image.name}
        >
          <Image image={image} />
        </Box>
      ))
      .value()}
  </Flex>
)

export default LogoGrid
