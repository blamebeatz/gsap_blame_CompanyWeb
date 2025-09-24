import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='  text-white font-[font2] flex items-center justify-center gap-2 '>
      <Link to='/project' className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.5vw] leading-[7vw] uppercase border-2 rounded-full px-5'>PROJECTS</Link>
      <Link to='/agents' className='hover:border-[#D3FD50] hover:text-[#D3FD50] text-[6.5vw] leading-[7vw] uppercase border-2 rounded-full px-5'>AGENCE</Link>
    </div>
  )
}

export default HomeBottomText