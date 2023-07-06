import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '../public/images/hero-image-1.png'
import { BsSearch } from 'react-icons/bs'

const Hero = () => {
    return (
        <div className='w-full gradient'>
            <div className='container flex flex-row items-center w-full  mx-auto'>
                <div className='w-[32%] flex flex-col'>
                    <div className='text-[#050304] py-16'>
                        <h2 className='font-light text-7xl'>Play Like a <span className='text-[#E24F29]'>Pro</span></h2>
                        <p className='font-hanken font-normal text-[18px] mt-4'>Find the perfect guitar and accessories and take your skills to the next level with expert guitar classes and repair services.</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div className='flex flex-row gap-8 w-[295px] h-[48px] rounded-[50px] border-[1px] border-[#E0E0E0]  mb-4 bg-white'>
                            <BsSearch className='my-4 ml-[25px] w-[20px] h-[19.2px] bg-white' />
                            <input type='text' placeholder='Search' className='font-normal border-0 font-hanken' />

                        </div>
                        <div>
                            <button className='w-[174px] h-[48px] bg-[#E24F29] px-[12px] text-white rounded-[60px] gap-[10px] py-2 font-nunito '>Start shopping now</button>
                        </div>

                    </div>
                </div>
                <div className='w-[30%] flex'>
                    <div className='w-full m-0 p-0 '>
                        <Image
                            src={HeroImage}
                            alt='Hero-Image'

                            className='w-full h-full sm:h-full ' />
                    </div>
                </div>
                <div className='w-[30%] flex flex-col bg-gradient-right'>
                    <div className='flex flex-col items-center justify-between gap-[30px] top-[207px] w-[308px] h-[396px] mx-auto'>
                        <Link href="/">
                            <div className='w-[308px] h-[112px] text-center  rounded-[25px] border-[1px] border-[#FCEBE7] bg-[#600000]'>
                                <p className='mx-auto my-6 w-[202px] h-[64px] leading-[64px] text-[#FBFBFB] font-light font-nunito'>Guitar lessons</p>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className='w-[308px] h-[112px] text-center  rounded-[25px] border-[1px] border-[#FCEBE7] bg-[#600000]'>
                                <p className='mx-auto my-6 w-[202px] h-[64px] leading-[64px] text-[#FBFBFB] font-light font-nunito'>Guitar</p>
                            </div>
                        </Link>
                        <Link href="/">
                            <div className='w-[308px] h-[112px] text-center  rounded-[25px] border-[1px] border-[#FCEBE7] bg-[#600000]'>
                                <p className='mx-auto my-6 w-[202px] h-[64px] leading-[64px] text-[#FBFBFB] font-light font-nunito'>Accessories</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero