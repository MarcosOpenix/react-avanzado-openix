'use client'

import { EyeFilledIcon } from '@/components/icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '@/components/icons/EyeSlashFilledIcon'
import { Input, InputProps } from '@nextui-org/react'
import React, { ChangeEvent, ChangeEventHandler, ReactNode, useState } from 'react'

interface Props {
    isPassoword?: boolean;
    icon?: ReactNode;
    label?: string;
    placeholder?: string;
    value?: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

const OpxInput = ({ isPassoword, icon, label, placeholder, value, onChange }: Props) => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            label={label}
            placeholder={placeholder}
            value={value}
            endContent={
                isPassoword ?
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                        {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button> :
                    icon && icon
            }
            type={isVisible ? "text" : "password"}
            className="max-w-xs"
            onChange={onChange}
        />
    )
}

export default OpxInput