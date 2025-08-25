import { assets, workData } from '@/assets/assets';
import React from 'react'
import Image from 'next/image';

const Works = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>
            My portfolio</h4>
        <h2 className='text-center text-5xl font-ovo'>
            My works</h2>
        <p className='max-w-2xl mx-auto font-Ovo h-auto text-center mt-5 mb-12'>
            I am a DevSecOps Engineer with a passion for building secure and scalable applications.
        </p>

    <div className='grid grid-cols-2 gap-5'>
        {workData.map((project, index) => (
            <div key={index}
            className='flex flex:row aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
            style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 
                -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                    <div>
                        <h2 className='font-semibold'>{project.title}</h2>
                        <p className='text-sm text-gray-700'>{project.description} </p>
                    </div>
                    <div className='flex items-center justify-center border rounded-full border-red w-8 
                    aspect-square shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send' className='w-5' />
                    </div>
                </div>    
            </div>
        ))}
    </div>
    <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 broder-[1px] border-gray-700 rounded-full py-3 px-10 mx-auto 
    my-20 hover:bg-gray-700 hover:shadow-gray hover:shadow-lg duration-500'>
        Show More <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4' />
    </a>

    </div>
  )
}

export default Works
