import React from 'react'
import LabelWithText from '../commons/labelWithText/LabelWithText'
import SectionContainer from '../commons/SectionContainer'
import { workExperienceData } from '@/utils/constants'
import { v4 as uuidv4 } from 'uuid';

const WorkExperienceSection = () => {
    return (
        <div className='m-5'>
            <SectionContainer title='Experiencia Laboral' id='workExperience' light>
                <>
                    <div className='flex flex-col m-8 sm:m-16 justify-between max-w-[875px]'>
                        {
                            workExperienceData.map((value) => (
                                <div key={uuidv4()} className='mb-4'>
                                    <LabelWithText
                                        key={uuidv4()}
                                        label={`${value.client} ${value.startDate} - ${value.finishDate}`}
                                        labelTop
                                        light
                                    />
                                    <LabelWithText
                                        key={uuidv4()}
                                        label={value.jobPosition}
                                        value={value.description}
                                        light
                                    />
                                </div>
                            ))
                        }
                    </div>
                </>
            </SectionContainer>
        </div>
    )
}

export default WorkExperienceSection