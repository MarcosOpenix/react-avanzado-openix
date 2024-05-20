import { Card, CardFooter } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'

interface Props {
    name: string;
    logo: string;
}

const TechnologyCard = ({name, logo}: Props) => {
    return (
        <Card
            isFooterBlurred
            radius="lg"
            className="border-none bg-background/10 w-[100px] h-[100px] hover:scale-105"
        >
            <Image
                alt={name}
                className="object-cover p-4"
                height={150}
                src={logo}
                width={150}
            />
            <CardFooter className="justify-center border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">{name}</p>
            </CardFooter>
        </Card>
    )
}

export default TechnologyCard