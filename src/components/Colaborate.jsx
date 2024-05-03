import React from 'react'
import { ball } from '../assets/index'

const Colaborate = () => {
    return (
        <section data-scroll data-scroll-section className='w-full min-h-[100vh] bg-[#FAF8F3] font-[NB] px-10 pt-14'>
            <div className=' pb-4 flex justify-between items-end pt-14 text-[1.6vw] border-b-[1px] border-black'>
                <div>
                    <h2>We operate on a simple philosophy:</h2>
                    <h2>Quality over quantity</h2>
                </div>
            </div>
            <div>
                <h3 className='text-[3vw] px-2 py-2 mt-5'> 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp; We collaborate with five clients each year. This allows for intense focus on the transformation and launch of your brand by our very best team, which is the only team we have. </h3>
            </div>
            <div className='flex justify-center items-center relative'>
                <video autoPlay loop muted className="object-contain w-[45%]">
                    <source src={ball} type="video/webm" />
                </video>
            </div>
        </section>
    )
}

export default Colaborate