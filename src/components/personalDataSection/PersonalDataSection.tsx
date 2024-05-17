import { Avatar } from '@nextui-org/react'
import React from 'react'
import LabelWithText from '../commons/labelWithText/LabelWithText'
import SectionContainer from '../commons/SectionContainer'
import { personalDataValues } from '@/utils/constants'

const PersonalDataSection = () => {
    return (
        <div className='m-0 lg:m-5'>
            <SectionContainer title='Sobre Mi' id='aboutMe' light>
                <>
                    <Avatar
                        isBordered
                        color="default"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        className='w-[250px] h-[250px] m-8 lg:m-16 min-w-[250px] min-h-[250px]'
                    />
                    <div className='flex flex-col m-8 sm:m-16 justify-between max-w-[875px]'>
                        <LabelWithText light label='Nombre y Apellido' value={personalDataValues.fullName} />
                        <LabelWithText light label='Profesion' value={personalDataValues.profession} />
                        <LabelWithText light labelTop label='Biografia' value={personalDataValues.biography} />
                        <LabelWithText light label='Habilidades' value={personalDataValues.skills.map(value => value)}/>
                    </div>
                </>
            </SectionContainer>
        </div>
    )
}

export default PersonalDataSection