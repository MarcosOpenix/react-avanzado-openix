'use client'
import { Button, Card, CardBody, CardHeader, Input, Radio, RadioGroup } from '@nextui-org/react'
import React, { ChangeEvent, ChangeEventHandler, useState } from 'react'

const initialData = {
    fullName: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "credit-card"

}

const PurchaseForm = () => {
    const [formData, setFormData] = useState(initialData)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleChangePaymentMethod = (value: string) => {
        setFormData({ ...formData, paymentMethod: value });
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <Card>
            <CardHeader>
                <div>Formulario de Compra</div>
            </CardHeader>
            <CardBody>
                <form className="container mx-auto p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <Input
                                fullWidth
                                variant='bordered'
                                label="Nombre y Apellido"
                                name='fullName'
                                placeholder="Ingresa tu nombre completo"
                                onChange={handleChange}
                                value={formData.fullName}
                            />
                        </div>
                        <div>
                            <Input
                                fullWidth
                                variant='bordered'
                                label="Correo"
                                name='email'
                                placeholder="Ingresa tu correo"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div>
                            <Input
                                fullWidth
                                variant='bordered'
                                label="Direccion"
                                name='address'
                                placeholder="Ingresa tu direccion"
                                onChange={handleChange}
                                value={formData.address}
                            />
                        </div>
                        <div>
                            <Input
                                fullWidth
                                variant='bordered'
                                label="Teléfono"
                                name='phone'
                                placeholder="Ingresa tu teléfono"
                                onChange={handleChange}
                                value={formData.phone}
                            />
                        </div>
                        <div>
                            <RadioGroup
                                label="Método de Pago"
                                value={formData.paymentMethod}
                                onValueChange={handleChangePaymentMethod}
                                orientation='horizontal'
                                name='paymentMethod'
                            >
                                <Radio value="credit-card">Tarjeta de Crédito/Débito</Radio>
                                <Radio value="rapiPago">RapiPago</Radio>
                            </RadioGroup>
                        </div>
                        <div className="sm:col-span-2 text-center">
                            <Button color='primary' onPress={handleSubmit}>Comprar</Button>
                        </div>
                    </div>
                </form>
            </CardBody>
        </Card>
    )
}

export default PurchaseForm