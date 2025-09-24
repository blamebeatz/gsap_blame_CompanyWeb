import React from 'react'

const ProjectCard = (props) => {
  
  

  return (
      <>
          <div className='group w-1/2 h-full transition-all relative rounded-none hover:rounded-[100px] overflow-hidden' >
            <img className='w-full h-full object-cover ' src={props.image1} alt="" />
           <div className='opacity-0 transition-all group-hover:opacity-100 flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black/30 text-white'>
            <h2 className='uppercase font-[font2] text-[80px] border-3 rounded-full px-10'> Voir le Project</h2>
           </div>
          </div>
          <div className='group w-1/2 h-full transition-all relative rounded-none hover:rounded-[100px] overflow-hidden' >
            <img className='w-full h-full object-cover ' src={props.image2} alt="" />
           <div className='opacity-0 transition-all group-hover:opacity-100 flex items-center justify-center absolute top-0 left-0 w-full h-full bg-black/30 text-white'>
            <h2 className='uppercase font-[font2] text-[80px] border-3 rounded-full px-10'> Voir le Project</h2>
           </div>
          </div>
        </> 
      
  )
}

export default ProjectCard