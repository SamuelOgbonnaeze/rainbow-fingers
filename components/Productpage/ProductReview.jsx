import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReviewImg1 from '@/public/images/reviewimg_1.png'
import ReviewImg2 from '@/public/images/reviewimg_2.png'
import Video_play from '@/public/images/Video.png'


const ProductReview = () => {
  function Card(props) {
    return (
      <div className={props.Class}>
        <Link href='{props.Link}' className='flex h-[60%] items-center'>
          <Image src={props.Imgsrc} width={440} height={312} className=' ' alt='reviewimg1' />
          <span className='w-[75%] md:w-[45%] lg:w-[25%] flex absolute'>
            <Image src={Video_play} width={73} height={73} className=' w-[50px]  mx-auto items-center ' alt='Play button' />
          </span>
        </Link>
        <div className='mt-[150px] md:mt-[170px] lg:mt-[120px]   '>
          <p className='font-lato font-bold text-[20px] md:text-[24px] lg:text-[30px] leading-[20px] py-2 '>{props.Title}</p>
          <p className='font-lato font-bold text-[12px] md:text-[14px] lg:text-[16px] leading-[12px] text-[#8F8F8F] py-2 '>{props.Description}</p>
        </div>

      </div>
    )
  };


  return (
    <div className='mt-[80px]'>
      {/* Guitar reviews */}
      <div className='w-[85%]  h-[200px] mx-auto bg-[url("/images/musical-note.png")] bg-cover bg-no-repeat bg-center text-center items-center '>
        <p className='w-[70%] h-[66px] py-20 md:py-20 lg:py-16 mx-auto text-3xl md:text-4xl lg:text-6xl leading-10 md:leading-[57px] lg:leading-[77px] font-nunito font-light text-[#050304]'>Guitar Review</p>
      </div>
      {/* Review Cards */}
      <div className='w-[85%] h-[420px] mx-auto mt-[90px] flex '>
        <div className='w-full grid grid-rows-3 md:grid-cols-2 lg:grid-cols-3  col-span-2 justify-between gap-10'>
          {/* 1st card */}
          <Card
          Class= 'mt-16 md:mt-24 lg:mt-8  '
            Link='/'
            Imgsrc={ReviewImg1}
            Title='How To Learn Songs By Ear:'
            Description='Guitar theory, ear training & reading'
          />
          {/* 2nd card */}
          <Card
          Class= 'mt-[350px] md:mt-24 lg:mt-8  '
            Link='/'
            Imgsrc={ReviewImg2}
            Title='How To Learn Songs By Ear:'
            Description='Guitar theory, ear training & reading'
          />
          {/* 3rd card */}
           <Card
            Link='/'
            Imgsrc={ReviewImg1}
            Title='How To Learn Songs By Ear:'
            Description='Guitar theory, ear training & reading'
            Class='mt-[600px] md:mt-[420px] lg:mt-8 '
         
          />
        </div>
      </div>
    </div>
  )
}

export default ProductReview