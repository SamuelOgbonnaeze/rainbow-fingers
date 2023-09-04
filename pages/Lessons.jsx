import React from 'react'
import LessonNav from '@/components/LessonPage/LessonNav'
import LessonHero from '@/components/LessonPage/LessonHero'
import LessonDiscover from '@/components/LessonPage/LessonDiscover'
import LessonMain from '@/components/LessonPage/LessonMain'
import LessonGenre from '@/components/LessonPage/LessonGenre'
import LessonFooter from '@/components/LessonPage/LessonFooter'
import LessonAlbumSlide from '@/components/LessonPage/LessonAlbumSlide'

const Lessons = () => {
    return (
        <div className='w-full mx-auto'>
            <LessonNav />
            <LessonHero />
            <LessonDiscover />
            <LessonMain />
            <LessonGenre />
            <LessonAlbumSlide />
            <LessonFooter />
           
        </div>
    )
}

export default Lessons