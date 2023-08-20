import React from 'react'
import LessonNav from '@/components/LessonPage/LessonNav'
import LessonHero from '@/components/LessonPage/LessonHero'
import LessonDiscover from '@/components/LessonPage/LessonDiscover'
import LessonMain from '@/components/LessonPage/LessonMain'

const Lessons = () => {
    return (
        <div className='w-full'>
            <LessonNav />
            <LessonHero />
            <LessonDiscover />
            <LessonMain />
        </div>
    )
}

export default Lessons