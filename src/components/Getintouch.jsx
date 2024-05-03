import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Linear, gsap} from 'gsap';
import { useGSAP } from "@gsap/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../style.css';

// import required modules                  
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { Woman, Charge, Electric, Friends, Goldring } from '../assets/index'


const Getintouch = () => {
    useGSAP(() => {
        gsap.from(".imflex", {x: '100%',duration: 10, 
         repeat: Infinity, ease: Linear});
      
      }, {});
    return (
        <section data-scroll data-scroll-section className='w-full h-screen font-[NB] bg-[#FAF8F3] p-6'>
            <div className='mx-6 flex justify-between items-end border-b-[1px] pb-2 border-black relative'>
                <h2 className='text-[5vw] tracking-tighter'>Get in touch.</h2>
                <h4 className='text-[1.4vw]'>↳ Contact</h4>
            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    // loop={true}
                    centeredSlides={true}
                    // autoplay={{
                    //     duration: 2000,
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={
                        false
                    }
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <div className=' imflex flex justify-evenly items-end'>
                        <img src={Woman} alt="" />
                        <img src={Charge} alt="" />
                        <img src={Electric} alt="" />
                        <img src={Friends} alt="" />
                        <img src={Goldring} alt="" />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' imflex flex justify-evenly items-end'>
                            <img src={Woman} alt="" />
                            <img src={Charge} alt="" />
                            <img src={Electric} alt="" />
                            <img src={Friends} alt="" />
                            <img src={Goldring} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' imflex flex justify-evenly items-end'>
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
                    <h6 className='text-[1vw]'>Agency & Venture</h6>
                    <span className='rotate-[-90deg] text-[0.8vw]'>↵</span>
                </div>
                <div className='underline underline-offset-4 text-[3vw] decoration-2'>
                    <h5>About Us</h5>
                </div>
            </div>
        </section>
    )
}

export default Getintouch