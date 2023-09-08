import React from 'react'
import Image from 'next/image'
import Store from '../public/images/Store.png'
import TutorialVideo from '../public/images/Tutorial-videos.png'
import CommunityRating from '../public/images/community-ratings.png'
import Link from 'next/link'

const Experience = () => {
    return (
        <div className='justify-center'>
            {/* Heading */}
            <div className='mt-[70px] md:mt-[100px] lg:mt-[231px] w-full h-[200px] mx-auto opacity-500 '>
                <div className='pt-[33px] w-[70%] h-134px mx-auto text-3xl md:text-5xl lg:text-[64px] leading-10 md:leading-[57px] lg:leading-[77px] text-center'>
                    <p className='font-light font-nunito'>Experience the Power of Music with <span className='font-medium text-[#D2AE00]'>Rainbow Fingers</span></p>
                </div>
            </div>
            {/* paragraph text */}
            <div className='md:mt-[51px] w-[65%] h-[57px] mx-auto text-center'>
                <p className='text-[#000000] leading-[20.5px] md:leading-[30.5px] text-[15px] md:text-[20px] font-normal'>From guitars and accessories to expert guitar classes, we're passionate about helping you achieve your musical goals.</p>
            </div>
            {/* Cards */}
            <div className='w-[90%] mx-auto md:px-8 md:h-[900px] lg:h-[300px]  mt-[103px] flex justify-center  '>
                <div className='  grid grid-rows-3 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8'>
                    {/* 1st Card */}
                    <div className='w-[287px] h-[284px] flex flex-col mx-auto'>
                        <Image
                            src={Store}
                            width={76.75}
                            height={73}
                            alt='store icon'
                            className='mx-auto'
                        />

                        <p className='mt-[47px] font-bold font-nunito text-[18px] md:text-[20px] lg:text-[24px] leading-[17.5px]  text-[#050304]'>Store Guitar/ Accessories</p>
                        <p className='w-[273px] h-[122px] mt-[24px] text-[14px] md:text-[16px] lg:text-[18px] leading-[26.5px] text-[#2F3437]'>Rainbow fingers is a standard, licensed, accredited and well equipped music school. We run a music school online and offline where kids, teens, and adults.</p>
                    </div>
                    {/* 2nd card */}
                    <div className='w-[287px] h-[284px] flex flex-col mx-auto'>
                        <Image
                            src={TutorialVideo}
                            width={82.24}
                            height={73.41}
                            alt='tutorial video icon'
                            className='mx-auto'
                        />

                        <p className='mt-[47px] font-bold font-nunito text-[18px] md:text-[20px] lg:text-[24px] leading-[12.5px] text-[#050304]'>Tutorial videos</p>
                        <p className='w-[273px] h-[122px] mt-[24px] text-[14px] md:text-[16px] lg:text-[18px] leading-[26.5px] text-[#2F3437]'>Rainbow fingers is a standard, licensed, accredited and well equipped music school. We run a music school online and offline where kids, teens, and adults.</p>
                    </div>
                    {/* 3rd Card */}
                    <div className='w-[287px] h-[284px] flex flex-col mx-auto '>
                        <Image
                            src={CommunityRating}
                            width={98.79}
                            height={74.77}
                            alt='community ratings icon'
                            className='mx-auto'
                        />

                        <p className='mt-[47px] font-bold font-nunito text-[18px] md:text-[20px] lg:text-[24px] leading-[14.5px] text-[#050304] '>Community reviews</p>
                        <p className='w-[273px] h-[122px] mt-[24px] text-[14px] md:text-[16px] lg:text-[18px] leading-[26.5px] text-[#2F3437]'>Rainbow fingers is a standard, licensed, accredited and well equipped music school. We run a music school online and offline where kids, teens, and adults.</p>
                    </div>
                </div>
            </div>


            {/* get started button */}

            <div className='w-[250px] md:w-[393px] h-[46px] mt-[80px] md:mt-[-100px] lg:mt-[124px] mx-auto rounded-[60px] border-solid border-[1px] border-[#E24F29] gap-[10px] px-[24px] py-[13px] justify-center hover:bg-[#E24F29] group cursor-pointer hover:scale-105 ease-in-out duration-300'>
                <div className='w-[124px] h-[20px] mx-auto '>
                    <Link href='/' className='' >
                        <button className='font-medium font-nunito text-[14px] md:text-[16px] text-[#E24F29] leading-[20.48px] text-center -tracking-2 group-hover:text-white'>Get started now</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Experience