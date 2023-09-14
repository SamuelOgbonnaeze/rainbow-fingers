import React from 'react'


const StoreCourses = () => {
    return (
        <div>
            {/* course categories */}
            <div className=' w-full lg:w-[60%] h-[80px] rounded-[100px] flex items-center  lg:ml-[50px] mt-[-40px] bg-white shadow-xl ' >
                <div className='w-[90%] h-[60%] flex justify-between mx-auto text-center ' >
                    <button className='w-[25%] h-full rounded-[60px] md:py-3 md:px-6 gap-[10px] border-solid border-[1px] border-[#BDBDBD] hover:bg-[#DF3B11] text-[#050304] hover:text-white  '>
                        <span className='text-center font-nunito font-medium -tracking-[-2%] text-[12px] md:text-[16px] lg:text-[18px] leading-[12px] md:leading-[16px] lg:leading-[20px]  '>All course</span>
                    </button>
                    <button className='w-[23%] h-full rounded-[60px] md:py-3 md:px-6 gap-[10px] border-solid border-[1px] border-[#BDBDBD] hover:bg-[#DF3B11] text-[#050304] hover:text-white  '>
                        <span className='text-center font-nunito font-medium -tracking-[-2%] text-[12px] md:text-[16px] lg:text-[18px] leading-[12px] md:leading-[16px] lg:leading-[20px]  '>My course</span>
                    </button>
                    <button className='w-[23%] h-full rounded-[60px] md:py-3 md:px-6 gap-[10px] border-solid border-[1px] border-[#BDBDBD] hover:bg-[#DF3B11] text-[#050304] hover:text-white  '>
                        <span className='text-center font-nunito font-medium -tracking-[-2%] text-[12px] md:text-[16px] lg:text-[18px] leading-[12px] md:leading-[16px] lg:leading-[20px]  '>Watchlist</span>
                    </button>
                    <button className='w-[23%] h-full rounded-[60px] md:py-3 md:px-6 gap-[10px] border-solid border-[1px] border-[#BDBDBD] hover:bg-[#DF3B11] text-[#050304] hover:text-white  '>
                        <span className='text-center font-nunito font-medium -tracking-[-2%] text-[12px] md:text-[16px] lg:text-[18px] leading-[12px] md:leading-[16px] lg:leading-[20px]  '>Archives</span>
                    </button>
                </div>
            </div>
            {/* sorting section */}
            <div className='w-[93%] flex justify-between mt-[60px] mx-auto text-center'>
                {/* Left side */}
                <div className=' w-[35%] flex gap-4 items-center' >
                    {/* Views */}
                    <div className='w-[40%] h-[50px] rounded-[60px] border-solid border-[1px] border-[#363F5E] px-6 py-3 gap-[8px] hover:shadow-xl ' >
                        <div className='w-[80%] mx-auto font-nunito font-medium text-[#242C3D] text-[14px] md:text-[16px] lg:text-[18px] leading-3 md:leading-4 lg:leading-[20px] -tracking-[2%] '>
                            <select className='w-full' name="cars" id="cars">
                                <option value="recent">Recent</option>
                                <option value="mostviewed">Most Viewed</option>
                            </select>
                        </div>
                    </div>
                    {/* Guitar types */}
                    <div className='w-[40%] h-[50px] rounded-[60px] border-solid border-[1px] border-[#363F5E] px-6 py-3 gap-[8px] hover:shadow-xl ' >
                    <div className='w-[80%] mx-auto font-nunito font-medium text-[#242C3D] text-[14px] md:text-[16px] lg:text-[18px] leading-3 md:leading-4 lg:leading-[20px] -tracking-[2%] '>
                            <select className='w-full' name="guitar" id="guitar">
                                <option value="acoustic">Acoustic Guitar</option>
                                <option value="electric">Electric Guitar</option>
                                <option value="bass">Bass Guitar</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Left side ends */}

                {/* Right side */}
                <div>usb 8ypt
                    
                </div>
            </div>
        </div>
    )
}

export default StoreCourses