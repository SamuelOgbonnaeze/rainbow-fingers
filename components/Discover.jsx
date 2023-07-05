import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Sample_1 from '../public/images/sample-1.png'
import Sample_2 from '../public/images/sample-2.png'
import Sample_3 from '../public/images/sample-3.png'
import Sample_4 from '../public/images/sample-4.png'
import Ratings from '../public/images/rating.png'
import { IoIosAddCircleOutline } from 'react-icons/io'


const Discover = () => {
    return (
        <div>
            {/* discover Heading */}
            <div className='mt-[80px] w-[1269px] h-[200px] opacity-500 mx-auto'>
                <div className='mt-[33px] w-[841px] h-[134px] mx-auto'>
                    <p className=' font-nunito font-light text-[64px] leading-[77px] text-center text-[#050304] '>Discover Your Perfect Guitar at <span className='font-normal text-[#0000D2]'>Rainbow Fingers</span></p>
                </div>
            </div>
            {/* Discover paragraph */}
            <div className='mt-[76px] w-[856px] h-[57px] mx-auto'>
                <p className='font-nunito  font-normal text-[20px] leading-[30.5px] text-center text-[#000000]'>Explore our extensive selection of high-quality electric, acoustic, and classical guitars, and find the one that best suits your style and budget.</p>
            </div>

            {/* Discover Guitar */}
            <div className='w-[629px] h-[50px] flex  grid-cols-3 gap-[29px] mt-[87px] mx-auto justify-between'>
                {/* Acoustic */}
                <div className='w-[197px] h-[50px] border-solid border-b-[4px] px-[24px] py-[13px] gap-[10px] border-[#DF3B11] '>
                    <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px]text-center font-nunito font-normal text-[#E24F29]'>Acoustic guitar</p>
                </div>
                {/* Electric */}
                <div className='w-[187px] h-[46px]  px-[24px] py-[13px] gap-[10px] rounded-[60px]'>
                    <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E]'>Electric guitar</p>
                </div>
                {/* Accessories */}
                <div className='w-[187px] h-[46px]  px-[24px] py-[13px] gap-[10px] rounded-[60px]'>
                    <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E]'>Accessories</p>
                </div>
            </div>

            {/* Guitar Cards */}
            <div className='mt-[51px] w-[1301px] h-[515px] flex grid-cols-4 gap-[20px] justify-between mx-auto '>
                {/* 1st Card */}
                <div className='w-[310px] h-[504px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#F2F2F2] rounded-[16px]'>

                    <Image
                        src={Sample_1}
                        width={274}
                        height={240.47}
                        alt='sample_1 image'
                        className=' rounded-[25px] ml-[18px]'
                    />

                    <p className='w-[243px] h-[36px] mt-[36.5px] ml-[18px] font-nunito font-bold text-[14px] leading-[17.92px] tracking--2'>Fender <br />
                        Wildwood Coronado II (1968 - 1969)
                    </p>

                    <p className='w-[180px] h-[11px] ml-[18px] mt-[13px] font-nunito font-semibold leading-[9px] text-[16px] text-[#8F8F8F] '>White customised guitar</p>

                    <div className='flex mt-[24px] items-center'>
                        <p className='w-[126px] h-[21px] ml-[21px] font-nunito font-extrabold text-[28px] leading-[14.5px]'>₦150,500</p>
                        <p className='ml-12 w-[85px] h-[12px] font-nunito font-semibold text-[16px] leading-[9px] text-[#8F8F8F]'>34 Reviews</p>
                    </div>

                    <hr className='mt-[21px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>

                    <div className='mt-[15px] flex items-center'>
                        <Image
                            src={Ratings}
                            width={116.03}
                            height={20.47}
                            className='mt-[13px] ml-[25.02px] '
                        />

                        <button className='w-[120px] h-[48px] ml-[36.95px] rounded-[60px] py-[12px] px-[24px] flex gap-2 bg-[#E24F29] text-white items-center justify-between'>
                            <div className='ml-[-10px]'>
                                <IoIosAddCircleOutline
                                    size={18}
                                    className='text-white '
                                />
                            </div>

                            <p className='font-nunito font-medium text-[14px] leading-[20.48px] -tracking-2 text-center h-[20px] '>Add cart</p>

                        </button>

                    </div>

                </div>
                {/* 2nd Card */}
                <div className='w-[310px] h-[504px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#F2F2F2] rounded-[16px]'>

                    <Image
                        src={Sample_2}
                        width={274}
                        height={240.47}
                        alt='sample_2 image'
                        className=' rounded-[25px] ml-[18px]'
                    />

                    <p className='w-[243px] h-[36px] mt-[36.5px] ml-[18px] font-nunito font-bold text-[14px] leading-[17.92px] tracking--2'>Fender <br />
                        Wildwood Coronado II (1968 - 1969)
                    </p>

                    <p className='w-[180px] h-[11px] ml-[18px] mt-[13px] font-nunito font-semibold leading-[9px] text-[16px] text-[#8F8F8F] '>White customised guitar</p>

                    <div className='flex mt-[24px] items-center'>
                        <p className='w-[126px] h-[21px] ml-[21px] font-nunito font-extrabold text-[28px] leading-[14.5px]'>₦150,500</p>
                        <p className='ml-12 w-[85px] h-[12px] font-nunito font-semibold text-[16px] leading-[9px] text-[#8F8F8F]'>34 Reviews</p>
                    </div>

                    <hr className='mt-[21px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>

                    <div className='mt-[15px] flex items-center'>
                        <Image
                            src={Ratings}
                            width={116.03}
                            height={20.47}
                            className='mt-[13px] ml-[25.02px] '
                        />

                        <button className='w-[120px] h-[48px] ml-[36.95px] rounded-[60px] py-[12px] px-[24px] flex gap-2 bg-[#E24F29] text-white items-center justify-between'>
                            <div className='ml-[-10px]'>
                                <IoIosAddCircleOutline
                                    size={18}
                                    className='text-white '
                                />
                            </div>

                            <p className='font-nunito font-medium text-[14px] leading-[20.48px] -tracking-2 text-center h-[20px] '>Add cart</p>

                        </button>

                    </div>

                </div>
                {/* 3rd Card */}
                <div className='w-[310px] h-[504px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#F2F2F2] rounded-[16px]'>

                    <Image
                        src={Sample_3}
                        width={274}
                        height={240.47}
                        alt='sample_3 image'
                        className=' rounded-[25px] ml-[18px]'
                    />

                    <p className='w-[243px] h-[36px] mt-[36.5px] ml-[18px] font-nunito font-bold text-[14px] leading-[17.92px] tracking--2'>Fender <br />
                        Wildwood Coronado II (1968 - 1969)
                    </p>

                    <p className='w-[180px] h-[11px] ml-[18px] mt-[13px] font-nunito font-semibold leading-[9px] text-[16px] text-[#8F8F8F] '>White customised guitar</p>

                    <div className='flex mt-[24px] items-center'>
                        <p className='w-[126px] h-[21px] ml-[21px] font-nunito font-extrabold text-[28px] leading-[14.5px]'>₦150,500</p>
                        <p className='ml-12 w-[85px] h-[12px] font-nunito font-semibold text-[16px] leading-[9px] text-[#8F8F8F]'>34 Reviews</p>
                    </div>

                    <hr className='mt-[21px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>

                    <div className='mt-[15px] flex items-center'>
                        <Image
                            src={Ratings}
                            width={116.03}
                            height={20.47}
                            className='mt-[13px] ml-[25.02px] '
                        />

                        <button className='w-[120px] h-[48px] ml-[36.95px] rounded-[60px] py-[12px] px-[24px] flex gap-2 bg-[#E24F29] text-white items-center justify-between'>
                            <div className='ml-[-10px]'>
                                <IoIosAddCircleOutline
                                    size={18}
                                    className='text-white '
                                />
                            </div>

                            <p className='font-nunito font-medium text-[14px] leading-[20.48px] -tracking-2 text-center h-[20px] '>Add cart</p>

                        </button>

                    </div>

                </div>
                {/* 4th Card */}
                <div className='w-[310px] h-[504px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#F2F2F2] rounded-[16px]'>

                    <Image
                        src={Sample_4}
                        width={274}
                        height={240.47}
                        alt='sample_4 image'
                        className=' rounded-[25px] ml-[18px]'
                    />

                    <p className='w-[243px] h-[36px] mt-[36.5px] ml-[18px] font-nunito font-bold text-[14px] leading-[17.92px] tracking--2'>Fender <br />
                        Wildwood Coronado II (1968 - 1969)
                    </p>

                    <p className='w-[180px] h-[11px] ml-[18px] mt-[13px] font-nunito font-semibold leading-[9px] text-[16px] text-[#8F8F8F] '>White customised guitar</p>

                    <div className='flex mt-[24px] items-center'>
                        <p className='w-[126px] h-[21px] ml-[21px] font-nunito font-extrabold text-[28px] leading-[14.5px]'>₦150,500</p>
                        <p className='ml-12 w-[85px] h-[12px] font-nunito font-semibold text-[16px] leading-[9px] text-[#8F8F8F]'>34 Reviews</p>
                    </div>

                    <hr className='mt-[21px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>

                    <div className='mt-[15px] flex items-center'>
                        <Image
                            src={Ratings}
                            width={116.03}
                            height={20.47}
                            className='mt-[13px] ml-[25.02px] '
                        />

                        <button className='w-[120px] h-[48px] ml-[36.95px] rounded-[60px] py-[12px] px-[24px] flex gap-2 bg-[#E24F29] text-white items-center justify-between'>
                            <div className='ml-[-10px]'>
                                <IoIosAddCircleOutline
                                    size={18}
                                    className='text-white '
                                />
                            </div>

                            <p className='font-nunito font-medium text-[14px] leading-[20.48px] -tracking-2 text-center h-[20px] '>Add cart</p>

                        </button>

                    </div>

                </div>
            </div>

            {/* go to store button */}

            <div className='w-[355px] h-[46px] mt-[69px] mx-auto rounded-[60px] border-solid border-[1px] border-[#E24F29] gap-[10px] px-[24px] py-[13px] justify-center hover:bg-[#E24F29] group '>
                <div className='w-[87px] h-[20px] mx-auto '>
                    <Link href='/' className='justify-center ' >
                        <button className='font-medium font-nunito  text-[16px] text-[#E24F29] leading-[20.48px] text-center -tracking-2 group-hover:text-white '>Go to store</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Discover