import React from 'react'
const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className='w-screen aspect-video absolute pt-[18%] md:pt-[15%] px-6 md:px-12 bg-gradient-to-r from-black text-white'>
                <h1 className='text-2xl md:text-6xl py-2 md:py-4 font-bold'>{title}</h1>
                <p className='w-2/4 text-lg hidden md:block'>{overview}</p>
                <p className='w-full text-sm block md:hidden'>{overview.substring(0, 110)}</p>
                <div className="action-btn mt-3 md:mt-5">
                    <button className='px-4 md:px-8 py-2 text-sm md:text-lg  bg-slate-300 hover:bg-slate-400 text-black rounded-md' > ▶️ Play </button>
                    <button className='px-4 md:px-8 py-2 text-sm md:text-lg  mx-2 bg-red-600 hover:bg-red-700 text-white rounded-md' > More Info </button>
                </div>
            </div>
        </>
    )
}

export default VideoTitle