import React from 'react'

interface Props {
    value: number;
}

const SelledText = ({value}: Props) => {
  return (
    <div className='text-xs text-gray-500'>{value > 100 ? "+100" : value} vendidos</div>
  )
}

export default SelledText