import React, { ReactNode } from 'react'

interface Props {
    text?: string;
    icon: ReactNode;
}

export const IconWithText = ({text, icon}:Props) => {
    return (
        <div className='flex items-center space-x-1'>
            {icon}
            { text && <span>{text}</span>}
        </div>
    )
}
