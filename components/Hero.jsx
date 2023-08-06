import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '../public/images/hero-image-1.png'
import { BsSearch } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className='w-full gradient justify-between'>
            <div className='container flex flex-row items-center w-full  mx-auto '>
                <div className='w-[32%] flex flex-col pt-[50px]'>
                    <div className='text-[#050304] py-24 lg:py-16 px-2'>
                        <h2 className='font-bold text-4xl md:text-5xl lg:text-7xl'>Play Like a <span className='text-[#E24F29]'>Pro</span></h2>
                        <p className='font-hanken font-normal text-[18px] mt-4'>Find the perfect guitar and accessories and take your skills to the next level with expert guitar classes and repair services.</p>
                    </div>
                    <div className='flex flex-col justify-between mb-6'>
                        <div className='flex flex-row gap-8 w-49 lg:w-[295px] lg:h-[48px] rounded-[50px] border-[1px] border-[#E0E0E0]  mb-4 bg-white'>
                            <BsSearch className='my-4 ml-[25px] w-[15px] lg:w-[20px] h-[19.2px] bg-white' />
                            <input type='text' placeholder='Search' rows={1} className='font-normal border-0 font-hanken w-16 items-center' />

                        </div>
                        <div>
                            <button className='w-49 lg:w-[295px] h-[68px] lg:h-[48px] bg-[#E24F29] px-[12px] text-white rounded-[60px] gap-[10px] py-3 font-nunito text-[12px] md:text-[18px] '>Start shopping now</button>
                        </div>

                    </div>
                </div>
                <div className='w-[30%] '>
                    <div className='w-full m-0 p-0 hidden lg:flex'>
                        <Image
                            src={HeroImage}
                            alt='Hero-Image'

                            className='w-full h-full  ' />
                    </div>
                </div>
                <div className='w-[30%] flex flex-col bg-gradient-right pt-[50px]'>
                    <div className='flex flex-col items-center justify-between gap-[30px] top-[207px] w-[200px] lg:w-[308px] h-[396px]'>
                        <Link href="/">
                            <div className='w-[100px] lg:w-[308px] h-[105px] lg:h-[112px] text-center  rounded-[25px] border-[1px] border-[#FCEBE7] bg-[#600000]'>
                                <p className='mx-auto my-2 lg:my-6 w-[80px] lg:w-[202px] h-[44px] lg:h-[64px] leading-[44px] lg:leading-[64px] text-[#FBFBFB] font-light font-nunito'>Guitar lessons</p>
                            </div>
                        </Link>
                        <Link href="/">
                        <div className='w-[100px] lg:w-[308px] h-[105px] lg:h-[112px] text-center  rounded-[25px] border-[1px] border-[#FCEBE7] bg-[#600000] '>
                                <p className='mx-auto my-7 lg:my-6 w-[80px] lg:w-[202px] h-[44px] lg:h-[64px] leading-[44px] lg:leading-[64px] text-[#FBFBFB] font-light font-nunito'>Guitar</p>
                            </div>
                        </Link>
                        <Link href="/">
                        <div className='w-[100px] lg:w-[308px] h-[105px] lg:h-[112px] text-center  rounded-[25px] border-[1px] border-[#FCEBE7] bg-[#600000]'>
                                <p className='mx-auto my-7 lg:my-6 w-[80px] lg:w-[202px] h-[44px] lg:h-[64px] leading-[44px] lg:leading-[64px] text-[#FBFBFB] font-light font-nunito'>Accessories</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero