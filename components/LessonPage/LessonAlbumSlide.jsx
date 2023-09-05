import React from 'react'
import Image from 'next/image'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Album_1 from '@/public/images/album_art_1.png'
import Album_2 from '@/public/images/album_art_2.png'
import Album_3 from '@/public/images/album_art_3.png'
import Album_4 from '@/public/images/album_art_4.png'
import Album_5 from '@/public/images/album_art_5.jpg'
import Album_6 from '@/public/images/album_art_6.png'

const LessonAlbumSlide = () => {

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }


    return (
        <div className='mt-[100px] '>
            <div className='w-[85%]  h-[200px] mx-auto bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center text-center items-center '>
                <p className='w-[70%] h-full py-10 md:py-8 lg:py-6 mx-auto text-3xl md:text-4xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] font-nunito font-light text-[#050304]'>Learn iconic songs from your favourite artists</p>
            </div>
            <div className='w-[65%] mx-auto text-center mt-5'>
                <p className='font-nunito font-normal text-black text-[14px] md:text-[18px] lg:text-xl leading-6 md:leading-7 lg:leading-8'>Exceptionaly open minded and has the ability to explaing things to your understanding with patience. very good indeed</p>
            </div>

{/* Album Cover Slider */}

            <div className='relative h-[550px] flex items-center mt-[30px] '>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 hidden md:flex' onClick= {slideLeft} size={40} />

                <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide  '>
                    <Image className='w-[400px] md:w-[500px] rounded-[50px] border-solid border-[6px] border-[#FFB9A7] m-4  inline-block cursor-pointer hover:scale-105 ease-in-out duration-300' src={Album_2} width={700} height={500} alt='/' />
                    <Image className='w-[400px] md:w-[500px] rounded-[50px] border-solid border-[6px] m-4  inline-block cursor-pointer hover:scale-105 ease-in-out duration-300' src={Album_1} width={700} height={500} alt='/' />
                    <Image className='w-[400px] md:w-[500px] rounded-[50px] border-solid border-[6px] m-4  inline-block cursor-pointer hover:scale-105 ease-in-out duration-300' src={Album_3} width={700} height={500} alt='/' />
                    <Image className='w-[400px] md:w-[500px] rounded-[50px] border-solid border-[6px] m-4  inline-block cursor-pointer hover:scale-105 ease-in-out duration-300' src={Album_4} width={700} height={500} alt='/' />
                    <Image className='w-[400px] md:w-[500px] rounded-[50px] border-solid border-[6px] m-4  inline-block cursor-pointer hover:scale-105 ease-in-out duration-300' src={Album_5} width={700} height={500} alt='/' />
                    <Image className='w-[400px] md:w-[500px] rounded-[50px] border-solid border-[6px] m-4  inline-block cursor-pointer hover:scale-105 ease-in-out duration-300' src={Album_6} width={700} height={500} alt='/' />
                </div>

                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 hidden md:flex' onClick={slideRight} size={40} />
            </div>

           
        </div>
    )
}

export default LessonAlbumSlide