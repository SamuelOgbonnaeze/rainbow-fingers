import React from 'react'
import Image from 'next/image'
import Instructor_1 from '@/public/images/instructor-1.png'
import Instructor_2 from '@/public/images/instructor-2.png'
import Skills from '@/public/images/skills.png'
import Video_Play from '@/public/images/Video.png'

const Instructors = () => {
    return (
        <div className='w-[1236px] h-[1883px] mt-[143px] gap-[30px] mx-auto'>
            <div className='w-[1166px] h-[905px] mx-auto'>
                {/* The top layer */}
                <div className='w-full flex justify-between'>
                    {/* Left side */}
                    <div className='w-[575px] flex flex-col' >
                        <p className='w-full h-[53px] font-nunito font-light text-[64px] leading-[52.5px] text-[#050304]'>Meet our <span className='w-full h-full font-medium text-[#E24F29]'>instructors</span></p>
                        <p className='mt-[33px] h-[65px] ml-[5px] font-nunito font-normal text-[18px] leading-[30.5px] text-[#050304]'>Our experienced instructors can help you learn the basics, refine your skills, or even prepare for a performance or recording session.</p>
                    </div>
                    {/* right side */}
                    <div className='w-[575px]'>
                        <button className='w-[355px] h-[46px] mt-[63px] ml-[259px] rounded-[60px] border-solid border-[1px] border-[#E24F29] py-[13px] px-[24px] gap-[10px]'>
                            <span className='w-[96px] h-[20px] font-nunito font-medium text-[16px] text-[#E24F29] leading-[20.48px] text-center -tracking-[2%]'>Start learning</span>
                        </button>
                    </div>
                </div>

                {/* The instructors card */}
                <div className='w-[1136px] h-[689px] flex justify-between gap-[20px] mx-auto mt-[65px]'>
                    {/* 1st card  */}
                    <div className='w-[269px] h-[534px] '>
                        <Image
                            src={Instructor_1}
                            width={269}
                            height={525}
                            alt='Instructor_1.png'
                            className='rounded-[25px]'
                        />
                    </div>
                    {/* 2nd card */}
                    <div className='w-[269px] h-[689px] '>
                        <Image
                            src={Instructor_2}
                            width={269}
                            height={525}
                            alt='Instructor_2.png'
                            className='rounded-[25px]'
                        />
                    </div>
                    {/* 3rd card */}
                    <div className='w-[269px] h-[534px] '>
                        <Image
                            src={Instructor_1}
                            width={269}
                            height={525}
                            alt='Instructor_1.png'
                            className='rounded-[25px]'
                        />
                    </div>
                    {/* 4th card */}
                    <div className='w-[269px] h-[689px] '>
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
            <div className='w-full h-[798px]  flex justify-between  mt-[180px] '>
                {/* Left side uncompleted */}
                <div className='w-[608px] h-full rounded-[25px] bg-[#FBFBFB]'>
                    <div className='w-[475px] h-[157px] mt-[67px] ml-[59px]'>
                        <p className='font-nunito font-normal text-[#050304] text-[48px] leading-[52.5px]'>Take your skills to the next level with our expert guitar classes.</p>
                    </div>
                    <div className='w-[454px] h-[55px] mt-[35px] ml-[59px]'>
                        <p className='font-nunito font-normal text-[#050304] text-[18px] leading-[30.5px]'>Don't just take our word for it - here's what some of our customers have to say:</p>
                    </div>
                </div>
                {/* Right side */}
                <div className='w-[609px] h-full rounded-[25px] flex'>
                    <Image
                        src={Skills}
                        width={609}
                        height={798}
                        alt='Skills picture'
                    />
                    <div className='absolute mt-[355px] ml-[260px] z-10'>
                        <Image
                            src={Video_Play}
                            width={88}
                            height={88}
                            alt='Skills picture'
                            
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Instructors