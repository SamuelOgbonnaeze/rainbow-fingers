import React from 'react'
import OffersStaticLeft from './OffersStaticleft'
import OffersStaticRight from './OffersStaticRight'


const ProductOffers = () => {

    return (
        <div className='mt-[60px] lg:mt-[120px]'>
            {/* Rainbow Offers */}
            <div className='w-[85%]  h-[200px] mx-auto bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat  text-center items-center  '>
                <p className='w-[70%] h-[66px] py-20 md:py-20 lg:py-16 mx-auto text-3xl md:text-4xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] font-nunito font-light text-[#050304]'>Rainbow Offers</p>
            </div>

            {/* Offers */}
            <div className=' w-[97%] lg:w-[95%] h-[1740px] flex mt-[100px]  mx-auto gap-[25px] text-[#000000] '>
                {/* Left vertical side */}
                <OffersStaticLeft />
                {/* Right Vertical side */}
                <div className='w-full '>
                    <OffersStaticRight />
                </div>
                {/*  */}
            </div>
        </div>

    )
}

export default ProductOffers