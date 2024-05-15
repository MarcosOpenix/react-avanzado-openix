import React from 'react'
import LabelWithText from '../commons/labelWithText/LabelWithText'
import SectionContainer from '../commons/SectionContainer'
import { workExperienceData } from '@/utils/constants'
import { v4 as uuidv4 } from 'uuid';

const WorkExperienceSection = () => {
    return (
        <div className='m-5'>
            <SectionContainer title='Experiencia Laboral' id='workExperience'>
                <>
                    <div className='flex flex-col m-8 sm:m-16 justify-between max-w-[875px]'>
                        {
                            workExperienceData.map((value) => (
                                <div key={uuidv4()}>
                                    <LabelWithText
                                        key={uuidv4()}
                                        label={value.client}
                                        labelTop
                                        value={<></>}
                                    />
                                    <LabelWithText
                                        key={uuidv4()}
                                        label={value.jobPosition}
                                        value={value.description}
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