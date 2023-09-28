import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductImg1 from '@/public/images/proimg1.png'
import ProductImg2 from '@/public/images/proimg2.png'
import ProductImg3 from '@/public/images/proimg3.png'
import ProductImg4 from '@/public/images/proimg4.png'
import ProductImg5 from '@/public/images/proimg5.png'

const ProductHero = () => {
    function ImageCard(props) {
        return (
            <div className='flex flex-col items-center gap-4'>
                <Image
                    src={props.img}
                    className='w-[70px] md:w-[100px] lg:w-[140px]'
                />
                <p className='font-nunito font-semibold text-[12px] md:text-[16px] lg:text-[20px] leading-[19px] text-[#050304] '>{props.caption}</p>
            </div>
        )
    };
    return (
        <div>
            {/* Background image */}
            <div className='w-full h-[740px] mx-auto bg-[url("/images/producthero.png")] bg-cover bg-no-repeat bg-center  text-white'>
            </div>
            {/* Product Overview */}
            <div className=' w-full lg:w-[80%] h-[150px] md:h-[240px] rounded-[153px] flex items-center mx-auto mt-[-115px] bg-white shadow-xl ' >
                <div className='w-[90%] h-[80%] flex justify-between mx-auto text-center ' >
                    {/* 1st circle */}
                    <Link href='/Product' className=' hover:scale-105 '>
                        <ImageCard
                            img={ProductImg1}
                            caption='Acoustic Guitar'
                        />
                    </Link>
                    {/* 2nd circle */}
                    <Link href='/Product' className=' hover:scale-105 '>
                    <ImageCard
                            img={ProductImg2}
                            caption='Electric Guitar'
                        />
                    </Link>
                    {/* 3rd circle */}
                    <Link href='/Product' className=' hover:scale-105 '>
                    <ImageCard
                            img={ProductImg3}
                            caption='Accessories'
                        />
                    </Link>
                    {/* 4th circle */}
                    <Link href='/Product' className=' hover:scale-105 '>
                    <ImageCard
                            img={ProductImg4}
                            caption='Amp'
                        />
                    </Link>
                    {/* 5th circle */}
                    <Link href='/Product' className=' hover:scale-105 '>
                    <ImageCard
                            img={ProductImg5}
                            caption='Ukelele'
                        />
                        
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductHero