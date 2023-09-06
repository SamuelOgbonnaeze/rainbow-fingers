import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Lessonheroimg from '@/public/images/lessonheroimg.png'
import Videobutton from '@/public/images/Video.png'

const LessonHero = () => {
    return (
        <div className='flex relative '>
            <div className='relative w-full h-[704px] grid grid-rows-2 lg:grid-cols-2 items-center justify-between  md:mx-auto lg:ml-[98px] '>

                {/* Left side */}
                <div className='w-full container mt-[180px] md:mt-[350px] ml-2 md:ml-[40px] lg:ml-0  '>
                    <div className='flex flex-col '>
                        <div className='  text-[#050304] py-24 lg:py-16 px-2'>
                            <h2 className='w-full md:w-[585px] md:ml-5 font-nunito font-light  text-4xl md:text-5xl lg:text-[64px] lg:leading-[67px]'>Elevate Your Playing with <span className='text-[#F2994A] font-medium'>Professionals</span></h2>
                            <p className='w-full md:ml-5 md:w-[503px] font-hanken font-normal text-[14px] md:text-[16px] lg:text-[18px] mt-4 lg:leading-[24px]'>Explore our extensive range of guitars classes  and elevate your playing with our professional instructors.</p>
                        </div>

                        <div class="md:ml-5 px-2 z-10 ">
                            <button class=" lg:w-[295px] h-12 bg-[#E24F29] hover:bg-white px-3 text-white hover:text-[#E24F29] rounded-[60px] py-3 font-nunito text-[12px] md:text-[18px] border-solid border-[1px] border-[#E24F29]">
                                Get started now
                            </button>
                        </div>
                    </div>

                </div>
                {/* Right side */}
                <div className='w-[95%] ' >
                    <div className='w-full  container flex  ml-2 md:ml-[40px] lg:ml-0  '>
                        <Image
                            src={Lessonheroimg}
                            className='w-full mx-auto md:mx-0 h-full mt-[450px] md:mt-[800px] lg:mt-[250px]   '
                        />

                    </div>
                </div>
            </div>

            {/* play button */}
            <div className='absolute  ml-[45%] md:ml-[46%] lg:ml-[51%] mt-[800px] md:mt-[895px] lg:mt-[375px] '>
                <Link href='https://youtu.be/HnKIfZoiKmc' className=''>
                    <Image
                        src={Videobutton}
                        className='w-[30px] md:w-[60px] lg:w-[80px] '
                    />
                </Link>
            </div>
            
        </div>
    )
}

export default LessonHero