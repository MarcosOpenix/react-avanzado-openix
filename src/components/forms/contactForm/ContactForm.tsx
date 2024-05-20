import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex flex-col p-5 gap-4 w-full'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <Input
          type="text"
          label="Nombre y Apellido"
          labelPlacement={'outside'}
          className='flex-1 w-full lg:w-min-[241px]'
          placeholder="Ingrese nombre y apellido"
        />
        <Input
          type="email"
          label="Email"
          labelPlacement={'outside'}
          className='flex-1 w-full lg:w-min-[241px]'
          placeholder="Ingrese Correo electronico"
        />
      </div>
      <div className='flex flex-col lg:flex-row gap-4'>
        <Input
          type="number"
          label="Telefono"
          labelPlacement={'outside'}
          className='flex-1 w-full lg:w-min-[241px]'
          placeholder="Ingrese numero de telefono"
        />
        <Input
          type="text"
          label="Pais"
          className='flex-1 w-full lg:w-min-[241px]'
          labelPlacement={'outside'}
          placeholder="Ingres pais"
        />
      </div>
      <div className='flex flex-col lg:flex-row gap-4'>
        <Textarea
          type="text"
          label="Mensaje"
          multiple
          fullWidth
          labelPlacement={'outside'}
          placeholder="Ingrese Mensaje"
        />
      </div>
      <div className='flex flex-col justify-center lg:justify-end lg:flex-row gap-4'>
        <Button>Enviar</Button>
      </div>
    </div>
  )
}

export default ContactForm