import React, { ReactNode } from 'react'
import Link from 'next/link';

interface Props {
    text?: string;
    url: string;
    icon?: ReactNode;
}

const LinkWithIcon = ({ text, url, icon }: Props) => {
    return (
        <Link
            href={url}
            target="_blank"
            className='flex items-center space-x-1 w-fit'
        >
            {icon}
           { text && <span>{text}</span>}
        </Link>
    )
}

export default LinkWithIcon