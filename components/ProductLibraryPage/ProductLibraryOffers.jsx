import React from 'react'
import ProductStaticLeft from './ProductStaticLeft'
import ProductStaticRight from './ProductStaticRight'

const ProductLibraryOffers = () => {
  return (
    <div>
      <div className=' w-[97%] lg:w-[95%] flex mt-[100px]  mx-auto gap-[15px] md:gap-[25px] text-[#000000] '>
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