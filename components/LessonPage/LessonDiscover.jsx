import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Metronome from '@/public/images/metronome.png'
import Notepad from '@/public/images/notepad.png'
import LocationPin from '@/public/images/location-pin.png'

const LessonDiscover = () => {
    return (
        <div>
            <div className='w-full flex flex-cols-2 mt-[400px] md:mt-[600px] lg:mt-0  '>
                <div className='w-[90%] flex flex-col lg:flex-row lg:gap-[77px] items-center justify-between  mx-auto md:mx-12 lg:mx-[150px]'>
                    <div className='w-[80%] md:w-[80%] lg:w-[50%]  font-nunito py-3 '>
                        <p className=' font-light text-3xl md:text-4xl lg:text-6xl leading-8 md:leading-[57px] lg:leading-[67px] text-[#050304] '>Discover the joy of <span className='font-normal text-[#E24F29]'>Playing Guitar</span></p>
                    </div>
                    <div className='w-[80%] md:w-[85%] lg:w-[50%]  py-6 '>
                        <p className=' font-hanken font-normal sm:text-[15px] md:text-[18px] lg:text-2xl  text-[#333333] leading-[30.5px]'>Our courses are designed to fit your schedule and budget, so you can learn at your own pace and on your own terms.</p>
                    </div>
                </div>

            </div>

            {/* Cards */}
            {/* Three column grid */}
            <div className='w-full lg:w-[90%] lg:h-[272px] mt-[73px] mx-auto items-center px-3 lg:px-0 '>
                <div className='  grid grid-rows-3 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4'>
                    {/* 1st Card */}
                    <div className='w-[374px] h-[256px] flex flex-col '>
                        <Image
                            src={Metronome}
                            width={100}
                            height={100}
                            alt='metronome'
                            className=''
                        />

                        <p className='w-[305px] mt-6 font-semibold font-hanken text-[24px] leading-6  text-[#050304]'>Effective and efficient</p>
                        <p className='w-full h-[72px] mt-8 text-[17px] leading-[26px] font-hanken font-normal text-[#4F4F4F]'>Whether you're a beginner or an experienced musician, our guitar courses offer a fun and engaging way to learn and improve your skills.</p>
                    </div>
                    {/* 2nd card */}
                    <div className='w-[374px] h-[256px] flex flex-col '>
                        <Image
                            src={Notepad}
                            width={100}
                            height={100}
                            alt='notepad'
                            className=''
                        />

                        <p className='w-[305px] mt-6 font-semibold font-hanken text-[24px] leading-6  text-[#050304]'>Online classes</p>
                        <p className='w-full h-[72px] mt-8 text-[17px] leading-[26px] font-hanken font-normal text-[#4F4F4F]'>Our courses are available online, so you can learn anytime and anywhere. With lifetime access to the course material, you can revisit lessons and practice at your own pace.</p>
                    </div>
                    {/* 3rd Card */}
                    <div className='w-[374px] h-[256px] flex flex-col mt-3 md:mt-1 lg:mt-0'>
                        <Image
                            src={LocationPin}
                            width={100}
                            height={100}
                            alt='Location_pin'
                            className=''
                        />

                        <p className='w-[305px] mt-6 font-semibold font-hanken text-[24px] leading-6  text-[#050304]'>On-site learning</p>
                        <p className='w-full h-[72px] mt-8 text-[17px] leading-[26px] font-hanken font-normal text-[#4F4F4F]'>Our courses are available online, so you can learn anytime and anywhere. With lifetime access to the course material, you can revisit lessons and practice at your own pace.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LessonDiscover