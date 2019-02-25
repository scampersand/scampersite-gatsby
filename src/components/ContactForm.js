import React from 'react'
import {Box, Button, ButtonText, FlexGrid, Input, Label} from '.'

const InputContact = ({label, ...props}) => {
  return (
    <Box mt="0.5rem">
      <Label htmlFor={props.name} mb="0.5em">
        {label}
      </Label>
      <Input id={props.name} {...props} width="100%" />
    </Box>
  )
}

export const ContactForm = () => (
  <form action="https://formspree.io/hello@scampersand.com" method="POST">
    <FlexGrid columns={{phone: 1, ipadl: 2}} gutter="20px">
      <InputContact label="Name" type="text" name="name" required />
      <InputContact label="Email" type="email" name="_replyto" required />
      <FlexGrid.Col span={{phone: 1, ipadl: 2}}>
        <InputContact
          label="Message"
          as="textarea"
          name="body"
          rows="5"
          required
        />
      </FlexGrid.Col>
      <FlexGrid.Col span={{phone: 1, ipadl: 2}}>
        <Button type="submit">
          <ButtonText>Send</ButtonText>
        </Button>
      </FlexGrid.Col>
    </FlexGrid>
    <input type="hidden" name="_subject" value="Hello!" />
    <input type="hidden" name="_next" value="https://scampersand.com/thanks" />
    <input type="test" name="_gotcha" css={{display: 'none'}} />
  </form>
)
