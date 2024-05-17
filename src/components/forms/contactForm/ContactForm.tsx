import { Input } from '@nextui-org/react'
import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex flex-col p-5'>
      <div>
        <Input
          type="email"
          label="Email"
          labelPlacement={'outside'}
          className='group-'
          placeholder="Enter your email"
          description={'outside'}
          classNames={{
            label: 'text-white'
          }}
        />
      </div>
    </div>
  )
}

export default ContactForm