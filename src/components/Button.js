import React from 'react'
import {Button as BaseButton} from '@rebass/emotion'
import {Text} from '.'

export const Button = ({children, ...props}) => (
  <BaseButton px={1} py={1} {...props}>
    <Text variant="titleSans" fontSize="sansSmall">{children}</Text>
  </BaseButton>
)
