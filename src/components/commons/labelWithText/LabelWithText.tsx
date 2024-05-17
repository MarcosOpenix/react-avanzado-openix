import React, { ReactNode } from 'react'

interface Props {
    label: string;
    value?: string | ReactNode;
    labelTop?: boolean;
    light?: boolean;
}

const LabelWithText = ({ label, value, labelTop, light }: Props) => {
    return (
        <div className='text-2xl text-white' style={{ textAlign: labelTop ? 'center' : undefined }}>
            <span className={`${light ? 'text-orange-600' : 'text-black'} font-bold`}>{label}</span>
            {
                !labelTop && <span className='text-xl'>{`: ${value ?? ""}`}</span>
            }
            {labelTop && <p className='text-left text-xl'>{value ?? ""}</p>}
        </div>
    )
}

export default LabelWithText