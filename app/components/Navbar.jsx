'use client'
import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(0)';
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <div className="fixed top-0 right-10 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="header background" className="w-full" />
      </div> */}

      <nav
        className={`w-full fixed px-4 py-4 lg:px-8 xl:px-[8%] flex items-center justify-between z-50
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}
      >
        <a href="#top">
          <Image src={assets.logo_dark} alt="name" className="w-28 cursor-pointer mr-14" />
        </a>

        <ul
          className={`hidden min-[795px]:flex items-center gap-8 lg:gap-8 rounded-full px-12 py-3 
          ${isScroll ? "" : "bg-white shadow-sm backdrop-blur-lg bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}
        >
          <li><a className="font-ovo" href="#top">Home</a></li>
          <li><a className="font-ovo" href="#about">About Me</a></li>
          <li><a className="font-ovo" href="#services">Services</a></li>
          <li><a className="font-ovo" href="#work">My Work</a></li>
          <li><a className="font-ovo" href="#contact">Contact Me</a></li>
        </ul>

        <div className="flex items-center gap-4 lg:gap-6">
          <button onClick={() => setIsDarkMode(prev=>!prev)} className="hidden md:block">
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="dark_mode" className="w-8 cursor-pointer"/>
          </button>

          <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4
          font-ovo dark:border-white/50 dark:text-white hover:bg-gray-800">
            Contact
            <Image src={assets.arrow_icon} alt="arrow" className="w-3"/>
          </a>

          <button className="block md:hidden ml-3 cursor-pointer" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu" className="w-6"/>
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          ref={sideMenuRef}
          style={{ transform: 'translateX(16rem)' }}
          className="absolute flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0
          w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkhover dark:text-white"
        >
          <div className="absolute top-5 right-5" onClick={closeMenu}>
            <Image src={assets.close_black} alt="X-bar" className="w-5 cursor-pointer mb-2" />
          </div>

          <li><a className="font-ovo" onClick={closeMenu} href="#top">Home</a></li>
          <li><a className="font-ovo" onClick={closeMenu} href="#about">About Me</a></li>
          <li><a className="font-ovo" onClick={closeMenu} href="#services">Services</a></li>
          <li><a className="font-ovo" onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className="font-ovo" onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
