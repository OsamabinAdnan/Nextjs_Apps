'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Navigation, Pagination, Autoplay, A11y, Scrollbar} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'

export default function Slider() {
  return (
    <>
        <Swiper modules={[Navigation,Pagination, Scrollbar,A11y,Autoplay]}
          spaceBetween={5}
          slidesPerView={1.15}
          centeredSlides={true}
          breakpoints={{
            0:{
                slidesPerView: 1.15,
            },
            380:{
                slidesPerView: 1.15,
            },
            639:{
                slidesPerView: 1.15,
            },
            767:{
                slidesPerView: 1.15,
            },
            1023:{
                slidesPerView: 1.15,
            },
            1239:{
                slidesPerView: 1.15,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          autoplay={{delay: 4000}}
          className='mt-5 mb-10 '>
            <div className='mx-auto max-w-[1440px] '>
                {/* 1st */}
                <SwiperSlide style={{transform:'translateY(0%)'}}>
                    <div className='flex items-center justify-center rounded-lg relative '>
                        <Image src='/ai.jpeg' width={1200} height={600} alt='img' className=' rounded-lg ' />
                        <div className='absolute z-10 sm:bottom-10 bottom-5 sm:left-10 left-5 right-10 sm:space-y-2 space-y-1 py-2 px-2'>                            
                            <h1 className=' text-white sm:text-2xl text-lg font-bold z-20'>Stay Ahead: The Latest in AI and IT</h1>
                            <p className=' text-white text-sm sm:block hidden '>Keep informed with timely updates on developments in AI and IT.</p>
                            <div className="absolute inset-0 bg-black/50 opacity-100 z-[-10] rounded-lg " />
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2nd */}
                <SwiperSlide style={{transform:'translateY(0%)'}}>
                    <div className='flex items-center justify-center rounded-lg relative '>
                        <Image src='/ai1.jpeg' width={1200} height={600} alt='img' className=' rounded-lg ' />
                        <div className='absolute z-10 sm:bottom-10 bottom-5 sm:left-10 left-5 right-10 sm:space-y-2 space-y-1 py-2 px-2'>                            
                            <h1 className=' text-white sm:text-2xl text-lg font-bold z-20'>Unlocking the Future: Insights on AI & IT</h1>
                            <p className=' text-white text-sm sm:block hidden '>Explore the transformative advancements in AI and IT shaping our world.</p>
                            <div className="absolute inset-0 bg-black/50 opacity-100 z-[-10] rounded-lg" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3rd */}
                <SwiperSlide style={{transform:'translateY(0%)'}}>
                    <div className='flex items-center justify-center rounded-lg relative '>
                        <Image src='/ai2.jpeg' width={1200} height={600} alt='img' className=' rounded-lg ' />
                        <div className='absolute z-10 sm:bottom-10 bottom-5 sm:left-10 left-5 right-10 sm:space-y-2 space-y-1 py-2 px-2'>                            
                            <h1 className=' text-white sm:text-2xl text-lg font-bold z-20'>Innovate, Inspire, Inform: Dive into AI & IT</h1>
                            <p className=' text-white text-sm sm:block hidden '>Discover inspiring stories and informative content in the tech industry.</p>
                            <div className="absolute inset-0 bg-black/50 opacity-100 z-[-10] rounded-lg" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* 4th */}
                <SwiperSlide style={{transform:'translateY(0%)'}}>
                    <div className='flex items-center justify-center rounded-lg relative '>
                        <Image src='/ai3.jpeg' width={1200} height={600} alt='img' className=' rounded-lg ' />
                        <div className='absolute z-10 sm:bottom-10 bottom-5 sm:left-10 left-5 right-10 sm:space-y-2 space-y-1 py-2 px-2'>                            
                            <h1 className=' text-white sm:text-2xl text-lg font-bold z-20'>Navigating the Tech Landscape: AI & IT Blogs</h1>
                            <p className=' text-white text-sm sm:block hidden '>Simplify the complex world of technology with our curated blogs.</p>
                            <div className="absolute inset-0 bg-black/50 opacity-100 z-[-10] rounded-lg" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* 5th */}
                <SwiperSlide style={{transform:'translateY(0%)'}}>
                    <div className='flex items-center justify-center rounded-lg relative '>
                        <Image src='/ai4.jpeg' width={1200} height={600} alt='img' className=' rounded-lg ' />
                        <div className='absolute z-10 sm:bottom-10 bottom-5 sm:left-10 left-5 right-10 sm:space-y-2 space-y-1 py-2 px-2'>                            
                            <h1 className=' text-white sm:text-2xl text-lg font-bold z-20'>Join the Conversation: AI & IT for the Curious Mind</h1>
                            <p className=' text-white text-sm sm:block hidden '>Engage with a community discussing the fascinating world of technology.</p>
                            <div className="absolute inset-0 bg-black/50 opacity-100 z-[-10] rounded-lg" />
                        </div>
                    </div>
                </SwiperSlide>
                {/* 6th */}
                <SwiperSlide style={{transform:'translateY(0%)'}}>
                    <div className='flex items-center justify-center rounded-lg relative '>
                        <Image src='/ai5.jpeg' width={1200} height={600} alt='img' className=' rounded-lg ' />
                        <div className='absolute z-10 sm:bottom-10 bottom-5 sm:left-10 left-5 right-10 sm:space-y-2 space-y-1 py-2 px-2'>                            
                            <h1 className=' text-white sm:text-2xl text-lg font-bold z-20'>From Concepts to Code: Your AI & IT Resource</h1>
                            <p className=' text-white text-sm sm:block hidden '>Turn your ideas into reality with practical guides on tech solutions.</p>
                            <div className="absolute inset-0 bg-black/50 opacity-100 z-[-10] rounded-lg" />
                        </div>
                    </div>
                </SwiperSlide>
                 {/* 7th */}
                 <SwiperSlide style={{transform:'translateY(0%)'}}>
                    <div className='flex items-center justify-center rounded-lg relative '>
                        <Image src='/ai6.jpeg' width={1200} height={600} alt='img' className=' rounded-lg ' />
                        <div className='absolute z-10 sm:bottom-10 bottom-5 sm:left-10 left-5 right-10 sm:space-y-2 space-y-1 py-2 px-2'>                            
                            <h1 className=' text-white sm:text-2xl text-lg font-bold z-20'>Discover the Power of Technology: AI & IT Explored</h1>
                            <p className=' text-white text-sm sm:block hidden '>Uncover the potential and future of AI and IT in society.</p>
                            <div className="absolute inset-0 bg-black/50 opacity-100 z-[-10] rounded-lg" />
                        </div>
                    </div>
                </SwiperSlide>
            </div>

        </Swiper>
    </>
  )
}
