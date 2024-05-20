import React from 'react'
import SectionContainer from '../commons/SectionContainer'
import ContactForm from '../forms/contactForm/ContactForm'
import Image from 'next/image'

const ContactSection = () => {
  return (
    <SectionContainer id='contact' title='Formulario de Contacto' light>
      <div className='flex flex-col xl:flex-row items-center xl:items-start'>
        <Image alt='Contact Form' width={400} height={400} src={'https://experium-group.com/wp-content/uploads/2021/03/contact.svg'} />
        <ContactForm />
      </div>
    </SectionContainer>
  )
}

export default ContactSection