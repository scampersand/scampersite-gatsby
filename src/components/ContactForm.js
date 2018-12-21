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

const ContactForm = () => (
  <form action="https://formspree.io/hello@scampersand.com" method="POST">
    <Input type="hidden" name="_subject" value="Hello!" />
    <Input type="hidden" name="_next" value="https://scampersand.com/thanks" />
    <Input label="Name" type="text" name="name" required />
    <Input label="Email" type="email" name="_replyto" required />
    <Input label="Message" as="textarea" name="body" rows="5" required />
    <Input type="text" name="_gotcha" style={{display: 'none'}} />
    <Input type="submit" value="Send" />
  </form>
)

export default ContactForm
