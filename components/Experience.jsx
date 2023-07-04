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
            <div className='mt-[74px] w-[1269px] h-[200px] mx-auto opacity-500'>
                <div className='pt-[33px] w-[841px] h-134px mx-auto text-[64px] leading-[77px] text-center'>
                    <p className='font-light font-nunito'>Experience the Power of Music with <span className='font-medium text-[#D2AE00]'>Rainbow Fingers</span></p>
                </div>
            </div>
            {/* paragraph text */}
            <div className='mt-[51px] w-[695px] h-[57px] mx-auto text-center'>
                <p className='text-[#000000] leading-[30.5px] text-[20px] font-normal'>From guitars and accessories to expert guitar classes, we're passionate about helping you achieve your musical goals.</p>
            </div>
            {/* Cards */}
            <div className='w-[1220px] h-[287px] mt-[103px] mx-auto flex grid-cols-3 justify-between'>
                {/* 1st Card */}
                <div className='w-[287px] h-[284px] flex flex-col '>
                    <Image
                        src={Store}
                        width={76.75}
                        height={73}
                        alt='store icon'
                    />

                    <p className='mt-[47px] font-bold font-nunito text-[24px] leading-[17.5px]  text-[#050304]'>Store  Guitar/ Accessories</p>
                    <p className='w-[273px] h-[122px] mt-[24px] text-[18px] leading-[26.5px] text-[#2F3437]'>Rainbow fingers is a standard, licensed, accredited and well equipped music school. We run a music school online and offline where kids, teens, and adults.</p>
                </div>
                {/* 2nd card */}
                <div className='w-[260px] h-[284px] flex flex-col '>
                    <Image
                        src={TutorialVideo}
                        width={82.24}
                        height={73.41}
                        alt='tutorial video icon'
                    />

                    <p className='mt-[47px] font-bold font-nunito text-[24px] leading-[12.5px] text-[#050304]'>Tutorial videos</p>
                    <p className='w-[258px] h-[126px] mt-[24px] text-[18px] leading-[26.5px] text-[#2F3437]'>Rainbow fingers is a standard, licensed, accredited and well equipped music school. We run a music school online and offline where kids, teens, and adults.</p>
                </div>
                {/* 3rd Card */}
                <div className='w-[257px] h-[287px] flex flex-col '>
                    <Image
                        src={CommunityRating}
                        width={98.79}
                        height={74.77}
                        alt='community ratings icon'
                    />

                    <p className='mt-[47px] font-bold font-nunito text-[24px] leading-[14.5px] text-[#050304]'>Community reviews</p>
                    <p className='w-[257px] h-[130px] mt-[24px] text-[18px] leading-[26.5px] text-[#2F3437]'>Rainbow fingers is a standard, licensed, accredited and well equipped music school. We run a music school online and offline where kids, teens, and adults.</p>
                </div>
            </div>

            {/* get started button */}

            <div className='w-[393px] h-[46px] mt-[124px] mx-auto rounded-[60px] border-solid border-[1px] border-[#E24F29] gap-[10px] px-[24px] py-[13px] justify-center hover:bg-[#E24F29] group '>
                <div className='w-[124px] h-[20px] mx-auto '>
                    <Link href='/' className='' >
                        <button className='font-medium font-nunito  text-[16px] text-[#E24F29] leading-[20.48px] text-center -tracking-2 group-hover:text-white'>Get started now</button>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Experience