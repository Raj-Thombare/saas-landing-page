import React from "react";
import LogoSaas from "../assets/images/logosaas.png";
import Image from "next/image";
import MenuIcon from "../assets/icons/menu.svg";
import { div } from "framer-motion/client";

const Navbar = () => {
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='py-4 flex justify-between items-center'>
          <div className='relative'>
            <div className='w-full absolute top-2 bottom-0 bg-[linear-gradient(to_right,_#F87BFF,_#FB92CF,_#FFDD9B,_#C2F0B1,_#2FD8FE)] blur-md'></div>
            <Image
              src={LogoSaas}
              alt='Saas Logo'
              className='h-12 w-12 relative'
            />
          </div>
          <div className='border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden'>
            <MenuIcon className='text-white' />
          </div>
          <nav className='items-center gap-6 hidden sm:flex'>
            <a
              href='#'
              className='text-white text-opacity-60 hover:text-opacity-100 transition'>
              About
            </a>
            <a
              href='#'
              className='text-white text-opacity-60 hover:text-opacity-100 transition'>
              Features
            </a>
            <a
              href='#'
              className='text-white text-opacity-60 hover:text-opacity-100 transition'>
              Updates
            </a>
            <a
              href='#'
              className='text-white text-opacity-60 hover:text-opacity-100 transition'>
              Help
            </a>
            <a
              href='#'
              className='text-white text-opacity-60 hover:text-opacity-100 transition'>
              Customers
            </a>
            <button className='bg-white px-4 py-2 rounded-lg'>
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
