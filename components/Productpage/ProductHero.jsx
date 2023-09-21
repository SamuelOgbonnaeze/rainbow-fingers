import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ProductImg1 from '@/public/images/proimg1.png'
import ProductImg2 from '@/public/images/proimg2.png'
import ProductImg3 from '@/public/images/proimg3.png'
import ProductImg4 from '@/public/images/proimg4.png'
import ProductImg5 from '@/public/images/proimg5.png'

const ProductHero = () => {
    return (
        <div>
            {/* Background image */}
            <div className='w-full h-[740px] mx-auto bg-[url("/images/producthero.png")] bg-cover bg-no-repeat bg-center  text-white'>
            </div>
            {/* Product Overview */}
            <div className=' w-full lg:w-[80%] h-[240px] rounded-[153px] flex items-center mx-auto mt-[-115px] bg-white shadow-xl ' >
                <div className='w-[90%] h-[80%] flex justify-between mx-auto text-center ' >
                    {/* 1st circle */}
                    <Link href='/Product' className=' hover:scale-105 '>
                        <div className='flex flex-col items-center gap-4'>
                            <Image
                                src={ProductImg1}
                                width={140}
                                height={140}
                                className=''
                            />
                            <p className='font-nunito font-semibold text-[20px] leading-[19px] text-[#050304] '>Acoustic Guitar</p>
                        </div>
                    </Link>
                     {/* 2nd circle */}
                     <Link href='/Product' className=' hover:scale-105 '>
                        <div className='flex flex-col items-center gap-4'>
                            <Image
                                src={ProductImg2}
                                width={140}
                                height={140}
                                className=''
                            />
                            <p className='font-nunito font-semibold text-[20px] leading-[19px] text-[#050304] '>Electric Guitar</p>
                        </div>
                    </Link>
                      {/* 3rd circle */}
                      <Link href='/Product' className=' hover:scale-105 '>
                        <div className='flex flex-col items-center gap-4'>
                            <Image
                                src={ProductImg3}
                                width={140}
                                height={140}
                                className=''
                            />
                            <p className='font-nunito font-semibold text-[20px] leading-[19px] text-[#050304] '>Accesories</p>
                        </div>
                    </Link>
                     {/* 4th circle */}
                     <Link href='/Product' className=' hover:scale-105 '>
                        <div className='flex flex-col items-center gap-4'>
                            <Image
                                src={ProductImg4}
                                width={140}
                                height={140}
                                className=''
                            />
                            <p className='font-nunito font-semibold text-[20px] leading-[19px] text-[#050304] '>Amp</p>
                        </div>
                    </Link>
                     {/* 5th circle */}
                     <Link href='/Product' className=' hover:scale-105 '>
                        <div className='flex flex-col items-center gap-4'>
                            <Image
                                src={ProductImg5}
                                width={140}
                                height={140}
                                className=''
                            />
                            <p className='font-nunito font-semibold text-[20px] leading-[19px] text-[#050304] '>Ukulele</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductHero