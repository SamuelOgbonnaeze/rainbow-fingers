import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductHero = () => {
    return (
        <div>
            {/* Background image */}
            <div className='w-full h-[740px] mx-auto bg-[url("/images/producthero.png")] bg-cover bg-no-repeat bg-center  text-white'>
            </div>
            {/* Product Overview */}
            <div className=' w-full lg:w-[80%] h-[240px] rounded-[153px] flex items-center mx-auto mt-[-115px] bg-white shadow-xl ' >
                <div className='w-[90%] h-[80%] flex justify-between mx-auto text-center ' >
                    <div className='flex items-center'>dsi</div>
                    <div className='flex items-center'>dsi</div>
                    <div className='flex items-center'>dsi</div>
                    <div className='flex items-center'>dsi</div>
                    <div className='flex items-center'>dsi</div>
                </div>
            </div>
        </div>
    )
}

export default ProductHero