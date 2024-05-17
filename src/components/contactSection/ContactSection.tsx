import React from 'react'
import SectionContainer from '../commons/SectionContainer'
import ContactForm from '../forms/contactForm/ContactForm'

const ContactSection = () => {
  return (
    <SectionContainer id='contact' title='Formulario de Contacto' light>
      <ContactForm/>
    </SectionContainer>
  )
}

export default ContactSection