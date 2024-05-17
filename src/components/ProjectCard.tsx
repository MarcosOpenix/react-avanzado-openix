import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

interface Props {
    name: string
    description: string;
    technologies: string;
    picture: string;
    url: string
}

const ProjectCard = ({ name, description, picture, url, technologies }: Props) => {

    function abrir() {
        window.open(url, "_blank");
    }
    return (
        <Card isBlurred className="py-4 bg-background/10 bg-black  max-w-full lg:max-w-[274px] lg:min-w-[274px]">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-large text-orange-600">{name}</h4>
                <p className="text-tiny uppercase font-bold text-white">{description}</p>
                <small className="text-gray-400">{technologies}</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Card isFooterBlurred >
                    <Image
                        removeWrapper
                        alt="Card example background"
                        className="z-0 w-full h-full scale-100 -translate-y-0 object-cover"
                        src={picture}
                    />
                    <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                        <Button className="text-tiny bg-orange-600" color="primary" radius="full" size="sm" onPress={abrir}>
                            Ir al Repositorio
                        </Button>
                    </CardFooter>
                </Card>
            </CardBody>
        </Card>
    )
}

export default ProjectCard