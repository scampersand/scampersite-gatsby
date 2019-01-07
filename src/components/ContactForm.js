import React from 'react'
import {Box, Button, Input, Label} from '.'

const InputContact = ({label, ...props}) => {
  return (
    <Box mt={1}>
      <Label htmlFor={props.name}>{label}</Label>
      <Input id={props.name} {...props} width={['100%', '70%']} />
    </Box>
  )
}

export const ContactForm = () => (
  <form action="https://formspree.io/hello@scampersand.com" method="POST">
    <InputContact label="Name" type="text" name="name" required />
    <InputContact label="Email" type="email" name="_replyto" required />
    <InputContact label="Message" as="textarea" name="body" rows="5" required />
    <input type="hidden" name="_subject" value="Hello!" />
    <input type="hidden" name="_next" value="https://scampersand.com/thanks" />
    <input type="test" name="_gotcha" css={{display: 'none'}} />
    <Button type="submit">Send</Button>
  </form>
)
