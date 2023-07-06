import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import Cart from '@/public/images/shopping-cart.png'

const Nav = () => {
  return (
    <div className='absolute w-full h-[113px]'>
      <div className='w-[1440px] h-full mx-auto flex justify-between items-center'>
        {/* left side */}
        <div className='flex items-center'>
          <Link href='/'>
            <Image
              src={Logo}
              width={114}
              height={47}
            />
          </Link>

          <div className='flex ml-[51px] w-[350px] h-[32px] gap-[24px] items-center justify-between'>
            <Link href='/' className='w-[82px] h-[32px] rounded-[5px] px-[16px] gap-[8px]'>
              <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Lessons</p>
            </Link>
            <Link href='/' className='w-[82px] h-[32px] rounded-[5px] px-[16px] gap-[8px]'>
              <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Store</p>
            </Link>
            <Link href='/' className='w-[82px] h-[32px] rounded-[5px] px-[16px] gap-[8px]'>
              <p className='w-[62px] h-[32px] font-inter font-normal text-[18px] leading-[32px] text-center'>Hub</p>
            </Link>
            <Link href='/'>
              <Image
                src={Cart}
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className='w-[257px] h-[50px] items-center justify-end flex text-white gap-[20px]'>
          <Link href='/' >
            <div className='w-[102px] h-full border-solid border-[1px] border-[#FBFBFB] rounded-[60px] px-[24px] py-[13px]'>
              <button >
                <p className='font-nunito font-medium text-[16px] leading-[20.48px] -tracking-[2%] text-center '>Log in</p>
              </button>
            </div>
          </Link>

          <Link href='/' >
            <div className='w-[150px] h-[48px] bg-[#E24F29] rounded-[60px] px-[20px] py-[12px] z-1'>
              <button >
                <p className='font-nunito font-medium text-[16px] leading-[20.48px] -tracking-[2%] text-center '>Create account</p>
              </button>
            </div>

          </Link>

        </div>



      </div>




    </div>
  )
}

export default Nav