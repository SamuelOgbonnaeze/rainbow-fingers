'use client'

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import Namechip from '@/public/images/Namechip.png'

const LessonNav = () => {
  const [lessonnav, setLessonNav] = useState(false)


  const handleNav = () => {
    setLessonNav(!lessonnav);
  }



  return (
    <div className='absolute w-full h-[113px] z-10'>


      <div className={lessonnav ? ' h-full mx-auto flex items-center justify-between' : ' w-full h-full items-center justify-between flex'}>
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
        <div className='block lg:hidden items-center text-black'>
          <Link href='/Lessons' >
            {lessonnav ? <AiOutlineClose onClick={handleNav} size={20} className=' mr-28 hover:text-[#DF3B11]' /> : <AiOutlineMenu onClick={handleNav} size={20} className='mr-16 hover:text-[#DF3B11]' />}
          </Link>
        </div>

        <div className={lessonnav ? 'absolute text-black  flex lg:hidden z-10 right-0 top-[0px] h-screen bg-[#FBFBFB]' :
          'absolute hidden'}>
          <ul className='flex flex-col w-full items-center  justify-center text-center'>
            <li className='font-inter font-normal text-[18px] leading-[32px] p-3 hover:text-[#DF3B11]'><Link href='/'> Home  </Link></li>
            <li className='font-inter font-normal text-[18px] leading-[32px] p-3 hover:text-[#DF3B11]'><Link href='/Lessons'> Lessons </Link></li>
            <li className='font-inter font-normal text-[18px] leading-[32px] p-3 hover:text-[#DF3B11]'><Link href='/Product'> Store </Link></li>
            <li className='font-inter font-normal text-[18px] leading-[32px] p-3 hover:text-[#DF3B11]'><Link href='/'> Hub </Link></li>
            <li><Link href='/' className='w-[82px] h-[32px] p-3 hover:text-[#DF3B11]' >
              <AiOutlineShoppingCart
                size={24}
                width={24}
                height={24}
                className=''
              />
            </Link></li>
            <li className='font-inter font-normal text-[18px] leading-[32px] p-3 hover:text-[#DF3B11]'><Link href='/login'> Login </Link></li>

          </ul>
        </div>






        {/* Desktop Menu */}
        <div className={lessonnav ? 'hidden ' : 'hidden lg:flex items-center justify-between  w-full'} >
          {/* left side */}
          <div className='container'>

            <div className=' ml-[45px] w-[350px] h-[32px] gap-[24px] items-center justify-between flex'>
              <Link href='/Lessons' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
                <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Lessons</p>
              </Link>
              <Link href='/Product' className='w-[82px] h-[32px] rounded-[5px] px-2 gap-[8px] hover:text-[#DF3B11]'>
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

            <Link href='/'>
              <Image
                src={Namechip}
                width={48}
                height={48}
                alt='Namechip'

              />
            </Link>
          </div>
        </div>


      </div>




    </div>
  )
}

export default LessonNav