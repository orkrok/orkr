import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Services = () => {
  return (
    <div id='services' className='w-full px-[12%] py-10 scroll-mt-20' >
        <h4 className='text-center mb-2 text-lg font-ovo'>
            What I offer</h4>
        <h2 className='text-center text-5xl font-ovo'>
            Services</h2>
        <p className='max-w-2xl mx-auto font-Ovo h-auto text-center mt-5 mb-12'>
            I am a DevSecOps Engineer with a passion for building secure and scalable applications.
        </p>

            <div className='grid grid-cols-4 gap-8'>
                {serviceData.map(({icon, title, description,link}, index) => (
                    <div key={index}
                    className='border border-gray-300 rounded-lg p-6 flex flex-col items-center 
                    hover:translate-y-2 duration-500 hover:shadow-black cursor-pointer hover:shadow-lg'>
                        <Image src={icon} alt={title} className='w-10'/>
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm text-blue-500 mt-4 hover:underline'>
                            Read More <Image src={assets.right_arrow} alt='arrow' className='w-4'/>
                            </a>

                    </div>
                ))}

            </div>
    </div>
  )
}

export default Services
