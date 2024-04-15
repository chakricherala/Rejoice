import React, { useEffect, useState } from 'react';
// Import React for JSX syntax
import { mainVid } from '../assets/index.js'; // Import video directly
import { navlinks } from '../constants/index.js';
import gsap from 'gsap';

const Main = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        gsap.to('#circle', {
            duration: 0.3, // Adjust duration for desired smoothness // Adjust ease for desired animation curve
            x: cursorPosition.x,
            y: cursorPosition.y,
        });
    }, [cursorPosition]); // Re-run animation on cursorPosition change

    return (
        <section className='w-full h-screen relative'>
            <div id='circle' className='w-[7vw] absolute -z-[1] h-[7vw] rounded-full bg-[#ff5f38] flex items-center justify-center -translate-y-1/2 -translate-x-1/2'>
                Play Reel
            </div>
            <video autoPlay loop muted className="object-cover absolute -z-10 h-[100vh] w-[100vw]">
                <source src={mainVid} type="video/mp4" />
            </video>
            <nav className='text-white text-lg flex justify-between px-10 py-6'>
                {navlinks.map((nav) => (
                    <a href="#" key={nav.id}>
                        {nav.title}
                    </a>
                ))}
            </nav>
            <h1 className='font-[rj] text-center absolute bottom-0 left-0 right-0 leading-none text-white text-[25vw]'>
                {'rejouice'.split(" ").map((item) => (
                    <span>{item}</span>
                ))}
            </h1>
        </section>
    );
};

export default Main;
