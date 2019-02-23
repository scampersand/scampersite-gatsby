import React from 'react'
import {Button as BaseButton} from '@rebass/emotion'
import {Text} from '.'

export const Button = ({children, ...props}) => (
  <BaseButton px={0} py={0} bg="button" {...props}>
    <Text
      variant="titleSans"
      fontSize="sansSmall"
      px="2.5em"
      py="1.25em"
      children={children}
    />
  </BaseButton>
)
