import { Card, CardFooter, Image } from '@nextui-org/react'
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
            className="border-none bg-background/10 w-48 h-48"
        >
            <Image
                alt={name}
                className="object-cover"
                height={200}
                src={logo}
                width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny text-white/80">Available soon.</p>
            </CardFooter>
        </Card>
    )
}

export default TechnologyCard