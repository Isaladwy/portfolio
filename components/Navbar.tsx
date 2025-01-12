'use client';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  // using a ref to target the side menu without re-rendering the component
  const sideMenuRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);

  const openSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };
  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header_bg"
          className="w-full"
        />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex justify-between items-center z-50 bg-white bg-opacity-50 backdrop-blur-lg shadow-sm ${
          isScroll ? '' : ''
        }`}
      >
        <Link href="#top">
          <Image
            src={assets.logo}
            className="w-32 cursor-pointer mr-4"
            alt="logo"
          />
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 ${
            isScroll ? '' : 'bg-white bg-opacity-50 shadow-sm rounded-full'
          } `}
        >
          <li>
            <Link className="font-ovo" href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#about">
              About me
            </Link>
          </li>
          {/* <li>
            <Link className="font-ovo" href="#services">
              Services
            </Link>
          </li> */}
          <li>
            <Link className="font-ovo" href="#work">
              My Work
            </Link>
          </li>
          <li>
            <Link className="font-ovo" href="#contact">
              Contact me
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="" className="w-6" />
          </button>
          <Link
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact <Image src={assets.arrow_icon} alt="icon" className="w-3" />
          </Link>
          <button className="block md:hidden ml-3" onClick={openSideMenu}>
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className={`md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 bg-gray-50 transition duration-500 h-screen`}
        >
          <div className="absolute top-8 right-5" onClick={closeSideMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <Link className="font-ovo" onClick={closeSideMenu} href="#top">
              Home
            </Link>
          </li>
          <li>
            <Link className="font-ovo" onClick={closeSideMenu} href="#about">
              About me
            </Link>
          </li>
          {/* <li>
            <Link className="font-ovo" onClick={closeSideMenu} href="#services">
              Services
            </Link>
          </li> */}
          <li>
            <Link className="font-ovo" onClick={closeSideMenu} href="#work">
              My Work
            </Link>
          </li>
          <li>
            <Link className="font-ovo" onClick={closeSideMenu} href="#contact">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
