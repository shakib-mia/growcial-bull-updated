import React from 'react'
import videointro from './../../assets/introvideo.mp4'
import poster from './../../assets/postervideo.png'

const Videointro = () => {
  return (
    <div className="flex justify-center">
      <div className="w-64 sm:w-80 md:w-96">
        <div className='relative' style={{ paddingBottom: '56.25%' }}>
          <video
            controls
            className="absolute top-0 left-0 w-full h-[500px]"
            poster={poster}
          >
            <source src={videointro} type="video/webm" />
           
          </video>
        </div>
      </div>
    </div>
  )
}

export default Videointro