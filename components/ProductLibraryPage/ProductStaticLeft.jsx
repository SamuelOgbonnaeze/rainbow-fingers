import React from 'react'

const ProductStaticLeft = () => {
    return (
        <div className='w-[150px] md:w-[290px] flex flex-col items-center '>
            {/* Instruments */}
            <div className='w-full h-[250px] md:h-[360px] rounded-[16px]  bg-[#FAFAFA]  '>
                <div className=' h-[76px] rounded-[16px] flex items-center bg-[#DDDEDF] border-solid border-[1px] border-[#DDDEDF]'>
                    <p className='font-lato font-medium text-[14px] md:text-[20px] leading-[16px] lg:leading-[25px] mx-auto '>Instrument</p>
                </div>
                <div className='w-[90%] flex flex-col mt-[30px] mx-auto font-nunito font-normal text-[10px] md:text-[16px] leading-[25px] md:leading-[45px]  '>
                    <span className='flex justify-between  '>
                        <p>Acoustic Guitar</p>
                        <p>(50)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Electric Guitar</p>
                        <p>(30)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Bass Guitar</p>
                        <p>(5)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Wind instrument</p>
                        <p>(12)</p>
                    </span>
                </div>

            </div>
            {/*  */}
            {/* Product type */}
            <div className='w-full h-[400px] md:h-[587px] mt-2 rounded-[16px]  bg-[#FAFAFA]  '>
                <div className='  h-[76px] rounded-[16px] flex items-center bg-[#DDDEDF] border-solid border-[1px] border-[#DDDEDF]'>
                    <p className='font-lato font-medium text-[14px] md:text-[20px] leading-[16px] md:leading-[16px] lg:leading-[25px] mx-auto '>Product type</p>
                </div>
                <div className='w-[90%] flex flex-col mt-[30px] mx-auto font-nunito font-normal text-[10px] md:text-[16px] leading-[25px] md:leading-[45px] '>
                    <span className='flex justify-between '>
                        <p>Flat Top</p>
                        <p>(143)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Vintage</p>
                        <p>(48)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Accessories</p>
                        <p>(47)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Small body</p>
                        <p>(13)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Classic Guitar</p>
                        <p>(10)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Arched Top</p>
                        <p>(7)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Electric Acoustic</p>
                        <p>(4)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>European Brand</p>
                        <p>(3)</p>
                    </span>
                </div>

            </div>
            {/*  */}
            {/* Price */}
            <div className='w-full h-[330px] mt-2 rounded-[16px]  bg-[#FAFAFA]  '>
                <div className='w-full  h-[76px] rounded-[16px] flex items-center bg-[#DDDEDF] border-solid border-[1px] border-[#DDDEDF]'>
                    <p className='font-lato font-medium text-[14px] md:text-[20px] leading-[16px] md:leading-[16px] lg:leading-[25px] mx-auto '>Price</p>
                </div>
                <div className='w-[90%] flex flex-col mt-[30px] mx-auto font-nunito font-normal text-[10px] md:text-[16px] leading-[25px] md:leading-[45px] '>
                    <span className='flex justify-between  '>
                        <p>Under ₦50,000</p>
                        <p>(50)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>₦50,000 - ₦100,000</p>
                        <p>(30)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>₦100,000 - ₦200,000</p>
                        <p>(5)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>₦200,000 - ₦500,000</p>
                        <p>(12)</p>
                    </span>
                </div>

            </div>
            {/*  */}
            {/* Brand */}
            <div className='w-full h-[305px] md:h-[385px] mt-2 rounded-[16px]  bg-[#FAFAFA]  '>
                <div className='w-full  h-[76px] rounded-[16px] flex items-center bg-[#DDDEDF] border-solid border-[1px] border-[#DDDEDF]'>
                    <p className='font-lato font-medium text-[14px] md:text-[20px] leading-[16px] md:leading-[16px] lg:leading-[25px] mx-auto '>Brand</p>
                </div>
                <div className='w-[90%] flex flex-col mt-[30px] mx-auto font-nunito font-normal text-[10px] md:text-[16px] leading-[25px] md:leading-[45px] '>
                    <span className='flex justify-between  '>
                        <p>Angel</p>
                        <p>(50)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Applause By Ovation </p>
                        <p>(30)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Asturias </p>
                        <p>(5)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Cole Clark</p>
                        <p>(12)</p>
                    </span>
                    <span className='flex justify-between  '>
                        <p>Crafter</p>
                        <p>(12)</p>
                    </span>
                </div>
            </div>
            {/*  */}
        </div>
    )
}

export default ProductStaticLeft