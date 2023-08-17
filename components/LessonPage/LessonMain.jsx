import React from 'react'


const LessonMain = () => {
    return (
        <div className='mt-[100px] md:mt-[-150px] lg:mt-[110px]'>

            {/* Guitar vituoso */}
            <div className='w-[85%]  h-[200px] mx-auto bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center text-center items-center '>
                <p className='w-[70%] h-[66px] py-24 md:py-20 lg:py-16 mx-auto text-3xl md:text-4xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] font-nunito font-light text-[#050304]'>Become a <span className='font-medium text-[#009B00]'>Guitar Virtuoso</span></p>
            </div>

            <div className='w-[90%] mx-auto text-center mt-3'>
                <p className='font-nunito font-light text-black text-xl leading-6 md:leading-7 lg:leading-8'>Learn from the best with our online guitar courses, designed to help you master the instrument and take your playing to the next level.</p>
            </div>

            {/* Massive div block */}
            <div className='w-[95%] h-[1758px] border-solid border-[1px] border-[#E0E0E0] mx-auto mt-8'>
                <div className='w-[95%] h-[480px] mx-auto bg-[url("/images/Virtuoso_guitar.png")] bg-cover bg-no-repeat bg-center rounded-[50px]  text-white'>
                    <div className='pt-[182px] pl-6 md:pl-16 lg:pl-20 font-nunito font-normal lg:text-center'>
                        <p className='w-[340px] h-[77px] text-4xl md:text-5xl lg:text-6xl leading-[77px]'>My learning</p>
                        <p className='mt-4 w-[172px] h-[31px] text-[16px] md:text-[18px] lg:text-xl leading-[31px]'>Courses & Wishlist</p>
                    </div>

                </div>
                {/* Acoustic, Electric,Bass */}
                <div className='md:w-[70%] lg:w-[50%]  h-[50px] grid grid-cols-2 md:grid-cols-3 gap-[20px] mt-[47px] md:mt-[77px] mx-auto justify-between items-center mb-[100px] font-nunito font-normal text-[#363F5E]'>
                    {/* Acoustic */}
                    <div className=' h-full  px-[24px] py-[13px] rounded-[60px] hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                        <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center  group-hover:text-[#E24F29]'>Acoustic guitar</p>
                    </div>
                    {/* Electric */}
                    <div className=' h-full  px-[24px] py-[13px]  rounded-[60px] hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                        <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Electric guitar</p>
                    </div>
                    {/* Bass */}
                    <div className='col-span-2 md:col-span-1 h-full  px-[24px] py-[13px]  rounded-[60px] justify-center mx-auto  hover:border-[#DF3B11] hover:border-solid hover:border-b-[4px] group'>
                        <p className=' h-[20px] -tracking-2 text-[16px] leading-[20.48px] text-center font-nunito font-normal text-[#363F5E] group-hover:text-[#E24F29]'>Bass guitar</p>
                    </div>
                </div>

                jnvsui
            </div>
            
        </div>
    )
}

export default LessonMain