import React from 'react'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'
import ProductStaticLeft from './ProductStaticLeft'
import ProductStaticRight from './ProductStaticRight'
import Filter from '@/public/images/filter.png'
import Arrow from '@/public/images/arrow.png'

const ProductLibraryOffers = () => {
  return (
    <div>
      {/* searchbar */}
      <div className='w-[95%] mx-auto h-[80px] mt-[35px] md:mt-[20px] flex justify-between items-center ' >
        {/* Filter */}
        <div className='w-[25%] lg:w-[15%] flex justify-between items-center '>
          <p className='font-lato font-semibold text-center text-[16px] md:text-[20px] leading-[13px] ' >Filter</p>
          <span>
            <Image
              src={Filter}
              width={24}
              height={24}
            />
          </span>
        </div>
        {/*  */}
        <div className='w-[25%] hidden lg:flex justify-center gap-2 font-lato font-normal text-[20px] leading-[13px] '>
          <p className='text-[#D9D9D9]'>Product home</p>
          <Image
            src={Arrow}
            width={10}
            height={10}
            className=' '
          />
          <p className='text-[#C35041]' >Guitar</p>
        </div>
        {/*  */}
        <div className=' w-[40%]  flex flex-col md:flex-row gap-4 items-center' >
          {/* Search box */}
          <div className='w-full md:w-[40%] h-[50px] rounded-[60px] border-solid border-[1px] border-[#363F5E] py-2 gap-[8px] hover:shadow-xl  ' >
            <div className='w-[80%] h-full flex mx-auto font-nunito font-medium text-[#242C3D] text-[14px] md:text-[16px] lg:text-[18px] leading-3 md:leading-4 lg:leading-[20px] -tracking-[2%] gap-[10px] items-center '>
              <BsSearch className=' bg-white' size={25} />
              <input type='text' placeholder='Search' className='w-full h-full font-medium  font-hanken items-center' />
            </div>
          </div>
          {/* Search button */}
          <button className='w-full md:w-[40%] h-[50px] rounded-[60px] bg-[#E24F29] hover:bg-white hover:border-solid hover:border-[1px] hover:border-[#E24F29] px-4 py-1  lg:px-6 lg:py-3 gap-[10px] hover:shadow-xl mx-auto font-nunito font-medium text-white hover:text-[#E24F29] text-[14px] md:text-[16px] lg:text-[18px] leading-3 md:leading-4 lg:leading-[20px] -tracking-[2%] hover:scale-105 ' >
            Search
          </button>
        </div>
        {/*  */}
      </div>


      {/* Products */}
      <div className=' w-[97%] lg:w-[95%] flex mt-[50px]  mx-auto gap-[10px] md:gap-[25px] text-[#000000] '>
        {/* Left vertical side */}
        <ProductStaticLeft />
        {/* Right Vertical side */}
        <div className='w-full '>
          <ProductStaticRight />
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default ProductLibraryOffers