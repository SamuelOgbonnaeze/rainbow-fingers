import React, { useState } from 'react'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'
import Learn_1 from '@/public/images/learn-plan-1.png'
import Learn_2 from '@/public/images/learn-plan-2.png'
import Learn_3 from '@/public/images/learn-plan-3.png'
import Learn_4 from '@/public/images/learn-plan-4.png'
import Ratings from '@/public/images/rating.png'
import RightArrow from "@/public/images/right-arrow.png"
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'

const StoreCourses = () => {
    function Card(props) {
        return <div className='h-[400px] md:h-[504px] rounded-[16px] border-solid border-[1px] border-[#F2F2F2] flex flex-col pt-4 bg-[#FBFBFB] hover:shadow-xl hover:scale-105 ease-in-out duration-300'>
            <div className='relative mx-auto w-[150px] md:w-[274px]'>
                <Image
                    src={props.img}
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


            <p className='lg:w-[70%] h-[49px] ml-2 md:ml-4 font-nunito font-bold text-[12px] md:text-[16px] lg:text-[20px] leading-[27px]  mt-[24px] text-[#050304]'>{props.headerText}
            </p>

            <div className='flex lg:w-[90%] lg:h-[20px] mt-6 justify-between ml-1 md:ml-4'>
                <Image
                    src={Ratings}
                    height={20.47}
                    className=' w-[70px] md:w-[116px] '
                />
                <p className='mt-1 w-[85px] h-[12px] font-nunito font-semibold text-[10px] md:text-[16px] leading-[9px] text-[#8F8F8F] mr-2'>{props.reviews} Reviews</p>
            </div>
            <hr className='mt-6 w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>


            <div className='mt-[21px] flex items-center w-full h-[48.47px] px-2 justify-between gap-[10px]'>
                <p className=' h-[21px]  font-nunito font-extrabold text-[18px] md:text-[24px] lg:text-[28px] leading-[15px] md:ml-2 text-[#050304]'>₦{props.price}</p>
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
    }
    const [color, setColor] = useState('white');

    const handleClick = () => {
        setColor("red");
    };

    const handleDoubleClick = () => {
        setColor('white'); // Revert back to the original color
    };
    return (
        <div>
            {/* course categories */}
            <div className=' w-full lg:w-[60%] h-[80px] rounded-[100px] flex items-center  lg:ml-[50px] mt-[-40px] bg-white shadow-xl ' >
                <div className='w-[90%] h-[60%] flex justify-between mx-auto text-center ' >
                    <button className='w-[25%] h-full rounded-[60px] md:py-3 md:px-6 gap-[10px] border-solid border-[1px] border-[#BDBDBD] hover:bg-[#DF3B11] text-[#050304] hover:text-white  '>
                        <span className='text-center font-nunito font-medium -tracking-[-2%] text-[12px] md:text-[16px] lg:text-[18px] leading-[12px] md:leading-[16px] lg:leading-[20px]  '>All course</span>
                    </button>
                    <button className='w-[23%] h-full rounded-[60px] md:py-3 md:px-6 gap-[10px] border-solid border-[1px] border-[#BDBDBD] hover:bg-[#DF3B11] text-[#050304] hover:text-white  '>
                        <span className='text-center font-nunito font-medium -tracking-[-2%] text-[12px] md:text-[16px] lg:text-[18px] leading-[12px] md:leading-[16px] lg:leading-[20px]  '>My course</span>
                    </button>
                    <button className='w-[23%] h-full rounded-[60px] md:py-3 md:px-6 gap-[10px] border-solid border-[1px] border-[#BDBDBD] hover:bg-[#DF3B11] text-[#050304] hover:text-white  '>
                        <span className='text-center font-nunito font-medium -tracking-[-2%] text-[12px] md:text-[16px] lg:text-[18px] leading-[12px] md:leading-[16px] lg:leading-[20px]  '>Watchlist</span>
                    </button>
                    <button className='w-[23%] h-full rounded-[60px] md:py-3 md:px-6 gap-[10px] border-solid border-[1px] border-[#BDBDBD] hover:bg-[#DF3B11] text-[#050304] hover:text-white  '>
                        <span className='text-center font-nunito font-medium -tracking-[-2%] text-[12px] md:text-[16px] lg:text-[18px] leading-[12px] md:leading-[16px] lg:leading-[20px]  '>Archives</span>
                    </button>
                </div>
            </div>
            {/* sorting section */}
            <div className='w-[93%] flex justify-between mt-[60px] mx-auto text-center'>
                {/* Left side */}
                <div className='lg:w-[35%] flex flex-col md:flex-row gap-4 items-center' >
                    {/* Views */}
                    <div className='w-full lg:w-[40%] h-[50px] rounded-[60px] border-solid border-[1px] border-[#363F5E] px-6 py-3 gap-[8px] hover:shadow-xl hover:scale-105 ' >
                        <div className='w-[80%] mx-auto font-nunito font-medium text-[#242C3D] text-[14px] md:text-[16px] lg:text-[18px] leading-3 md:leading-4 lg:leading-[20px] -tracking-[2%] '>
                            <select className='w-full' name="cars" id="cars">
                                <option value="recent">Recent</option>
                                <option value="mostviewed">Most Viewed</option>
                            </select>
                        </div>
                    </div>
                    {/* Guitar types */}
                    <div className='w-full lg:w-[40%] h-[50px] rounded-[60px] border-solid border-[1px] border-[#363F5E] px-6 py-3 gap-[8px] hover:shadow-xl hover:scale-105 ' >
                        <div className='w-[80%] mx-auto font-nunito font-medium text-[#242C3D] text-[14px] md:text-[16px] lg:text-[18px] leading-3 md:leading-4 lg:leading-[20px] -tracking-[2%] '>
                            <select className='w-full' name="guitar" id="guitar">
                                <option value="acoustic">Acoustic</option>
                                <option value="electric">Electric</option>
                                <option value="bass">Bass</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Left side ends */}

                {/* Right side */}
                <div className=' w-[35%]  flex flex-col md:flex-row gap-4 items-center' >
                    {/* Search box */}
                    <div className='w-full md:w-[40%] h-[50px] rounded-[60px] border-solid border-[1px] border-[#363F5E] py-2 gap-[8px] hover:shadow-xl  ' >
                        <div className='w-[80%] h-full flex mx-auto font-nunito font-medium text-[#242C3D] text-[14px] md:text-[16px] lg:text-[18px] leading-3 md:leading-4 lg:leading-[20px] -tracking-[2%] gap-[10px] items-center '>
                            <BsSearch className=' bg-white' size={25} />
                            <input type='text' placeholder='Search' className='w-full h-full font-medium  font-hanken items-center' />
                        </div>
                    </div>
                    {/* Search button */}
                    <button className='w-full md:w-[40%] h-[50px] rounded-[60px] bg-[#E24F29] hover:bg-white hover:border-solid hover:border-[1px] hover:border-[#E24F29]  px-6 py-3 gap-[10px] hover:shadow-xl mx-auto font-nunito font-medium text-white hover:text-[#E24F29] text-[14px] md:text-[16px] lg:text-[18px] leading-3 md:leading-4 lg:leading-[20px] -tracking-[2%] hover:scale-105 ' >
                        Search
                    </button>
                </div>
            </div>

            {/* course cards */}
            <div className='mt-16 w-[93%]  grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[30px] justify-between mx-auto bg-[#FFFFFF] mb-16 '>

                {/* 1st row */}
                <Card
                    img={Learn_1}
                    headerText='Mastering Guitar: From Beginner to Pro'
                    reviews='34'
                    price='150,000'
                />

                <Card
                    img={Learn_2}
                    headerText='Essential Guitar Techniques: Unlock Your Potential'
                    reviews='34'
                    price='150,000'
                />

                <Card
                    img={Learn_3}
                    headerText='Acoustic Guitar Foundations: Learn to Play Beautifully'
                    reviews='34'
                    price='150,000'
                />

                <Card
                    img={Learn_4}
                    headerText=' Finger-style Guitar Mastery: Play Like a Pro'
                    reviews='34'
                    price='150,000'
                />
                {/* 2nd row */}
                <Card
                    img={Learn_4}
                    headerText=' Finger-style Guitar Mastery: Play Like a Pro'
                    reviews='34'
                    price='150,000'
                />

                <Card
                    img={Learn_1}
                    headerText='Mastering Guitar: From Beginner to Pro'
                    reviews='34'
                    price='150,000'
                />
               
                <Card
                    img={Learn_2}
                    headerText='Essential Guitar Techniques: Unlock Your Potential'
                    reviews='34'
                    price='150,000'
                />
                
                <Card
                    img={Learn_3}
                    headerText='Acoustic Guitar Foundations: Learn to Play Beautifully'
                    reviews='34'
                    price='150,000'
                />
                
                {/* 3rd row */}
                <Card
                    img={Learn_3}
                    headerText='Acoustic Guitar Foundations: Learn to Play Beautifully'
                    reviews='34'
                    price='150,000'
                /> 
                
                <Card
                    img={Learn_2}
                    headerText='Essential Guitar Techniques: Unlock Your Potential'
                    reviews='34'
                    price='150,000'
                />
                
                <Card
                    img={Learn_1}
                    headerText='Mastering Guitar: From Beginner to Pro'
                    reviews='34'
                    price='150,000'
                />
                
                <Card
                    img={Learn_4}
                    headerText=' Finger-style Guitar Mastery: Play Like a Pro'
                    reviews='34'
                    price='150,000'
                />
            </div>
        </div>
    )
}

export default StoreCourses