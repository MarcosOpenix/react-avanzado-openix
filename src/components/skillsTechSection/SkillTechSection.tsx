import React from 'react'
import LabelWithText from '../commons/labelWithText/LabelWithText'
import { categoryTech, developerHabilities, developerTech } from '@/utils/constants'
import { v4 as uuidv4 } from 'uuid';
import TechnologyCard from './TechnologyCard';
import { Chip } from '@nextui-org/react';

const SkillTechSection = () => {
    return (
        <div className='m-5'>
            <LabelWithText labelTop label='Habilidades' light />
            <div className='flex flex-row gap-4 flex-wrap justify-center mt-4 mb-4'>
                {
                    developerHabilities.map(value =>
                        <Chip key={uuidv4()} className='bg-orange-600 shadow-amber-600 text-xl p-7 text-white' variant="shadow">{value}</Chip>
                    )
                }
            </div>
            <LabelWithText labelTop label='Experiencia con tecnologias' light />
            <div className='flex flex-row gap-4 flex-wrap justify-center mt-4 mb-4'>
                {
                    categoryTech.map(category => (
                        <div key={uuidv4()} className='flex flex-1 flex-col'>
                            <div className='text-white text-center'>{category.name}</div>
                            <div className='flex flex-row gap-4 flex-wrap justify-center mt-4 mb-4'>
                                {
                                    developerTech.filter(tech => tech.categoryId === category.id).map(card => (
                                        <TechnologyCard key={uuidv4()} name={card.name} logo={`../technologiesIcons/${card.name}.svg`} />
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SkillTechSection