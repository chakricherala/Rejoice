import React from 'react'
import { link, social } from '../constants'

const Footer = () => {
  return (
    <section data-scroll className='w-full h-screen bg-black text-white relative px-10'>
        <div className='flex justify-between pt-10'>
            <div className='flex flex-col gap-6 items-start'>
                <h4 className='text-xl font-normal'>Relax. We've got you.</h4>
                <button type="button" className='border px-4 py-2 text-sm rounded-lg'>Take a seat</button>
            </div>
            <div className='flex gap-10 text-sm'>
                <div className='flex flex-col'>
                    {link.map((navlink) => (
                        <a href="#" key={navlink.id}>
                            {navlink.title}
                        </a>
                    ))}
                </div>
                <div className='flex flex-col'>
                    {social.map((social) =>(
                        <a href="#" key={social.id}>
                            {social.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <h1 className='font-[rj] text-center absolute bottom-0 left-0 right-0 leading-none text-[25vw]'>
                {'rejouice'.split(" ").map((item) => (
                    <span>{item}</span>
                ))}
            </h1>
    </section>
  )
}

export default Footer