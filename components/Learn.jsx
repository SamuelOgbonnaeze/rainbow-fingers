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
    function Card(props) {
        return (
            <div className=' h-[504px] rounded-[16px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#FBFBFB] hover:shadow-xl'>

                <Image
                    src={props.Image}
                    width={258}
                    height={250}
                    alt={props.Alttext}
                    className=' rounded-[25px] mx-auto md:ml-[18px] w-[150px] md:w-[274px]'
                />

                <p className='w-[80%] h-[21px] ml-2 md:ml-[18px] font-nunito font-bold text-[12px] md:text-[16px] lg:text-[20px] leading-[17.92px] tracking--2 mt-[24px] text-[#050304]'>{props.Topic}
                </p>
                <p className='w-[70%] h-[13px] ml-2 md:ml-[18px] mt-[13px]  leading-[9px] md:leading-[13px] text-[11px] md:text-[14px] text-[#8F8F8F] font-nunito font-normal '>{props.Description}</p>
                <p className='w-[30%] ml-2 md:ml-[18px] font-nunito font-extrabold text-[16px] md:text-[28px] leading-[14.5px] mt-6  text-[#050304]'>₦{props.Price}</p>

                <hr className='mt-[23px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>

                <div className='mt-[21px] flex items-center w-full h-[48.47px] px-2 justify-between'>
                    <div className='flex flex-col w-[40%] h-[48px] mt-[1px]'>
                        <Image
                            src={Ratings}
                            height={20.47}
                            className=' w-[70%] md:w-[60%] '
                        />
                        <p className=' mt-[15px] w-[90%] h-[12px] font-nunito font-semibold text-[10px] md:text-[16px] leading-[9px] text-[#8F8F8F]'>{props.ReviewNumber} Reviews</p>
                    </div>
                    <button className='w-[55%] h-[58px] mr-1 rounded-[60px] py-[12px] px-[24px] flex flex-col lg:flex-row gap-1 border-solid border-[1px] border-[#363F5E] items-center bg-[#FFFFFF]  text-[#242C3D] hover:shadow-xl'>
                        <div className='mx-auto lg:ml-[-18px] mt-[-8px] md:mt-[-6px] lg:mt-0'>
                            <IoIosAddCircleOutline
                                size={18}
                                className=''
                            />
                        </div>
                        <div className='w-[120%] md:w-[100%]'>
                            <p className='font-nunito font-medium text-[12px] md:text-[15px] leading-3 md:leading-[20px] -tracking-2 text-center h-[20px] '>Add cart</p>
                        </div>
                    </button>

                </div>

            </div>
        )
    }

    return (
        <div>
            {/* Learn Heading */}
            <div className='mt-[75px] w-full h-[200px] opacity-500 mx-auto'>
                <div className='mt-[28px] w-[300px] md:w-[500px] lg:w-[841px] h-[144px] mx-auto'>
                    <p className=' font-nunito font-light text-3xl md:text-4xl lg:text-[64px] leading-10 md:leading-[57px] lg:leading-[80.5px] text-center text-[#050304] '>Learn and Grow with  <span className='font-normal text-[#009B00]'>Expert Guitar Classes</span></p>
                </div>
            </div>
            {/* Learn paragraph */}
            <div className='lg:mt-[51px] w-[350px] md:w-[450px] lg:w-[764px] h-[28px] mx-auto'>
                <p className='font-nunito  font-normal leading-[20.5px] md:leading-[30.5px] text-[15px] md:text-[20px] text-center text-[#000000]'>Our team of professionals is committed to helping you achieve your musical goals.</p>
            </div>

            {/* angled brackets */}
            <div className='relative' >
                <div className='mt-[30px] flex justify-between w-[148.27px] h-[49.14px] rounded-[16px] absolute right-10 items-center text-[#E24F29] '>
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
            <div className='mt-[91px] w-full h-[1100px] lg:h-[504px] grid grid-cols-2 lg:grid-cols-4 gap-[10px] justify-between mx-auto bg-[#FBFBFB] '>
                {/* <div className='absolute mt-[231px] -ml-[36px]'>
                    <Image
                        src={RightArrow}
                        className='rounded-[16px] lg:w-[65px] lg:h-[65px] ' />
                </div> */}
                {/* 1st Card */}
                <Card
                    Image={Learn_1}
                    Alttext='Learn_1 Image'
                    Topic='Guitar Fundamentals 1'
                    Description='White customised guitar'
                    Price='150,000'
                    ReviewNumber='38'
                />
                {/* 2nd Card */}
                <Card
                    Image={Learn_2}
                    Alttext='Learn_2 Image'
                    Topic='Guitar Fundamentals 1'
                    Description='White customised guitar'
                    Price='100,000'
                    ReviewNumber='18'
                />
                {/* 3rd Card */}
                <Card
                    Image={Learn_3}
                    Alttext='Learn_3 Image'
                    Topic='Guitar Fundamentals 1'
                    Description='White customised guitar'
                    Price='120,000'
                    ReviewNumber='25'
                />
                {/* 4th Card */}
                <Card
                    Image={Learn_4}
                    Alttext='Learn_4 Image'
                    Topic='Guitar Fundamentals 1'
                    Description='White customised guitar'
                    Price='150,000'
                    ReviewNumber='12'
                />
            </div>

        </div>
    )
}

export default Learn