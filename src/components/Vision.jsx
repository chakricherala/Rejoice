import React from 'react'
import { bgVid1, bgVid2, bgVid3, riv_bg, oura_bg, moxo_bg, Moxion, Oura, Rivian } from '../assets/index.js';

const Vision = () => {

    return (
        <section data-scroll data-scroll-section className='w-full min-h-[100vh] bg-[#FAF8F3] font-[NB] px-10'>
            <div className='flex gap-1 justify-center items-center'>
                <h6 className='text-[1vw]'>Agency & Venture</h6>
                <button className='text-[0.8vw] px-2 py-0.5 rounded-full bg-black text-white'>Models</button>
                <span className='rotate-[-90deg] text-[0.8vw]'>↵</span>
            </div>
            <div className='underline underline-offset-4 text-[3vw] flex flex-col items-center decoration-2 '>
                <h5>Explore our services</h5>
                <h5>and engagement models</h5>
            </div>
            <div>
                <div className='flex justify-between items-center mt-[4vh] text-[1.6vw]'>
                    <h4>Transforming visioons into brands</h4>
                    <h4>↳ See the work</h4>
                </div>
                <div className='flex justify-between h-[80vh]'>
                    <div className='w-[32%] h-full object-cover relative'>
                        <img src={Rivian} alt="" className='h-[3vw] absolute z-20 top-[70%] left-1/2 -translate-x-1/2' />
                        <img src={riv_bg} alt="" className='absolute z-10 ease-linear duration-200 delay-100 hover:opacity-0 ' />
                        <video autoPlay loop muted className=" w-full">
                            <source src={bgVid1} type="video/mp4" />
                        </video>
                    </div>
                    <div className='w-[32%] h-full object-cover relative'>
                        <img src={Oura} alt="" className='h-[3vw] absolute z-20 top-[70%] left-1/2 -translate-x-1/2' />
                        <img src={oura_bg} alt="" className='absolute z-10 ease-linear duration-200 delay-100 hover:opacity-0' />
                        <video autoPlay loop muted className=" w-full">
                            <source src={bgVid2} type="video/mp4" />
                        </video>
                    </div>
                    <div className='w-[32%] object-cover h-full relative'>
                        <img src={Moxion} alt="" className='h-[3vw] absolute z-20 top-[70%] left-1/2 -translate-x-1/2' />
                        <img src={moxo_bg} alt="" className='absolute z-10 ease-linear duration-200 delay-100 hover:opacity-0' />
                        <video autoPlay loop muted className=" w-full">
                            <source src={bgVid3} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vision