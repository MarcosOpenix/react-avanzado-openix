'use client'
import { useUserStore } from '@/providers/user-store-provider';
import { Button, Card, CardBody, CardHeader, Divider } from '@nextui-org/react'
import { useRouter } from 'next/navigation';
import React, { useLayoutEffect, useState } from 'react'

interface Props {
    showBuyButton?: boolean,
}

const BuySummary = ({ showBuyButton }: Props) => {
    const { cart } = useUserStore(state => state);
    const [resumen, setResumen] = useState({ quantity: 0, price: 0 })
    const router = useRouter()

    useLayoutEffect(() => {
        getTotalQuantity()
    }, [cart])

    const getTotalQuantity = () => {
        let quantityProducts = { quantity: 0, price: 0 };
        cart.forEach(value => {
            quantityProducts.quantity = value.quantity + quantityProducts.quantity;
            quantityProducts.price = (value.product.price * value.quantity) + quantityProducts.price
        })
        setResumen(quantityProducts)
    }

    const handleContinue = () => {
        router.push('/home/buyProcess')
    }

    return (
        <Card className='p-[16px] h-[17.5rem]' shadow="sm" key={"5161"} >
            <CardHeader>
                <div className='font-bold'>Resumen de compra</div>
            </CardHeader>
            <Divider></Divider>
            <CardBody className="overflow-visible p-0 justify-between">
                <div>
                    <div>Productos ({resumen.quantity})</div>
                    <div className='font-bold'>Total: ${resumen.price}</div>
                </div>
                {
                    showBuyButton &&
                    <Button color='primary' onPress={handleContinue} >
                        Continuar Compra
                    </Button>
                }
            </CardBody>
        </Card>
    )
}

export default BuySummary