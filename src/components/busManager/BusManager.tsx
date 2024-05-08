'use client'
import { Card, CardBody, CardHeader, Tab, Tabs } from '@nextui-org/react';
import React from 'react'
import VehiclesTable from './VehiclesTable';

const BusManager = () => {
  
  return (
    <div>
        <Tabs color='primary' aria-label="Options" isVertical={true}>
          <Tab key="Vehicles" title="Vehiculos">
            <Card>
              <CardHeader>
                Vehiculos
              </CardHeader>
              <CardBody>
                <VehiclesTable/>
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>
    </div>
  )
}

export default BusManager