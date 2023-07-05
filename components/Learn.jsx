import React from 'react'
import Image from 'next/image'
import RightArrow from '../public/images/right-arrow.png'
import Learn_1 from '@/public/images/learn-plan-1.png'
import Learn_2 from '@/public/images/learn-plan-2.png'
import Learn_3 from '@/public/images/learn-plan-3.png'
import Learn_4 from '@/public/images/learn-plan-4.png'
import Ratings from '../public/images/rating.png'
import { IoIosAddCircleOutline } from 'react-icons/io'

const Learn = () => {
    return (
        <div>
            {/* Learn Heading */}
            <div className='mt-[75px] w-[1269px] h-[200px] opacity-500 mx-auto'>
                <div className='mt-[28px] w-[657px] h-[144px] mx-auto'>
                    <p className=' font-nunito font-light text-[64px] leading-[80.5px] text-center text-[#050304] '>Learn and Grow with  <span className='font-normal text-[#009B00]'>Expert Guitar Classes</span></p>
                </div>
            </div>
            {/* Learn paragraph */}
            <div className='mt-[64px] w-[764px] h-[28px] mx-auto'>
                <p className='font-nunito  font-normal text-[20px] leading-[30.5px] text-center text-[#000000]'>Our team of professionals is committed to helping you achieve your musical goals.</p>
            </div>

            {/* angled brackets */}
            <div className='relative' >
                <div className='mt-[30px] flex justify-between w-[148.27px] h-[49.14px] rounded-[16px] absolute right-[310px] items-center text-[#E24F29] '>
                    <span>
                        <Image
                            src={RightArrow}
                            width={49.14}
                            height={49.14}
                            className='rounded-[16px] ' />
                    </span>
                    <span className='-rotate-180'>
                        <Image
                            src={RightArrow}
                            width={49.14}
                            height={49.14}
                            className='rounded-[16px] ' />
                    </span>
                </div>
            </div>

            {/* Learning Plans */}
            <div className='mt-[91px] w-[1278px] h-[504px] flex grid-cols-4 gap-[30px] justify-between mx-auto bg-[#FBFBFB] '>
                <div className='absolute mt-[231px] -ml-[36px]'>
                    <Image
                        src={RightArrow}
                        width={65}
                        height={65}
                        className='rounded-[16px] ' />
                </div>
                {/* 1st Card */}
                <div className='w-[297px] h-[504px] rounded-[16px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#FBFBFB]'>

                    <Image
                        src={Learn_1}
                        width={258}
                        height={250}
                        alt='sample_1 image'
                        className=' rounded-[25px] mx-auto mt-[17px]'
                    />

                    <p className='w-[213px] h-[21px] mt-[24px] ml-[24px] font-nunito font-bold text-[20px] leading-[20.5px] tracking--2 text-[#050304]'>Guitar Fundamentals 1
                    </p>

                    <p className='w-[225px] h-[13px] ml-[24px] mt-[13px] font-nunito font-normal leading-[12.5px] text-[14px] text-[#8F8F8F] '>White customised guitar</p>


                    <p className='w-[126px] h-[21px] mt-[24px] ml-[27px] font-nunito font-extrabold text-[28px] leading-[14.5px]  text-[#050304]'>₦150,500</p>

                    <hr className='mt-[23px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>


                    <div className='mt-[21px] flex items-center w-[253px] h-[48.47px] ml-[21px] justify-between'>
                        <div className='flex flex-col w-[116.03px] h-[47.47px] mt-[1px]'>
                            <Image
                                src={Ratings}
                                width={116.03}
                                height={20.47}
                                className=' '
                            />
                            <p className='mt-[15px] w-[85px] h-[12px] font-nunito font-semibold text-[16px] leading-[9px] text-[#8F8F8F]'>34 Reviews</p>
                        </div>
                        <button className='w-[120px] h-[46px] ml-[14px] rounded-[60px] py-[12px] px-[24px] flex gap-[8px] border-solid border-[1px] border-[#363F5E] items-center bg-[#FFFFFF]  text-[#242C3D]'>
                            <div className='ml-[-18px]'>
                                <IoIosAddCircleOutline
                                    size={18}
                                    className=''
                                />
                            </div>
                            <div className='w-[250px]'>
                                <p className='font-nunito font-medium text-[15px] leading-[20.48px] -tracking-2 text-center  h-[20px] '>Add cart</p>
                            </div>

                        </button>

                    </div>

                </div>
                {/* 2nd Card */}
                <div className='w-[297px] h-[504px] rounded-[16px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#FBFBFB]'>

                    <Image
                        src={Learn_2}
                        width={258}
                        height={250}
                        alt='sample_1 image'
                        className=' rounded-[25px] mx-auto mt-[17px]'
                    />

                    <p className='w-[213px] h-[21px] mt-[24px] ml-[24px] font-nunito font-bold text-[20px] leading-[20.5px] tracking--2 text-[#050304]'>Guitar Fundamentals 1
                    </p>

                    <p className='w-[225px] h-[13px] ml-[24px] mt-[13px] font-nunito font-normal leading-[12.5px] text-[14px] text-[#8F8F8F] '>White customised guitar</p>


                    <p className='w-[126px] h-[21px] mt-[24px] ml-[27px] font-nunito font-extrabold text-[28px] leading-[14.5px]  text-[#050304]'>₦150,500</p>

                    <hr className='mt-[23px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>


                    <div className='mt-[21px] flex items-center w-[253px] h-[48.47px] ml-[21px] justify-between'>
                        <div className='flex flex-col w-[116.03px] h-[47.47px] mt-[1px]'>
                            <Image
                                src={Ratings}
                                width={116.03}
                                height={20.47}
                                className=' '
                            />
                            <p className='mt-[15px] w-[85px] h-[12px] font-nunito font-semibold text-[16px] leading-[9px] text-[#8F8F8F]'>34 Reviews</p>
                        </div>
                        <button className='w-[120px] h-[46px] ml-[14px] rounded-[60px] py-[12px] px-[24px] flex gap-[8px] border-solid border-[1px] border-[#363F5E] items-center bg-[#FFFFFF]  text-[#242C3D]'>
                            <div className='ml-[-18px]'>
                                <IoIosAddCircleOutline
                                    size={18}
                                    className=''
                                />
                            </div>
                            <div className='w-[250px]'>
                                <p className='font-nunito font-medium text-[15px] leading-[20.48px] -tracking-2 text-center  h-[20px] '>Add cart</p>
                            </div>

                        </button>

                    </div>

                </div>
                {/* 3rd Card */}
                <div className='w-[297px] h-[504px] rounded-[16px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#FBFBFB]'>

                    <Image
                        src={Learn_3}
                        width={258}
                        height={250}
                        alt='sample_1 image'
                        className=' rounded-[25px] mx-auto mt-[17px]'
                    />

                    <p className='w-[213px] h-[21px] mt-[24px] ml-[24px] font-nunito font-bold text-[20px] leading-[20.5px] tracking--2 text-[#050304]'>Guitar Fundamentals 1
                    </p>

                    <p className='w-[225px] h-[13px] ml-[24px] mt-[13px] font-nunito font-normal leading-[12.5px] text-[14px] text-[#8F8F8F] '>White customised guitar</p>


                    <p className='w-[126px] h-[21px] mt-[24px] ml-[27px] font-nunito font-extrabold text-[28px] leading-[14.5px]  text-[#050304]'>₦150,500</p>

                    <hr className='mt-[23px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>


                    <div className='mt-[21px] flex items-center w-[253px] h-[48.47px] ml-[21px] justify-between'>
                        <div className='flex flex-col w-[116.03px] h-[47.47px] mt-[1px]'>
                            <Image
                                src={Ratings}
                                width={116.03}
                                height={20.47}
                                className=' '
                            />
                            <p className='mt-[15px] w-[85px] h-[12px] font-nunito font-semibold text-[16px] leading-[9px] text-[#8F8F8F]'>34 Reviews</p>
                        </div>
                        <button className='w-[120px] h-[46px] ml-[14px] rounded-[60px] py-[12px] px-[24px] flex gap-[8px] border-solid border-[1px] border-[#363F5E] items-center bg-[#FFFFFF]  text-[#242C3D]'>
                            <div className='ml-[-18px]'>
                                <IoIosAddCircleOutline
                                    size={18}
                                    className=''
                                />
                            </div>
                            <div className='w-[250px]'>
                                <p className='font-nunito font-medium text-[15px] leading-[20.48px] -tracking-2 text-center  h-[20px] '>Add cart</p>
                            </div>

                        </button>

                    </div>

                </div>
                {/* 4th Card */}
                <div className='w-[297px] h-[504px] rounded-[16px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#FBFBFB]'>

                    <Image
                        src={Learn_4}
                        width={258}
                        height={250}
                        alt='sample_1 image'
                        className=' rounded-[25px] mx-auto mt-[17px]'
                    />

                    <p className='w-[213px] h-[21px] mt-[24px] ml-[24px] font-nunito font-bold text-[20px] leading-[20.5px] tracking--2 text-[#050304]'>Guitar Fundamentals 1
                    </p>

                    <p className='w-[225px] h-[13px] ml-[24px] mt-[13px] font-nunito font-normal leading-[12.5px] text-[14px] text-[#8F8F8F] '>White customised guitar</p>


                    <p className='w-[126px] h-[21px] mt-[24px] ml-[27px] font-nunito font-extrabold text-[28px] leading-[14.5px]  text-[#050304]'>₦150,500</p>

                    <hr className='mt-[23px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>


                    <div className='mt-[21px] flex items-center w-[253px] h-[48.47px] ml-[21px] justify-between'>
                        <div className='flex flex-col w-[116.03px] h-[47.47px] mt-[1px]'>
                            <Image
                                src={Ratings}
                                width={116.03}
                                height={20.47}
                                className=' '
                            />
                            <p className='mt-[15px] w-[85px] h-[12px] font-nunito font-semibold text-[16px] leading-[9px] text-[#8F8F8F]'>34 Reviews</p>
                        </div>
                        <button className='w-[120px] h-[46px] ml-[14px] rounded-[60px] py-[12px] px-[24px] flex gap-[8px] border-solid border-[1px] border-[#363F5E] items-center bg-[#FFFFFF]  text-[#242C3D]'>
                            <div className='ml-[-18px]'>
                                <IoIosAddCircleOutline
                                    size={18}
                                    className=''
                                />
                            </div>
                            <div className='w-[250px]'>
                                <p className='font-nunito font-medium text-[15px] leading-[20.48px] -tracking-2 text-center  h-[20px] '>Add cart</p>
                            </div>

                        </button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Learn