import _ from 'lodash'
import React from 'react'
import {Flex, Box} from '@rebass/grid/emotion'

import Image from './Image'

const LogoGrid = ({images}) => (
  <Flex
    alignItems="center"
    flexWrap="wrap"
    justifyContent="space-between"
    mx="-11px"
  >
    {_(images)
      .values()
      .map(image => (
        <Box width={1 / 2} px="11px">
          <Image image={image} key={image.name} />
        </Box>
      ))
      .value()}
  </Flex>
)

export default LogoGrid
