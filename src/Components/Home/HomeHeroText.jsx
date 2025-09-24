import React from 'react'
import Video from '../Home/Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] text-white pt-5 text-center leading-[vw]'>
      <div className='text-[7vw] uppercase leading-[9vw] flex items-center justify-center'>L'étincelle

      </div>
      <div className='text-[7vw] uppercase leading-[9vw] flex items-center justify-center'>qui 
        <div className='h-[7vw] w-[16vw] -mt-5 overflow-hidden rounded-full'><Video /></div> génère
        </div>

      <div className='text-[7vw] uppercase leading-[9vw] flex items-center justify-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText