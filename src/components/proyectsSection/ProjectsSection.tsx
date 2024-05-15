import { Avatar } from '@nextui-org/react'
import React from 'react'
import LabelWithText from '../commons/labelWithText/LabelWithText'
import SectionContainer from '../commons/SectionContainer'
import { projectsDataValues } from '@/utils/constants'
import { v4 as uuidv4 } from 'uuid';
import ProjectCard from '../ProjectCard'

const ProjectsSection = () => {
    return (
        <div className='m-5'>
            <SectionContainer title='Proyectos' id='projects'>

                <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 lg:flex-wrap'>
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