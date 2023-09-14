import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { AiOutlineFacebook } from 'react-icons/ai'

const StoreFooter = () => {
    return (
        <div className='mt-[700px] md:mt-[1000px] lg:mt-[148px] w-full h-[420px] -ml-[4px] bg-[#DF3B11] text-white'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-6  w-full mx-auto justify-between pt-[65px] px-16'>
                {/* 1st column */}
                <div className='flex  flex-col  h-[163px]  font-lato font-normal text-[16px] lg:text-[20px] leading-[20.5px] mx-auto'>
                    <p className='w-full h-[20px] font-semibold'>Rainbow Fingers</p>
                    <p className='w-full h-[20px] mt-[27px]'>Online Store</p>
                    <p className='w-full h-[20px] mt-[27px]'>Online Guitar lessons</p>
                    <p className='w-full h-[20px] mt-[27px]'>Community (Hub)</p>
                </div>
                {/* 2nd column */}
                <div className='flex flex-col  h-[163px] font-lato font-normal text-[16px] lg:text-[20px] leading-[20.5px] mx-auto'>
                    <p className='w-full h-[20px] font-semibold'>Careers</p>
                    <p className='w-full h-[20px] mt-[17px]'>Privacy policy</p>
                    <p className='w-full h-[20px] mt-[17px] '>Terms & conditions</p>
                    <p className='w-full h-[20px] mt-[17px] '>FAQ</p>
                </div>
                {/* 3rd column */}
                <div className='flex flex-col col-span-1 h-[163px] font-lato font-normal text-[16px] lg:text-[20px] leading-[20.5px] mt-2 md:mt-0 '>
                    <p className='w-full h-[20px] font-semibold leading-[13.5px]'>Follow Us</p>
                    <span className='w-[74px] md:w-[154px] mt-[27px] flex justify-between'>
                        <Link href='/'>
                            <FaTwitter
                                size={20}
                            />
                        </Link>
                        <Link href='/'>
                            <FaInstagram
                                size={20}
                            />
                        </Link>
                        <Link href='/'>
                            <AiOutlineFacebook
                                size={20}
                            />
                        </Link>
                    </span>
                    <p className='w-full h-[20px] mt-[27px] '>Email:</p>
                    <p className='w-full h-[20px] mt-[27px] '>Mobile</p>
                </div>
            </div>
        </div>
    )
}

export default StoreFooter