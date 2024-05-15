import React, { ReactNode } from 'react'
import { motion } from "framer-motion"

interface Props {
    title: string;
    children: ReactNode;
    id?: string;
}

const SectionContainer = ({ title, children, id }: Props) => {
    return (
        <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
        >
            <div className='m-5'>
                <h1 className='text-center text-2xl' id={id}>{title}</h1>
                <div className='flex flex-col lg:flex-row border-solid border-orange-600 border-8 rounded-3xl  items-center lg:items-start'>
                    {children}
                </div>
            </div>
        </motion.div>
    )
}

export default SectionContainer