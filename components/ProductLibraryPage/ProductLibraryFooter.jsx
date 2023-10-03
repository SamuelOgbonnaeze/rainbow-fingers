import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { AiOutlineFacebook } from 'react-icons/ai'

const ProductLibraryFooter = () => {
    return (

        <div className='w-full mt-[100px] lg:mt-[120px]  h-[420px]  bg-[#C35041] text-white pt-[65px] '>
            <div className='w-[90%] h-[60%] grid grid-cols-3 gap-6 mx-auto justify-between  '>
                {/* 1st column */}
                <div className='flex  flex-col   font-lato font-normal text-[16px] lg:text-[20px] leading-[20.5px] mx-auto justify-between'>
                    <p className='w-full h-[20px] font-semibold'>Rainbow Fingers</p>
                    <p className='w-full h-[20px] '>Online Store</p>
                    <p className='w-full h-[20px] '>Online Guitar lessons</p>
                    <p className='w-full h-[20px] '>Community (Hub)</p>
                </div>
                {/* 2nd column */}
                <div className='flex flex-col justify-between  font-lato font-normal text-[16px] lg:text-[20px] leading-[20.5px] mx-auto'>
                    <p className='w-full h-[20px] font-semibold'>Careers</p>
                    <p className='w-full h-[20px] '>Privacy policy</p>
                    <p className='w-full h-[20px] '>Terms & conditions</p>
                    <p className='w-full h-[20px] '>FAQ</p>
                </div>
                {/* 3rd column */}
                <div className='flex flex-col   font-lato font-normal text-[16px] lg:text-[20px] leading-[20.5px] mt-2 md:mt-0 justify-between '>
                    <p className='w-full h-[20px] font-semibold leading-[13.5px]'>Follow Us</p>
                    <span className='w-full md:w-[60%] flex justify-between'>
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
                    <p className='w-full h-[20px]  '>Email:</p>
                    <p className='w-full h-[20px]  '>Mobile</p>
                </div>
            </div>
        </div>

    )
}

export default ProductLibraryFooter