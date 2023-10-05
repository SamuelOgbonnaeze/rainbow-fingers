import React from 'react'
import Image from 'next/image'
import Instructor_1 from '@/public/images/instructor-1.png'
import Instructor_2 from '@/public/images/instructor-2.png'
import Skills from '@/public/images/skills.png'
import Video_Play from '@/public/images/Video.png'
import Link from 'next/link'

const Instructors = () => {
    return (
        <div className='w-full h-[1883px] mt-[143px]  mx-auto'>
            <div className='w-full lg:w-[95%] h-[905px] mx-auto'>
                {/* The top layer */}
                <div className='w-full flex flex-col lg:flex-row gap-[30px] justify-between'>
                    {/* Left side */}
                    <div className='w-full lg:w-[50%] flex flex-col ' >
                        <div className='w-[80%] mx-auto lg:mx-0'>
                            <p className='w-full font-nunito font-light text-3xl md:text-4xl lg:text-[64px] leading-6 md:leading-[32px] lg:leading-[52.5px] text-[#050304] text-center '>Meet our <span className=' font-medium text-[#E24F29]'>instructors</span></p>
                        </div>
                        <div className=' mt-[30px] lg:mt-[60px] w-[80%] md:w-[50%] lg:w-[90%] h-[28px] mx-auto lg:mx-0'>
                            <p className='w-full h-[65px] lg:ml-[5px] font-nunito font-normal text-[14px]  md:text-[16px] lg:text-[18px] leading-[30.5px] text-[#050304] text-center'>Our experienced instructors can help you learn the basics, refine your skills, or even prepare for a performance or recording session.</p>
                        </div>
                    </div>


                    {/* right side */}

                    <div className=' w-[60%] lg:w-[50%] mt-8 lg:mt-0 mx-auto '>
                        <Link href='/' className="flex justify-end">
                            <button className='w-[100%] lg:w-[60%]  mt-[63px]  rounded-[60px] border-solid border-[1px] border-[#E24F29] py-[13px] px-[24px] hover:border-white hover:bg-[#E24F29] font-nunito font-medium text-[16px] text-[#E24F29] hover:text-white leading-[20.48px] text-center -tracking-2'>
                                Start learning
                            </button>
                        </Link>
                    </div>
                </div>

                {/* The instructors card */}
                <div className='w-full lg:w-[95%] grid grid-cols-2 lg:grid-cols-4 justify-between gap-[10px]  lg:mx-auto mt-[85px] lg:mt-[65px] bg-[#FBFBFB] '>
                    {/* 1st card  */}
                    <div className=' lg:h-[534px] '>
                        <Image
                            src={Instructor_1}
                            width={269}
                            height={525}
                            alt='Instructor_1.png'
                            className='rounded-[25px]'
                        />
                    </div>
                    {/* 2nd card */}
                    <div className=' lg:h-[689px] '>
                        <Image
                            src={Instructor_2}
                            width={269}
                            height={525}
                            alt='Instructor_2.png'
                            className='rounded-[25px] w-full '
                        />
                    </div>
                    {/* 3rd card */}
                    <div className=' lg:h-[534px] '>
                        <Image
                            src={Instructor_1}
                            width={269}
                            height={525}
                            alt='Instructor_1.png'
                            className='rounded-[25px]'
                        />
                    </div>
                    {/* 4th card */}
                    <div className=' lg:h-[689px] '>
                        <Image
                            src={Instructor_2}
                            width={269}
                            height={525}
                            alt='Instructor_2.png'
                            className='rounded-[25px]'
                        />
                    </div>
                </div>

            </div>


            {/* Skills section */}
            <div className='w-[95%] h-[798px]  flex flex-col lg:flex-row justify-end mt-[600px] md:mt-[1300px] lg:mt-[180px] mx-auto '>
                {/* Left side uncompleted */}
                <div className='w-full lg:w-[50%] h-full rounded-[25px] bg-[#FBFBFB]'>
                    <div className='w-[80%] mx-auto mt-[67px] lg:ml-[59px]'>
                        <p className='font-nunito font-normal text-[#050304] text-3xl md:text-4xl lg:text-[48px] leading-7 md:leading-[40px] lg:leading-[50px]'>Take your skills to the next level with our expert guitar classes.</p>
                    </div>
                    <div className='w-[75%] mt-[35px] mx-auto lg:ml-[59px]'>
                        <p className='font-nunito font-normal text-[#050304] text-[15px] md:text-[20px] leading-[20px] md:leading-[30.5px]'>Don't just take our word for it - here's what some of our customers have to say:</p>
                    </div>
                </div>
                {/* Right side */}
                <div className='lg:w-[50%] h-full rounded-[25px] flex mx-auto mt-10 lg:mt-0'>
                    <Image
                        src={Skills}
                        width={609}
                        height={798}
                        alt='Skills picture'
                    />
                    <Link href='/'>
                        <div className='absolute mt-[200px] ml-[150px] md:mt-[355px] md:ml-[260px] z-10'>
                            <Image
                                src={Video_Play}
                                width={88}
                                height={88}
                                alt='Skills picture'
                                className='w-[50px] md:w-[88px]'
                            />
                        </div>
                    </Link>


                </div>
            </div>
        </div >
    )
}

export default Instructors