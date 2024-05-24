import { Button } from '@nextui-org/react'
import React from 'react'

interface Props {
    value: number;
    onChange: (number: number) => void;
}

const QuantitySelector = ({ value, onChange }: Props) => {

    return (
        <div className='border-solid border-1 rounded-lg overflow-hidden flex justify-between items-center min-w-[7rem]'>
            <Button color='primary' className='text-xl rounded-none min-w-[40px]' isDisabled={value <= 1} onPress={() => onChange(-1)}>-</Button>
            <span className='bg-transparent'>{value}</span>
            <Button color='primary' className='text-xl w-5 rounded-none min-w-[40px]' onPress={() => onChange(1)}>+</Button>
        </div>
    )
}

export default QuantitySelector