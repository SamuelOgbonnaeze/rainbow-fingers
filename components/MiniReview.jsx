import React from 'react'
import Image from 'next/image'
import People from '../public/images/people.png'
import MusicLibrary from '../public/images/music-library-2.png'
import ReviewStars from '../public/images/review-stars.png'

const MiniReview = () => {
    return (
        <div className='bg-white absolute rounded-[25px] h-[157px] w-full px-auto  lg:z-10'>

            <div className='hidden lg:grid grid-cols-4 lg:w-[1200px] h-[120px] mx-auto pt-[24px] gap-2 '>
                {/* 1st box */}
                <div className='flex gap-9 justify-items-center  text-white bg-[#DF3B11] rounded-[16px] border-[1px] pl-[26px]  '>
                    <div className='mt-[38px]'>
                        <Image
                            src={People}
                            width={54}
                            height={54}
                            className=''
                            alt='People icon'
                        />
                    </div>
                    <div className='w-[93px] h-[64.82px] my-auto justify-items-center'>
                        <div className='w-[47px] h-[24px]'>
                            <p className='font-lato font-bold text-[40px] leading-7'>78</p>
                        </div>
                        <div className='w-[93px] h-[20px] mt-6 '>
                            <p className='font-lato font-normal text-2xl leading-[26.5px]'>Students</p>
                        </div>
                    </div>
                </div>
                {/* 2nd box */}
                <div className='col-span-2 flex  justify-between bg-[#F4D5BD] h-[119.5px] rounded-[25px]'>
                    <div className='h-[59px] mt-[30px] ml-[30px]'>
                        <div className='w-[74px] h-[25px]'>
                            <p className='font-nunito text-[40px] leading-[26.5px] font-bold text-[#DF3B11]'>350</p>
                        </div>
                        <div className='mt-[19px] w-[159px] h-[15px]'>
                            <p className='text-[#DF3B11] font-nunito font-normal text-[24px] leading-[12.5px]'>5 star Reviews</p>
                        </div>
                    </div>
                    <span className='border-solid border-[1px] border-[#F2F2F2] ml-[24px]'></span>
                    <div className='w-[320px] h-[74px] rounded-[35px] ml-[51px] mr-[30px] mt-[23px]  bg-white'>
                        <div className='h-[47.82px] mx-3 my-3'>
                            <Image
                                src={ReviewStars}
                                width={271}
                                height={48}
                                alt='review stars'
                                className='mx-auto'
                            />
                        </div>
                    </div>
                </div>
                {/* 3rd box */}
                <div className='flex gap-9 justify-items-center  text-white bg-[#DF3B11] rounded-[16px] border-[1px] pl-[26px]  '>
                    <div className='mt-[38px]'>
                        <Image
                            src={MusicLibrary}
                            width={51}
                            height={51}
                            className=''
                            alt='music library icon'
                        />
                    </div>
                    <div className='w-[117px] h-[64.82px] my-auto justify-items-center'>
                        <div className='w-[77px] h-[24px]'>
                            <p className='font-lato font-semibold text-[40px] leading-[26.5px]'>8yrs</p>
                        </div>
                        <div className='w-[117px] h-[15px] mt-6 '>
                            <p className='font-lato font-normal text-2xl leading-[16.5px]'>Experience</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MiniReview