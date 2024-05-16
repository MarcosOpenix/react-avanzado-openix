import React, { ReactNode } from 'react'

interface Props {
    label: string;
    value?: string | ReactNode;
    labelTop?: boolean
}

const LabelWithText = ({ label, value, labelTop }: Props) => {
    return (
        <div className='text-2xl' style={{ textAlign: labelTop ? 'center' : undefined }}>
            <span className='text-orange-600 font-bold'>{label}</span>
            {
                !labelTop && <span className='text-xl'>{`: ${value ?? ""}`}</span>
            }
            {labelTop && <p className='text-left text-xl'>{value ?? ""}</p>}
        </div>
    )
}

export default LabelWithText