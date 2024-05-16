import React from 'react'
import LabelWithText from '../commons/labelWithText/LabelWithText'
import SectionContainer from '../commons/SectionContainer'
import { developerTech, workExperienceData } from '@/utils/constants'
import { v4 as uuidv4 } from 'uuid';
import { Card, CardFooter, CardHeader } from '@nextui-org/react';
import TechnologyCard from './TechnologyCard';

const SkillTechSection = () => {
    return (
        <div className='m-5'>
            <LabelWithText labelTop label='Experiencia con tecnologias'/>
            <div className='flex flex-row overflow-x-auto space-x-4 overflow-hidden'>
                {
                    developerTech.map(value => 
                        <TechnologyCard key={uuidv4()} name={value.name} logo={`../technologiesIcons/${value.name}.svg`}/>
                    )
                }
            </div>
        </div>
    )
}

export default SkillTechSection