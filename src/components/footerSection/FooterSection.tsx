import React from 'react'
import { MdOutlineContactPhone } from "react-icons/md";
import { GrIndicator, GrPhone, GrMail } from "react-icons/gr";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { IconWithText } from '../commons/iconWithText/IconWithText';
import LinkWithIcon from '../commons/linkWithIcon/LinkWithIcon';

const FooterSection = () => {
    return (
        <div id='#contact' className='flex flex-col lg:flex-row flex-wrap w-full'>
            <div className='hidden flex-1 justify-center lg:flex' title='Contacto'>
                <MdOutlineContactPhone size={"6rem"} />
            </div>
            <div className='flex flex-col flex-1 items-center lg:items-start'>
                <h1 className='font-bold'>Contactame</h1>
                <IconWithText icon={<GrIndicator />} text='R. Goyeneche 51, Perico, Jujuy, Argentina' />
                <IconWithText icon={<GrPhone />} text='+549-3884222448' />
                <IconWithText icon={<GrMail />} text='marcos@openix.com.ar' />
            </div>
            <div className='flex flex-col flex-1 items-center lg:items-start'>
                <h1 className='font-bold'>Redes</h1>
                <div className='flex flex-row lg:flex-col space-y-1 items-center lg:items-start space-x-1 lg:space-x-0'>
                    <LinkWithIcon
                        url='https://www.facebook.com/?locale=es_LA'
                        text='Facebook'
                        icon={<FaFacebook size={'1.5rem'} />}
                    />
                    <LinkWithIcon
                        url='https://www.facebook.com/?locale=es_LA'
                        text='Twitter'
                        icon={<FaTwitter size={'1.5rem'} />}
                    />
                    <LinkWithIcon
                        url='https://www.facebook.com/?locale=es_LA'
                        text='Linkedin'
                        icon={<FaLinkedin size={'1.5rem'} />}
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterSection