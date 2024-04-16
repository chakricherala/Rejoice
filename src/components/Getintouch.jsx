import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';

// import required modules                  
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { Woman, Charge, Electric, Friends, Goldring } from '../assets/index'


const Getintouch = () => {
    return (
        <section data-scroll data-scroll-section className='w-full h-screen font-[NB] bg-[#FAF8F3] pt-6'>
            <div className='mx-6 flex justify-between items-end border-b-[1px] pb-2 border-black relative'>
                <h2 className='text-8xl tracking-tighter'>Get in touch.</h2>
                <h4 className='text-xl'>↳ Contact</h4>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        duration: 2000,
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={
                        false
                    }
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><div className='flex justify-evenly items-end'>
                        <img src={Woman} alt="" />
                        <img src={Charge} alt="" />
                        <img src={Electric} alt="" />
                        <img src={Friends} alt="" />
                        <img src={Goldring} alt="" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-evenly items-end'>
                            <img src={Woman} alt="" />
                            <img src={Charge} alt="" />
                            <img src={Electric} alt="" />
                            <img src={Friends} alt="" />
                            <img src={Goldring} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-evenly items-end'>
                            <img src={Woman} alt="" />
                            <img src={Charge} alt="" />
                            <img src={Electric} alt="" />
                            <img src={Friends} alt="" />
                            <img src={Goldring} alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='flex flex-col items-center mt-[16vh]'>
                <div className='flex gap-4 items-center'>
                    <h6>Agency & Venture</h6>
                    <span className='rotate-[-90deg] text-lg'>↵</span>
                </div>
                <div className='underline underline-offset-4 text-5xl decoration-2 mt-2'>
                    <h5>About Us</h5>
                </div>
            </div>
        </section>
    )
}

export default Getintouch