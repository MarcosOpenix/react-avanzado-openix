import BuySummary from '@/components/buySummary/BuySummary'
import PurchaseForm from '@/components/forms/PurchaseForm'
import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react'
import React from 'react'



const buyProcessPage = () => {
    return (
        <div className='container grid grid-flow-col gap-4'>
            <div>
                <PurchaseForm/>
            </div>
            <div><BuySummary /></div>
        </div>
    )
}

export default buyProcessPage