import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import Sample_1 from '../public/images/sample-1.png'
import Sample_2 from '../public/images/sample-2.png'
import Sample_3 from '../public/images/sample-3.png'
import Sample_4 from '../public/images/sample-4.png'
import Ratings from '../public/images/rating.png'
import { IoIosAddCircleOutline } from 'react-icons/io'


const Discover = () => {
    function Card(props) {
        return (
            <div className=' h-[504px] border-solid border-[1px] border-[#E0E0E0] flex flex-col pt-[17px] bg-[#F2F2F2] rounded-[16px] hover:shadow-xl'>

                <Image
                    src={props.Image}
                    width={274}
                    height={240.47}
                    alt={props.Alttext}
                    className=' rounded-[25px] mx-auto md:ml-[18px] w-[150px] md:w-[274px]'
                />

                <p className='w-[90%] h-[36px] mt-[36.5px] ml-2 md:ml-[18px] font-nunito font-bold text-[8px] md:text-[14px] leading-[17.92px] tracking--2'>{props.Manufacturer} <br />
                    {props.Name} 
                </p>

                <p className='w-[70%] h-[11px] ml-2 md:ml-[18px] mt-[13px] font-nunito font-semibold leading-[9px] text-[11px] md:text-[16px] text-[#8F8F8F] '>{props.Description}</p>

                <div className='flex mt-[24px] items-center gap-2 justify-between'>
                    <p className='w-[40%] h-[21px] ml-[10px] md:ml-[21px] font-nunito font-extrabold text-[16px] md:text-[28px] leading-[14.5px]'>₦{props.Price}</p>
                    <p className=' w-[50%] h-[12px] font-nunito font-semibold text-[10px] md:text-[16px] leading-[9px] text-[#8F8F8F] mr-8 flex justify-end'>{props.ReviewNumber} Reviews</p>
                </div>

                <hr className='mt-[21px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>

                <div className='mt-[15px] flex items-center gap-3 justify-between'>
                    <Image
                        src={Ratings}

                        height={20.47}
                        className='mt-[13px] ml-[10px] lg:ml-[25px] w-[30%] '
                    />

                    <button className='w-[50%] h-[58px] mr-1 rounded-[60px] py-[12px] px-[24px] flex flex-col lg:flex-row gap-1 bg-[#E24F29] text-white items-center hover:shadow-xl '>
                        <div className='mx-auto lg:ml-[-10px] mt-[-8px] md:mt-[-6px] lg:mt-0'>
                            <IoIosAddCircleOutline
                                size={18}
                                className='text-white md:w-[24px] md:h-[24px]'
                            />
                        </div>
                        <div className='w-[60%] lg:w-[70%]'>
                            <p className='font-nunito font-medium text-[10px] md:text-[16px] leading-3 md:leading-[20.48px] -tracking-2 text-center h-[20px] '>Add cart</p>
                        </div>


                    </button>

                </div>

            </div>
        );
    };

    return (
        <div className='w-full '>
            {/* discover Heading */}
            <div className='mt-[80px] w-full h-[200px] opacity-500 mx-auto'>
                <div className='mt-[33px]  w-[300px] md:w-[500px] lg:w-[841px] h-[134px] mx-auto'>
                    <p className=' font-nunito font-light text-3xl md:text-4xl lg:text-[64px] leading-10 md:leading-[57px] lg:leading-[77px] text-center text-[#050304] '>Discover Your Perfect Guitar at <span className='font-normal text-[#0000D2]'>Rainbow Fingers</span></p>
                </div>
            </div>
            {/* Discover paragraph */}
            <div className='lg:mt-[51px] w-[350px] md:w-[450px] lg:w-[695px] h-[57px] mx-auto'>
                <p className='font-nunito  font-normal leading-[20px] md:leading-[30px] text-[15px] md:text-[20px] text-center text-[#000000]'>Explore our extensive selection of high-quality electric, acoustic, and classical guitars, and find the one that best suits your style and budget.</p>
            </div>

            {/* Discover Guitar */}
            <div className='w-[350px] md:w-[629px] h-[50px] grid grid-cols-2 md:grid-cols-3 gap-[29px] mt-[47px] md:mt-[77px] mx-auto justify-between mb-[100px]'>
                {/* Acoustic */}
                <div className=' h-[50px]  px-[24px] py-[13px] gap-[10px] rounded-[60px] hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                    <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px]text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Acoustic guitar</p>
                </div>
                {/* Electric */}
                <div className=' h-[46px]  px-[24px] py-[13px] gap-[10px] rounded-[60px] hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                    <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Electric guitar</p>
                </div>
                {/* Accessories */}
                <div className='col-span-2 md:col-span-1 h-[46px]  px-[24px] py-[13px] gap-[10px] rounded-[60px] justify-center mx-auto  hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                    <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Accessories</p>
                </div>
            </div>

            {/* Guitar Cards */}
            <div className='mt-[51px] w-full h-[515px] grid grid-cols-2 lg:grid-cols-4 gap-[10px] px-2 justify-between mx-auto mb-[450px] lg:mb-0'>
                {/* 1st Card */}
                <Card
                Image={Sample_1}
                Alttext='Sample_1 image'
                Manufacturer = 'Fender'
                Name='Wildwood Coronado II (1968 - 1969)'
                Description='White customised guitar'
                Price='150,000'
                ReviewNumber='34'
                />
                {/* 2nd Card */}
                <Card
                Image={Sample_2}
                Alttext='Sample_2 image'
                Manufacturer = 'Fender'
                Name='Wildwood Coronado II (1968 - 1969)'
                Description='White customised guitar'
                Price='150,000'
                ReviewNumber='34'
                />
                {/* 3rd Card */}
                <Card
                Image={Sample_3}
                Alttext='Sample_3 image'
                Manufacturer = 'Fender'
                Name='Wildwood Coronado II (1968 - 1969)'
                Description='White customised guitar'
                Price='150,000'
                ReviewNumber='34'
                />
                {/* 4th Card */}
                <Card
                Image={Sample_4}
                Alttext='Sample_4 image'
                Manufacturer = 'Fender'
                Name='Wildwood Coronado II (1968 - 1969)'
                Description='White customised guitar'
                Price='150,000'
                ReviewNumber='34'
                />
            </div>

            {/* go to store button */}

            <div className='w-[250px] md:w-[355px] h-[46px] mt-[569px] lg:mt-[109px] mx-auto rounded-[60px] border-solid border-[1px] border-[#E24F29] gap-[10px] px-[24px] py-[13px] justify-center hover:bg-[#E24F29] group '>
                <div className='w-[87px] h-[20px] mx-auto '>
                    <Link href='/' className='justify-center ' >
                        <button className='font-medium font-nunito  text-[16px] text-[#E24F29] leading-[20.48px] text-center -tracking-2 group-hover:text-white '>Go to store</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Discover