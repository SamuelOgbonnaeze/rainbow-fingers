import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Learn_1 from '@/public/images/learn-plan-1.png'
import Learn_2 from '@/public/images/learn-plan-2.png'
import Learn_3 from '@/public/images/learn-plan-3.png'
import Learn_4 from '@/public/images/learn-plan-4.png'
import Ratings from '@/public/images/rating.png'
import RightArrow from "@/public/images/right-arrow.png"
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'



const LessonMain = () => {

    const [color, setColor] = useState('white');

    const handleClick = () => {
        setColor("red");
    };

    const handleDoubleClick = () => {
        setColor('white'); // Revert back to the original color
    };

    return (
        <div className='mt-[100px] md:mt-[-150px] lg:mt-[110px]'>

            {/* Guitar vituoso */}
            <div className='w-[85%]  h-[200px] mx-auto bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center text-center items-center '>
                <p className='w-[70%] h-[66px] py-20 md:py-20 lg:py-16 mx-auto text-3xl md:text-4xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] font-nunito font-light text-[#050304]'>Become a <span className='font-medium text-[#009B00]'>Guitar Virtuoso</span></p>
            </div>

            <div className='w-[90%] mx-auto text-center mt-3'>
                <p className='font-nunito font-light text-black text-xl leading-6 md:leading-7 lg:leading-8'>Learn from the best with our online guitar courses, designed to help you master the instrument and take your playing to the next level.</p>
            </div>

            {/* Massive div block */}
            <div className='w-[95%] h-[1758px]  mx-auto mt-8'>
                <div className='w-[95%] h-[480px] mx-auto bg-[url("/images/Virtuoso_guitar.png")] bg-cover bg-no-repeat bg-center rounded-[50px]  text-white'>
                    <div className='pt-[182px] pl-6 md:pl-16 lg:pl-20 font-nunito font-normal lg:text-center'>
                        <p className='w-[340px] h-[77px] text-4xl md:text-5xl lg:text-6xl leading-[77px]'>My learning</p>
                        <p className='mt-4 w-[172px] h-[31px] text-[16px] md:text-[18px] lg:text-xl leading-[31px]'>Courses & Wishlist</p>
                    </div>

                </div>
                {/* Acoustic, Electric,Bass */}
                <div className='md:w-[70%] lg:w-[50%]  h-[50px] grid grid-cols-2 md:grid-cols-3 gap-[20px] mt-[47px] md:mt-[77px] mx-auto justify-between items-center mb-[100px] font-nunito font-normal text-[#363F5E]'>
                    {/* Acoustic */}
                    <div className=' h-full  px-[24px] py-[13px] rounded-[60px] hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                        <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center  group-hover:text-[#E24F29]'>Acoustic guitar</p>
                    </div>
                    {/* Electric */}
                    <div className=' h-full  px-[24px] py-[13px]  rounded-[60px] hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                        <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Electric guitar</p>
                    </div>
                    {/* Bass */}
                    <div className='col-span-2 md:col-span-1 h-full  px-[24px] py-[13px]  rounded-[60px] justify-center mx-auto  hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                        <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Bass guitar</p>
                    </div>
                </div>
                {/* Cards */}
                <div className='mt-0 w-full h-[900px] md:h-[1100px] lg:h-[504px] grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[30px] justify-between mx-auto bg-[#FFFFFF] relative'>
                    <div className='absolute z-10 mt-[231px] -ml-[36px]'>
                        <Image
                            src={RightArrow}
                            className='rounded-[16px] lg:w-[65px] lg:h-[65px] ' />
                    </div>
                    <div className='absolute z-10 mt-[231px] ml-[95%] transform -scale-x-90'>
                        <Image
                            src={RightArrow}
                            className='rounded-[16px] lg:w-[65px] lg:h-[65px] ' />
                    </div>
                    {/* 1st Card */}
                    <div className='h-[400px] md:h-[504px] rounded-[16px] border-solid border-[1px] border-[#F2F2F2] flex flex-col pt-4 bg-[#FBFBFB] hover:shadow-xl'>
                        <div className='relative mx-auto w-[150px] md:w-[274px]'>
                            <Image
                                src={Learn_1}
                                width={258}
                                height={250}
                                alt='sample_1 image'

                            />
                            <div
                                className='absolute -mt-[140px] md:-mt-[240px] ml-[120px] md:ml-[220px] rounded-[20%] hover:cursor-pointer'
                                style={{ color: color }}
                                onClick={handleClick}
                                onDoubleClick={handleDoubleClick}
                            >
                                <AiFillHeart
                                    size={26}
                                    className=''
                                />
                            </div>

                        </div>


                        <p className='lg:w-[228px] h-[49px] ml-2 md:ml-4 font-nunito font-bold text-[12px] md:text-[16px] lg:text-[20px] leading-[27px]  mt-[24px] text-[#050304]'>Mastering Guitar: From Beginner to Pro
                        </p>

                        <div className='flex lg:w-[90%] lg:h-[20px] mt-6 justify-between ml-1 md:ml-4'>
                            <Image
                                src={Ratings}
                                height={20.47}
                                className=' w-[70px] md:w-[116px] '
                            />
                            <p className='mt-1 w-[85px] h-[12px] font-nunito font-semibold text-[10px] md:text-[16px] leading-[9px] text-[#8F8F8F] mr-2'>34 Reviews</p>
                        </div>
                        <hr className='mt-6 w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>


                        <div className='mt-[21px] flex items-center w-full h-[48.47px] px-2 justify-between gap-[10px]'>
                            <p className=' h-[21px]  font-nunito font-extrabold text-[18px] md:text-[24px] lg:text-[28px] leading-[15px] md:ml-2 text-[#050304]'>₦150,500</p>
                            <button className='w-[70px] md:w-[135px] h-[58px] md:mr-4 rounded-[20px] md:rounded-[60px] py-[12px] px-[24px] flex flex-col lg:flex-row gap-[8px] border-solid border-[1px] border-[#363F5E] items-center bg-[#FFFFFF]  text-[#242C3D] hover:shadow-xl'>
                                <div className=' lg:ml-[-18px] mt-[-8px] md:mt-[-6px] lg:mt-0'>
                                    <IoIosAddCircleOutline
                                        size={18}
                                        className=''
                                    />
                                </div>
                                <div className='w-[60px] md:w-[110px] lg:w-[250px]'>
                                    <p className='font-nunito font-medium text-[12px] md:text-[15px] ml-[10px] leading-3 md:leading-[20px] -tracking-2 text-center h-[20px] text-[#242C3D] '>Add cart</p>
                                </div>
                            </button>
                        </div>



                    </div>
                    {/* 2nd Card */}
                    <div className='h-[400px] md:h-[504px] rounded-[16px] border-solid border-[1px] border-[#F2F2F2] flex flex-col pt-4 bg-[#FBFBFB] hover:shadow-xl'>
                        <div className='relative mx-auto w-[150px] md:w-[274px]'>
                            <Image
                                src={Learn_2}
                                width={258}
                                height={250}
                                alt='sample_1 image'

                            />
                            <div
                                className='absolute -mt-[140px] md:-mt-[240px] ml-[120px] md:ml-[220px] rounded-[20%] hover:cursor-pointer'
                                style={{ color: color }}
                                onClick={handleClick}
                                onDoubleClick={handleDoubleClick}
                            >
                                <AiFillHeart
                                    size={26}
                                    className=''
                                />
                            </div>

                        </div>


                        <p className='lg:w-[263px] h-[49px] ml-2 md:ml-4 font-nunito font-bold text-[12px] md:text-[16px] lg:text-[20px] leading-[27px]  mt-[24px] text-[#050304]'>Essential Guitar Techniques: Unlock Your Potential
                        </p>

                        <div className='flex lg:w-[90%] lg:h-[20px] mt-6 justify-between ml-1 md:ml-4'>
                            <Image
                                src={Ratings}
                                height={20.47}
                                className=' w-[70px] md:w-[116px] '
                            />
                            <p className='mt-1 w-[85px] h-[12px] font-nunito font-semibold text-[10px] md:text-[16px] leading-[9px] text-[#8F8F8F] mr-2'>34 Reviews</p>
                        </div>
                        <hr className='mt-6 w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>


                        <div className='mt-[21px] flex items-center w-full h-[48.47px] px-2 justify-between gap-[10px]'>
                            <p className=' h-[21px]  font-nunito font-extrabold text-[18px] md:text-[24px] lg:text-[28px] leading-[15px] md:ml-2 text-[#050304]'>₦150,500</p>
                            <button className='w-[70px] md:w-[135px] h-[58px] md:mr-4 rounded-[20px] md:rounded-[60px] py-[12px] px-[24px] flex flex-col lg:flex-row gap-[8px] border-solid border-[1px] border-[#363F5E] items-center bg-[#FFFFFF]  text-[#242C3D] hover:shadow-xl'>
                                <div className=' lg:ml-[-18px] mt-[-8px] md:mt-[-6px] lg:mt-0'>
                                    <IoIosAddCircleOutline
                                        size={18}
                                        className=''
                                    />
                                </div>
                                <div className='w-[60px] md:w-[110px] lg:w-[250px]'>
                                    <p className='font-nunito font-medium text-[12px] md:text-[15px] ml-[10px] leading-3 md:leading-[20px] -tracking-2 text-center h-[20px] text-[#242C3D] '>Add cart</p>
                                </div>
                            </button>
                        </div>



                    </div>
                    {/* 3rd Card */}
                    <div className='h-[400px] md:h-[504px] rounded-[16px] border-solid border-[1px] border-[#F2F2F2] flex flex-col pt-4 bg-[#FBFBFB] hover:shadow-xl'>
                        <div className='relative mx-auto w-[150px] md:w-[274px]'>
                            <Image
                                src={Learn_3}
                                width={258}
                                height={250}
                                alt='sample_1 image'

                            />
                            <div
                                className='absolute -mt-[140px] md:-mt-[240px] ml-[120px] md:ml-[220px] rounded-[20%] hover:cursor-pointer'
                                style={{ color: color }}
                                onClick={handleClick}
                                onDoubleClick={handleDoubleClick}
                            >
                                <AiFillHeart
                                    size={26}
                                    className=''
                                />
                            </div>

                        </div>


                        <p className='lg:w-[271px] h-[49px] ml-2 md:ml-4 font-nunito font-bold text-[12px] md:text-[16px] lg:text-[20px] leading-[27px]  mt-[24px] text-[#050304]'>Acoustic Guitar Foundations: Learn to Play Beautifully
                        </p>

                        <div className='flex lg:w-[90%] lg:h-[20px] mt-6 justify-between ml-1 md:ml-4'>
                            <Image
                                src={Ratings}
                                height={20.47}
                                className=' w-[70px] md:w-[116px] '
                            />
                            <p className='mt-1 w-[85px] h-[12px] font-nunito font-semibold text-[10px] md:text-[16px] leading-[9px] text-[#8F8F8F] mr-2'>34 Reviews</p>
                        </div>
                        <hr className='mt-6 w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>


                        <div className='mt-[21px] flex items-center w-full h-[48.47px] px-2 justify-between gap-[10px]'>
                            <p className=' h-[21px]  font-nunito font-extrabold text-[18px] md:text-[24px] lg:text-[28px] leading-[15px] md:ml-2 text-[#050304]'>₦150,500</p>
                            <button className='w-[70px] md:w-[135px] h-[58px] md:mr-4 rounded-[20px] md:rounded-[60px] py-[12px] px-[24px] flex flex-col lg:flex-row gap-[8px] border-solid border-[1px] border-[#363F5E] items-center bg-[#FFFFFF]  text-[#242C3D] hover:shadow-xl'>
                                <div className=' lg:ml-[-18px] mt-[-8px] md:mt-[-6px] lg:mt-0'>
                                    <IoIosAddCircleOutline
                                        size={18}
                                        className=''
                                    />
                                </div>
                                <div className='w-[60px] md:w-[110px] lg:w-[250px]'>
                                    <p className='font-nunito font-medium text-[12px] md:text-[15px] ml-[10px] leading-3 md:leading-[20px] -tracking-2 text-center h-[20px] text-[#242C3D] '>Add cart</p>
                                </div>
                            </button>
                        </div>



                    </div>
                    {/* 4th Card */}
                    <div className='h-[400px] md:h-[504px] rounded-[16px] border-solid border-[1px] border-[#F2F2F2] flex flex-col pt-4 bg-[#FBFBFB] hover:shadow-xl'>
                        <div className='relative mx-auto w-[150px] md:w-[274px]'>
                            <Image
                                src={Learn_4}
                                width={258}
                                height={250}
                                alt='sample_1 image'

                            />
                            <div
                                className='absolute -mt-[140px] md:-mt-[240px] ml-[120px] md:ml-[220px] rounded-[20%] hover:cursor-pointer'
                                style={{ color: color }}
                                onClick={handleClick}
                                onDoubleClick={handleDoubleClick}
                            >
                                <AiFillHeart
                                    size={26}
                                    className=''
                                />
                            </div>

                        </div>


                        <p className='lg:w-[263px] h-[49px] ml-2 md:ml-4 font-nunito font-bold text-[12px] md:text-[16px] lg:text-[20px] leading-[27px]  mt-[24px] text-[#050304]'>Finger-style Guitar Mastery: Play Like a Pro
                        </p>

                        <div className='flex lg:w-[90%] lg:h-[20px] mt-6 justify-between ml-1 md:ml-4'>
                            <Image
                                src={Ratings}
                                height={20.47}
                                className=' w-[70px] md:w-[116px] '
                            />
                            <p className='mt-1 w-[85px] h-[12px] font-nunito font-semibold text-[10px] md:text-[16px] leading-[9px] text-[#8F8F8F] mr-2'>34 Reviews</p>
                        </div>
                        <hr className='mt-6 w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>


                        <div className='mt-[21px] flex items-center w-full h-[48.47px] px-2 justify-between gap-[10px]'>
                            <p className=' h-[21px]  font-nunito font-extrabold text-[18px] md:text-[24px] lg:text-[28px] leading-[15px] md:ml-2 text-[#050304]'>₦150,500</p>
                            <button className='w-[70px] md:w-[135px] h-[58px] md:mr-4 rounded-[20px] md:rounded-[60px] py-[12px] px-[24px] flex flex-col lg:flex-row gap-[8px] border-solid border-[1px] border-[#363F5E] items-center bg-[#FFFFFF]  text-[#242C3D] hover:shadow-xl'>
                                <div className=' lg:ml-[-18px] mt-[-8px] md:mt-[-6px] lg:mt-0'>
                                    <IoIosAddCircleOutline
                                        size={18}
                                        className=''
                                    />
                                </div>
                                <div className='w-[60px] md:w-[110px] lg:w-[250px]'>
                                    <p className='font-nunito font-medium text-[12px] md:text-[15px] ml-[10px] leading-3 md:leading-[20px] -tracking-2 text-center h-[20px] text-[#242C3D] '>Add cart</p>
                                </div>
                            </button>
                        </div>



                    </div>
                </div>

                {/* Last div block */}
                <div className='mt-[44px] md:mt-[84px] h-[469px] rounded-[50px] bg-[#F2F2F2] '>
                    {/* 1st section */}
                    <div className=' pt-[20px] md:pt-[35px]'>
                        <div className='w-[95%] h-[259px]  mx-auto bg-[url("/images/bg-1.png")] bg-cover bg-no-repeat bg-center rounded-[50px]  '>
                            <div className='pt-[70px] px-4 lg:px-12 text-[#FBFBFB] font-nunito font-light'>
                                <p className='w-[85%] md:w-[60%] lg:w-[55%] h-[77px] text-2xl md:text-4xl lg:text-6xl leading-[77px]'>Join our <span className='font-medium text-[#E97658]'>on site classes</span></p>
                                <p className='w-[65%] md:w-[35%] lg:w-[25%] h-[31px] text-[14px] md:text-[16px] lg:text-[20px] leading-[31px] '>Choose your preferred location</p>
                            </div>
                        </div>
                    </div>
                    {/* 2nd section */}
                    <div className="mt-2 md:mt-10 px-4 lg:px-12 ">
                        <form className="flex flex-col md:flex-row gap-[10px] justify-between items-center">
                            <div className="w-[300px] md:w-[30%] h-[48px] md:h-[68px] rounded-[50px] border-solid border-[1px] border-[#E0E0E0] ">
                                <input className="w-full h-full rounded-[50px] pl-4 md:pl-6" type='text' placeholder="Enter Email" />
                            </div>

                            <div className="w-[300px] md:w-[30%] h-[48px] md:h-[68px] rounded-[50px] border-solid border-[1px] border-[#E0E0E0]  ">
                                <CiLocationOn className='absolute w-[27px] h-[27px] mt-2 md:mt-4 md:ml-4 ' />
                                <select className="w-full h-full rounded-[50px] pl-8 md:pl-16">
                                    <option value="">Location</option>
                                    <option value="location1">Lagos</option>
                                    <option value="location2">Abuja</option>
                                    <option value="location3">Kano</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>

                            <button className="w-[250px] md:w-[25%] h-[38px] md:h-[48px] rounded-[60px]  bg-[#E24F29] hover:bg-white border-solid border-[1px] border-[#E0E0E0] hover:border-[#E24F29] text-white hover:text-[#E24F29] font-hanken font-semibold " type='submit'>Register now</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LessonMain