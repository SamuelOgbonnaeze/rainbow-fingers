import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Afrobeat from '@/public/images/afrobeats.png'


const LessonGenre = () => {
  return (
    <div className='mt-[400px] md:mt-[700px] lg:mt-16'>
      {/* Discover Your Perfect Genre */}
      <div className='w-[85%]  h-[200px] mx-auto bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center text-center items-center '>
        <p className='w-[70%] h-[66px] py-20 md:py-20 lg:py-16 mx-auto text-3xl md:text-4xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] font-nunito font-light text-[#050304]'>Discover Your <span className='font-medium text-[#4D5BF2]'>Perfect Genre</span></p>
      </div>

      {/* Genre list */}
      <div className='mt-6 h-[650px] w-[85%] mx-auto '>
        {/* Genre Buttons */}
        <div className='flex w-full md:w-[70%] lg:w-[50%] pt-7 items-center justify-between font-nunito font-semibold text-[14px] md:text-[14px] lg:text-[18px]  leading-4 text-center '>
          {/* 1 */}
          <div className='w-[20%] h-[115px] rounded-[25px] hover:bg-[#E24F29] hover:text-white'>
            <p className='w-[70%] mx-auto mt-[25px] '>Afro beat</p>
          </div>
          {/* 2 */}
          <div className='w-[25%] md:w-[20%]  h-[115px] rounded-[25px] hover:bg-[#E24F29] hover:text-white '>
            <p className='  md:w-[70%] mx-auto mt-[25px] '>Amapiano</p>
          </div>
          {/* 3 */}
          <div className='w-[20%] h-[115px] rounded-[25px] hover:bg-[#E24F29] hover:text-white '>
            <p className='w-[70%] mx-auto mt-[25px] '>Jazz</p>
          </div>
          {/* 4 */}
          <div className='w-[20%] h-[115px] rounded-[25px] hover:bg-[#E24F29] hover:text-white '>
            <p className='w-[70%] mx-auto mt-[25px] '>Rock</p>
          </div>
          {/*  */}
        </div>
        {/* Genre Card  */}
        <div className='flex w-full h-[555px] gap-[5%] md:gap-[10%] px-[%] md:px-[10%] py-[7%] bg-white opacity-95 mt-[-45px] rounded-[25px] border-solid border-[1px] border-[#DDDEDF] '>
          <div className='w-[45%] md:w-[35%] lg:w-[400px] h-[400px] items-center pt-[150px] md:pt-[100px] lg:pt-0 '>
            <Image
              src={Afrobeat}
              width={400}
              className=' '
            />
          </div>
          <div className='w-[50%] lg:w-[55%] pt-16 font-nunito '>
            <p className='w-[70%] md:w-[55%] lg:w-[50%] h-[27px] font-bold text-[24px] md:text-[30px]  lg:text-[40px] leading-7 text-center '>Afro Beat</p>
            <p className='w-full  mt-[48px] text-[14px] md:text-[16px] lg:text-[18px] leading-[35px] font-normal text-[#4F4F4F] '>Exceptionaly open minded and has the ability to explaing things to your understanding with patience. very good indeed</p>
            <Link href='/'>
              <div className='md:w-[50%] lg:w-[45%] mt-[70px] rounded-[60px] gap-[10px] px-6 py-3.5 text-[12px] md:text-[14px] lg:text-[16px] leading-5 -tracking-2 font-normal text-center text-[#E24F29] hover:text-white border-solid border-[1px] border-[#E24F29] bg-white hover:bg-[#E24F29] '>Open library</div>
            </Link>

          </div>
        </div>
      </div>

    </div>

  )
}

export default LessonGenre