import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const header = () => {
  return (
    <div className='pt-24 h-screen'>
      <div className='w-11/12 max-w-3xl h-auto mx-auto flex flex-col gap-4 text-center justify-center items-center'>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
        <h3 className='w-full flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo text-center justify-center'>
            Hi I am orkr <Image src={assets.hand_icon} alt='' className='w-6'/></h3>
      </div>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo text-center'>
        DevSecOps
        <br></br> 
        based in Chicago</h1>
        <br></br>
        <p className='max-w-2xl mx-auto font-ovo h-auto'>
        I am a DevSecOps Engineer with a passion for building secure and scalable applications.
        <br></br>
        I specialize in integrating security practices into the software development lifecycle, 
        ensuring that applications are not only functional but also secure from the ground up.
        </p>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 h-auto'>
            <a href="#contact"
            className='px-8 py-2.5 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
            <a href="/sample-resume.pdf" download 
            className='px-8 py-2 border rounded-full border-gray-500 flex items-center gap-2'>
                My RESUME <Image src={assets.download_icon} alt='' className='w-4' /></a>
        </div>

    </div>

  )
}

export default header
