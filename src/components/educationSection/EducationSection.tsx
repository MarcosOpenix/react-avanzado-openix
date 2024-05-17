import { Divider } from '@nextui-org/react'
import React from 'react'
import LabelWithText from '../commons/labelWithText/LabelWithText'
import SectionContainer from '../commons/SectionContainer'
import { education, educationCertifications } from '@/utils/constants'
import { v4 as uuidv4 } from 'uuid';

const EducationSection = () => {
    return (
        <div className='m-5'>
            <SectionContainer title='Educación y Certificaciones' id='education'>

                <div className='flex flex-col m-8 sm:m-16 justify-between max-w-[875px] flex-1'>
                    <LabelWithText
                        key={uuidv4()}
                        label={"Educacion Academica"}
                        labelTop
                        light
                        value={<></>}
                    />
                    {
                        education.map((value, index) => (
                            <div key={uuidv4()}>
                                <LabelWithText
                                    key={uuidv4()}
                                    label={"Institucion: "}
                                    value={value.institution}
                                />
                                <LabelWithText
                                    key={uuidv4()}
                                    label={"titulo: "}
                                    value={value.title}
                                />
                                <LabelWithText
                                    key={uuidv4()}
                                    label={"Fecha de finalizacion: "}
                                    value={value.graduationDate ?? "En curso"}
                                />
                                <Divider />
                            </div>
                        ))
                    }
                </div>
                <div className='flex flex-col m-8 sm:m-16 justify-between max-w-[875px] flex-1'>
                    <LabelWithText
                        key={uuidv4()}
                        label={"Certificaciones"}
                        labelTop
                        value={<></>}
                    />

                    {
                        educationCertifications.map((value, index) => (
                            <div key={uuidv4()} className='p-4'>
                                <LabelWithText
                                    key={uuidv4()}
                                    label={value.title}
                                    labelTop
                                />
                                <LabelWithText
                                    key={uuidv4()}
                                    label={"Descripcion"}
                                    value={value.details}
                                />
                                <LabelWithText
                                    key={uuidv4()}
                                    label={"Institucion Emisora"}
                                    value={value.institution}
                                />
                                <Divider />
                            </div>
                        ))
                    }
                </div>

            </SectionContainer>
        </div>
    )
}

export default EducationSection