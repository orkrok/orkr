import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center py-10 bg-gray-100'>
            <Image src={assets.logo} alt="logo" className='w-28 mx-auto mb-2' />

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='github' className='w-6 cursor-pointer' />
                orkr@mail.com
            </div>
        </div>

     <div className='w-full flex flex-col text-center items-center justify-between gap-4 py-10 bg-gray-200 text-gray-700'>
        <p>2025 orkr. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target ='_blank' href="https://instagram.com/orkr">Github</a></li>
            <li><a target ='_blank' href="https://instagram.com/orkr">LinkedIn</a></li>
        </ul>
        </div>   
    </div>
  )
}

export default Footer
