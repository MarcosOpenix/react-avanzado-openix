'use client'
import React, { useEffect, useState } from 'react'
import { useBusContext } from '@/hooks/useBusContext';
import { VehicleResponse } from '@/interfaces/busManager';
import FieldDetails from './FieldDetails';
import CheckPointsVehicleTable from './CheckPointsVehicleTable';

const VehicleDetails = () => {
    const { state } = useBusContext();
    const [vehicleDetails, setVehicleDetails] = useState<VehicleResponse>();

    useEffect(() => {
        getVehicleDetails()

    }, [state.selectedVehicle])

    const getVehicleDetails = () => {
        const aux = state.vehicles.find(value => value.dominio === state.selectedVehicle);
        setVehicleDetails(aux);
    }

    return (
        <div className='flex flex-col w-full space-y-5'>
            <h1 className='w-full text-center text-xl'>Detalles del Vehiculo</h1>
            <FieldDetails label='Dominio' value={vehicleDetails?.dominio ?? ""} />
            <FieldDetails label='Marca' value={vehicleDetails?.marca ?? ""} />
            <FieldDetails label='Modelo' value={vehicleDetails?.modelo ?? ""} />
            <FieldDetails label='Motor' value={vehicleDetails?.motor ?? ""} />
            <FieldDetails label='Chasis' value={vehicleDetails?.chasis ?? ""} />
            <CheckPointsVehicleTable/>
        </div>
    )
}

export default VehicleDetails