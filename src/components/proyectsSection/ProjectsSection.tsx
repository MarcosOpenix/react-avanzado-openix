import { Avatar } from '@nextui-org/react'
import React from 'react'
import LabelWithText from '../commons/labelWithText/LabelWithText'
import SectionContainer from '../commons/SectionContainer'
import { projectsDataValues } from '@/utils/constants'
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
    return (
        <div className='m-5'>
            <SectionContainer title='Proyectos' id='projects'>
                <div className='flex flex-row flex-wrap gap-4 justify-center w-full'>
                    {
                        projectsDataValues.map((value, index) => (
                            <ProjectCard
                                key={uuidv4()}
                                name={value.projectName}
                                description={value.description}
                                technologies={value.technologies}
                                picture={value.picture}
                                url={value.urlRepository}
                            />
                        ))
                    }
                </div>

            </SectionContainer>
        </div>
    )
}

export default ProjectsSection