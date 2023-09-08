'use client'

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu,AiOutlineShoppingCart } from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'


const Nav = () => {
  const [nav, setNav] = useState(false)


  const handleNav = () => {
    setNav(!nav);


  }

  

  return (
    <div className='absolute w-full h-[113px]'>


      <div className={nav ? ' h-full mx-auto flex items-center justify-between' : ' w-full h-full items-center justify-between flex'}>
        {/* nav logo */}
        <div className='ml-2  md:ml-6 lg:ml-[100px]'>
          <Link href='/' className='flex items-center ml-4'>
            <Image
              src={Logo}
              width={114}
              height={47}
            />
          </Link>
        </div>
        {/* Toggle button */}
        <div className='block lg:hidden items-center text-[#FBFBFB]'>
          <Link href='/' >
            {nav ? <AiOutlineClose onClick={handleNav} size={20} className=' mr-28 text-[#600000] md:text-gray-100 '/> : <AiOutlineMenu onClick={handleNav} size={20} className='mr-16 text-[#600000] md:text-gray-100' />}
          </Link>
        </div>

        <div className={nav ? 'absolute text-gray-200 flex lg:hidden z-10 right-0 top-[0px] h-screen bg-[#600000]' :
            'absolute hidden'}>
          <ul className='flex flex-col w-full items-center mt-40 lg:justify-center text-center'>
            <li className='font-inter font-normal text-[18px] leading-[32px] p-3'><Link href='/Lessons'> Lessons </Link></li>
            <li className='font-inter font-normal text-[18px] leading-[32px] p-3'><Link href='/Store'> Store </Link></li>
            <li className='font-inter font-normal text-[18px] leading-[32px] p-3'><Link href='/'> Hub </Link></li>
            <li><Link href='/' className='w-[82px] h-[32px] p-3' >
                <AiOutlineShoppingCart
                  size={24}
                  width={24}
                  height={24}
                  className='text-gray-200'
                />
              </Link></li>
           
          </ul>
        </div>






        {/* Desktop Menu */}
        <div className={nav ? 'hidden ' : 'hidden lg:flex items-center justify-between  w-full'} >
          {/* left side */}
          <div className='container'>

            <div className=' ml-[45px] w-[350px] h-[32px] gap-[24px] items-center justify-between flex'>
              <Link href='/Lessons' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
                <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Lessons</p>
              </Link>
              <Link href='/Store' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
                <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Store</p>
              </Link>
              <Link href='/' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
                <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Hub</p>
              </Link>
              <Link href='/' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] items-center group' >
                <FiShoppingCart
                  size={24}
                  width={24}
                  height={24}
                  className='group-hover:text-[#DF3B11]'
                />
              </Link>
            </div>
          </div>
          {/* right side */}
          <div className='w-[257px] h-[50px] items-center justify-end text-white gap-[20px] mr-[98px] flex'>
            <Link href='/' >
              <div className='w-[102px] h-full border-solid border-[1px] border-[#FBFBFB] hover:border-[#E24F29] hover:bg-[#E24F29] rounded-[60px] px-[24px] py-[13px] z-1'>
                <button >
                  <p className='font-nunito font-medium text-[16px] leading-[20.48px] -tracking-[2%] text-center '>Log in</p>
                </button>
              </div>
            </Link>

            <Link href='/' >
              <div className='w-[150px] h-[48px]  bg-[#E24F29] hover:bg-[#FBFBFB] hover:text-[#E24F29] rounded-[60px] px-[20px] py-[12px] z-1'>
                <button >
                  <p className='font-nunito font-medium text-[16px] leading-[20.48px] -tracking-[2%] text-center '>Create account</p>
                </button>
              </div>

            </Link>

          </div>
        </div>


      </div>




    </div>
  )
}

export default Nav