import React from 'react'

const Input = ({as, label, ...props}) => {
  const ElementType = as || 'input'
  return (
    <fieldset>
      {label && <label>{label}</label>}
      <ElementType {...props} />
    </fieldset>
  )
}

const Hidden = props => (
  <input type="hidden" {...props} />
)

const Gotcha = () => (
  <input type="test" name="_gotcha" css={{display: 'none'}} />
)

const Submit = props => (
  <input type="submit" {...props} />
)

export const ContactForm = () => (
  <form action="https://formspree.io/hello@scampersand.com" method="POST">
    <Input label="Name" type="text" name="name" required />
    <Input label="Email" type="email" name="_replyto" required />
    <Input label="Message" as="textarea" name="body" rows="5" required />
    <Hidden name="_subject" value="Hello!" />
    <Hidden name="_next" value="https://scampersand.com/thanks" />
    <Gotcha />
    <Submit value="Send" />
  </form>
)

export default ContactForm
