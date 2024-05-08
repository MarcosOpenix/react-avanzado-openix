import React from 'react'

interface Props {
    label: string;
    value: string;
}

const FieldDetails = ({ label, value }: Props) => {
    return (
        <div className='flex flex-column justify-between w-full'>
            <p>{`${label}: `}</p>
            <p>{value ?? ""}</p>
        </div>
    )
}

export default FieldDetails