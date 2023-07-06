import React from 'react'
import { FaTwitter, FaInstagram } from 'react-icons/fa'
import { AiOutlineFacebook } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='mt-[148px] w-full h-[420px] -ml-[4px] bg-[#DF3B11] text-white'>
            <div className='flex w-[1269px] mx-auto'>
                {/* 1st column */}
                <div className='flex flex-col w-[188px] h-[163px] mt-[105px] ml-[96px] font-lato font-normal text-[20px] leading-[20.5px] text-center'>
                    <p className='w-[150px] h-[20.57px] font-semibold'>Rainbow Fingers</p>
                    <p className='w-[115px] h-[19.48px] mt-[27.05px] '>Online Store</p>
                    <p className='w-[188px] h-[20.57px] mt-[27.05px] '>Online Guitar lessons</p>
                    <p className='w-[156px] h-[20.57px] mt-[27.05px] '>Community (Hub)</p>
                </div>
                {/* 2nd column */}
                <div className='flex flex-col w-[169px] h-[157px] mt-[105px] ml-[320px] font-lato font-normal text-[20px] leading-[20.5px] text-center'>
                    <p className='w-[68px] h-[15.15px] font-semibold leading-[13.5px]'>Careers</p>
                    <p className='w-[122px] h-[19.48px] mt-[27.05px]'>Privacy policy</p>
                    <p className='w-[169px] h-[20.57px] mt-[27.05px] '>Terms & conditions</p>
                    <p className='w-[40px] h-[20.57px] mt-[27.05px] '>FAQ</p>
                </div>
                {/* 3rd column */}
                <div className='flex flex-col w-[122px] h-[168px] mt-[105px] ml-[247px] font-lato font-normal text-[20px] leading-[20.5px] text-center'>
                    <p className='w-[88px] h-[15.15px] font-semibold leading-[13.5px]'>Follow Us</p>
                    <span className='w-[122px] h-[19.48px] mt-[27.05px] flex justify-between'>
                        <FaTwitter
                            size={20}
                        />
                        <FaInstagram
                            size={20}
                        />
                        <AiOutlineFacebook
                            size={20}
                        />
                    </span>
                    <p className='w-[54px] h-[20.57px] mt-[27.05px] '>Email:</p>
                    <p className='w-[62px] h-[20.57px] mt-[27.05px] '>Mobile</p>
                </div>
            </div>
        </div>
    )
}

export default Footer