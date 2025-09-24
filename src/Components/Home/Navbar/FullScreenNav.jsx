import { useGSAP } from '@gsap/react'
import React, { useContext } from 'react'
import { useRef } from 'react'
import gsap from 'gsap'


const FullScreenNav = () => {

  
 useGSAP(function () {
   

        const tl = gsap.timeline()      
        tl.from('.stairing', {
          delay:1,
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
       
        tl.from('.link', {
          rotateX: 90,
          stagger: {
            amount: -0.3
          }
})
 })


  return (
    <div id='fullscreennav' className='hidden h-screen overflow-x-hidden w-full absolute '>
      <div className='h-screen fixed w-full'>
       <div className='h-full w-full flex '>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
      </div>
      <div className='relative'>
        <div className='flex p-5 w-full justify-between items-start'>
        <div className=''>
                <div className='w-40'>\
                    <svg className='w-full cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
            </div>
                <div className='h-40 w-40 cursor-pointer relative'>
                  <div className=' h-50 w-1 -rotate-45 origin-top absolute bg-[#C4EB4B]'></div>
                   <div className='h-50 w-1 rotate-45 right-0 origin-top absolute bg-[#C4EB4B]'></div>
                </div>
      </div>
        <div className=''>
            <div className='link origin-top border-t-1  border-white relative'>
             <h1 className='font-[font2] text-white text-[6vw] text-center leading-[0.8] pt-5 uppercase'>PROJECTS </h1>             
             <div className='moveLink flex absolute top-0  bg-[#D3FD50]'>
                <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour Tout Voir</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                 <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour Tout Voir</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour Tout Voir</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                 <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour Tout Voir</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                     </div> 
            </div>
            <div className='link origin-top border-t-1  border-white relative'>
             <h1 className='font-[font2] text-white text-[6vw] text-center leading-[0.8] pt-5 uppercase'>AGENCE </h1>             
             <div className='moveLink flex absolute top-0  bg-[#D3FD50]'>
                <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour Tout Savoir</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                 <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour Tout Savoir</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour Tout Savoir</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                 <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour Tout Savoir</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                     </div> 
            </div>
           <div className='link origin-top border-t-1  border-white relative'>
             <h1 className='font-[font2] text-white text-[6vw] text-center leading-[0.8] pt-5 uppercase'>CONTACT </h1>             
             <div className='moveLink flex absolute top-0  bg-[#D3FD50]'>
                <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour ENVOYER UN FAX</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                 <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour ENVOYER UN FAX</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour ENVOYER UN FAX</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                 <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour ENVOYER UN FAX</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                     </div> 
            </div>
            <div className='link origin-top border-t-1 border-y-1  border-white relative'>
             <h1 className='font-[font2] text-white text-[6vw] text-center leading-[0.8] pt-5 uppercase'>BLOUGE </h1>             
             <div className='moveLink flex absolute top-0  bg-[#D3FD50]'>
                <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>LIRE LESE ARTICLES</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                 <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>Pour Tout Voir</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                <div className='moveX flex items-center'>
                <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>LIRE LESE ARTICLES</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                 <h2 className='whitespace-nowrap font-[font2] text-black text-[6vw] text-center leading-[0.8] pt-5 uppercase'>LIRE LESE ARTICLES</h2> 
                <img className='object-cover shrink-0 h-30 w-96 rounded-full' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                </div>
                     </div> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav 