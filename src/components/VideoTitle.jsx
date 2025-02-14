import React from 'react'
// import BackgroundVideo from './BackgroundVideo'

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className='absolute top-52 left-10 text-black'>
                <h1 className='text-6xl py-4 font-bold'>{title}</h1>
                <p className='w-1/3 text-sm'>{overview}</p>
                <div className="action-btn mt-5">
                    <button className='px-6 py-2 bg-slate-300 text-black rounded-md' > ▶️ Play </button>
                    <button className='px-6 py-2 mx-2 bg-red-600 text-white rounded-md' > More Info </button>
                </div>
            </div>
            {/* <BackgroundVideo /> */}
        </>
    )
}

export default VideoTitle