import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20' >
        <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-ovo'>
            About me</h2>
            
            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full mx-auto rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p>I am an experienced DevSevOps with over a decade of professional expertise in the field.
                    I have a strong background in software development, cloud computing, and security practices.
                    My journey in the tech industry has equipped me with a diverse skill set, enabling me to tackle complex challenges and deliver innovative solutions.
                    I am passionate about leveraging technology to drive efficiency and enhance security in software development processes.
                    </p>
                    <ul className="flex flex-row flex-wrap gap-6 justify-center items-center mt-8">
                      {infoList.map(({icon, iconDark, title, description}, index) => (
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                          w-40 h-40 flex flex-col items-center justify-center hover:bg-lime-100
                          hover:-translate-y-1 duration-500 hover:shadow-black hover:shadow-lg'
                          key={index}

                        >
                          <Image src={icon} alt={title} className="w-8 mb-2" />
                          <h3 className="my-2 font-semibold text-gray-700 text-center">{title}</h3>
                          <p className="text-gray-600 text-sm text-center">{description}</p>
                        </li>
                        ))}
                        </ul>

                        <h4 className='my-6 text-gray-700 font-Ovo'>Tools I use</h4>

                        <ul className='flex flex-row flex-wrap gap-4 sm:gap-5 justify-center items-center'>
                          {toolsData.map((tool,index) => (
                            <li  className='flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 aspect-sqaure
                            border border-gray-400 rounded-lg hover:bg-lime-50 cursor-pointer hover:-translate-y-1 duration-500
                            hover:shadow-black hover:shadow-lg'
                            key={index}> 
                                <Image src={tool} alt='tool' className='w-5 sm:w-7' />
                            </li>
                          ))}
                        </ul>
                </div>
            </div>
    </div>
  )
}

export default About
