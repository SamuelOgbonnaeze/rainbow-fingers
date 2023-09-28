import React from 'react'
import Image from 'next/image'
import Sample_1 from '@/public/images/sample-1.png'
import Sample_2 from '@/public/images/sample-2.png'
import Sample_3 from '@/public/images/sample-3.png'
import Sample_4 from '@/public/images/sample-4.png'
import Ratings from '@/public/images/rating.png'
import { IoIosAddCircleOutline } from 'react-icons/io'

const ProductDeals = () => {

    function Card(props) {
        return (
            <div className=' border-solid border-[1px] border-[#E0E0E0] flex flex-col py-[10px] md:pt-[17px]  bg-[#F2F2F2] rounded-[16px] hover:shadow-xl hover:scale-105 ease-in-out duration-300 '>

                <Image
                    src={props.img}
                    width={274}
                    height={240.47}
                    alt='sample_1 image'
                    className='  rounded-[25px] mx-auto lg:ml-[18px] w-[150px] md:w-[300px] lg:w-[274px] '
                />

                <p className=' md:w-[243px] h-[36px] mt-[15px] md:mt-[25px] lg:mt-[35px] ml-1 md:ml-[18px] font-nunito font-bold text-[12px] md:text-[16px] lg:text-[14px] leading-[17.92px] tracking--2'>{props.manufacturer} <br />
                    {props.name} ({props.productionyear})
                </p>

                <p className='md:w-[180px] h-[11px] ml-1 md:ml-[18px] mt-[20px] md:mt-[30px] lg:mt-[13px] font-nunito font-semibold leading-[9px] text-[12px] md:text-[16px] text-[#8F8F8F] '>{props.description}</p>

                <div className='flex  mt-[24px] items-center gap-2 justify-between'>
                    <p className='w-[45%] md:w-[126px] h-[21px] ml-[5px] md:ml-[21px] font-nunito font-extrabold text-[16px] md:text-[28px] leading-[14.5px]'>{props.price}</p>
                    <p className='w-[45%] lg:w-[85px] h-[12px] font-nunito font-semibold text-[10px] md:text-[18px] lg:text-[16px] leading-[9px] text-[#8F8F8F] md:mr-8'>{props.reviews} Reviews</p>
                </div>

                <hr className='mt-[21px] w-full ml-[1px] border-solid border-[1px] border-[#E0E0E0]'></hr>

                <div className=' md:mt-[15px] flex flex-col md:flex-row items-center gap-3 justify-between'>
                    <Image
                        src={Ratings}

                        height={20.47}
                        className='mt-[5px] md:mt-[13px] mx-auto md:ml-[10px] w-[70px] md:w-[116px] '
                    />

                    <button className='w-[80%] md:w-[150px] md:h-[58px] md:mr-4 rounded-[50px] md:rounded-[60px] py-[12px] px-[18px] flex  md:flex-row gap-[8px] bg-[#E24F29] hover:bg-white text-white hover:text-[#E24F29] items-center hover:shadow-xl group'>
                        <div className='mx-auto lg:ml-[-10px] mt-[-2px] md:mt-[-6px] lg:mt-0'>
                            <IoIosAddCircleOutline
                                size={18}
                                className='text-white group-hover:text-[#E24F29] md:w-[24px] md:h-[24px]'
                            />
                        </div>
                        <div className='w-[250px]'>
                            <p className='font-nunito font-medium text-[10px] md:text-[16px] ml-[10px] leading-3 md:leading-[20.48px] -tracking-2 flex items-center text-center h-[20px] '>Add cart</p>
                        </div>
                    </button>
                </div>
            </div>
        );
    }


    return (
        <div className='mt-[60px] '>
            {/* Best Deals */}
            <div className='w-[85%]  h-[200px] mx-auto bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center  text-center items-center '>
                <p className='w-[70%] h-[66px] py-20 md:py-20 lg:py-16 mx-auto text-3xl md:text-4xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] font-nunito font-light text-[#050304]'>Best Deals</p>
            </div>
            {/* Deals card */}
            <div className='w-[95%] lg:h-[515px] grid grid-cols-2 lg:grid-cols-4 mt-[60px] gap-[10px] px-2 justify-between mx-auto '>
                {/* 1st Card */}
                <Card
                    img={Sample_1}
                    manufacturer='Fender'
                    name='Wildwood Coronado II'
                    productionyear='1968 - 1969'
                    description='White customised guitar'
                    price='150,000'
                    reviews='34'
                />
                {/* 2nd Card */}
                <Card
                    img={Sample_2}
                    manufacturer='Fender'
                    name='Wildwood Coronado II'
                    productionyear='1968 - 1969'
                    description='White customised guitar'
                    price='150,000'
                    reviews='34'
                />
                {/* 3rd Card */}
                <Card
                    img={Sample_3}
                    manufacturer='Fender'
                    name='Wildwood Coronado II'
                    productionyear='1968 - 1969'
                    description='White customised guitar'
                    price='150,000'
                    reviews='34'
                />
                {/* 4th Card */}
                <Card
                    img={Sample_4}
                    manufacturer='Fender'
                    name='Wildwood Coronado II'
                    productionyear='1968 - 1969'
                    description='White customised guitar'
                    price='150,000'
                    reviews='34'
                />
            </div>

        </div>
    )
}

export default ProductDeals