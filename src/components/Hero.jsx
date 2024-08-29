import React, { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import DOTS from 'vanta/src/vanta.dots';
import TRUNK from 'vanta/src/vanta.trunk';
import Resumiwer from '../pages/Resumiwer';

const skills = ['Software Engineer', 'Full Stack Web Developer', 'Competitive Programmer'];

const Hero = () => {
    const [dots, setDots] = useState(null);
    const [trunk, setTrunk] = useState(null);
    const [openResume, setOpenResume] = useState(true)
    const myRef = useRef(null);
    const imgraf = useRef(null);


    useEffect(() => {
        if (!dots) {
            setDots(DOTS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x8892B0,
                color2: 0x48415f,
                backgroundColor: 0x0A192F,
                size: 2.00,
                spacing: 20.00
            }));
        }
        if (!trunk) {
            setTrunk(TRUNK({
                el: imgraf.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x64FFDA,
                color2: 0x48415f,
                backgroundColor: 0x0A192F,
                size: 2.00,
                spacing: 2.00
            }));
        }
        return () => {
            if (dots) dots.destroy();
            if (trunk) trunk.destroy();
        };
    }, [dots, trunk]);

    return (
        <>
            <div id='hero' className='w-[100%] mt-[15vh] relative bg-bgColor flex  items-center  justify-between  gap-10 flex-col md:flex-row ' ref={myRef} >
                <div className="right z-20 text-PrimaryColor flex items-center space-x-8 fixed bottom-[200px] -right-[150px] rotate-90">
                    <div className="flex ">
                        <a href="mailto:ahadkhana182@gmail.com" className='hover:text-white'>ahadkhana182@gmail.com</a>
                    </div>
                    <hr className='w-40 bg-textColor border-textColor border-[2px]' />
                </div>

                <div className="left z-20 flex items-center text-PrimaryColor fixed bottom-[180px] -left-32 rotate-90 space-x-10">
                    <div className="social flex gap-3 text-3xl ">
                        <a href='https://www.linkedin.com/in/abdul-ahad-994795238/' target='_blank'><FaGithub className=' -rotate-90 cursor-pointer hover:scale-125 shadow-md rounded-lg shadow-white' /></a>
                        <a href='https://www.linkedin.com/in/abdul-ahad-994795238/' target='_blank'><FaLinkedin className=' -rotate-90 cursor-pointer hover:scale-125 shadow-md rounded-lg shadow-white' /></a>
                        <a href='https://www.linkedin.com/in/abdul-ahad-994795238/' target='_blank'><FaInstagram className=' -rotate-90 cursor-pointer hover:scale-125 shadow-md rounded-lg shadow-white' /></a>


                    </div>
                    <hr className='w-40 bg-textColor border-[2px] border-textColor' />
                </div>

                <div className="hero-content  w-full px-32 py-7 flex items-center  md:flex-row flex-col gap-8 font-mono" data-aos="zome-in" data-aos-duration="1000">
                    <div className=" w-full md:w-3/5">
                        <h1 className='text-PrimaryColor font-bold text-4xl'>Hi! I'm</h1>
                        <h2 className='md:text-7xl font-bold text-4xl text-white my-5'>Abdul Ahad</h2>
                        <div className='text-white font-bold text-4xl flex flex-col md:flex-row'>
                            I'm a &nbsp;
                            <span className='text-PrimaryColor'>
                                <Typewriter
                                    options={{
                                        strings: skills,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </span>
                        </div>
                        <p className='text-justify text-textColor  md:text-xl font-semibold my-8'>
                            I'm Hafiz Abdul Ahad, a Software Engineer and Full Stack Web Developer, dedicated to crafting powerful and user-friendly web applications. I combine expertise in front-end and back-end technologies to deliver seamless, high-performance solutions. Let's connect and create something amazing together.
                        </p>
                        <div className='flex gap-5'>
                            <button onClick={() => setOpenResume(!openResume)} className='bg-PrimaryColor px-4 py-3 text-black text-xl font-bold' >Show CV</button>
                            <a href="/Resume.pdf" download><button className='bg-PrimaryColor px-4 py-3 text-black text-xl font-bold'>Download CV</button></a>
                        </div>
                    </div>

                    <div ref={imgraf} className="w-full md:w-[25vw]  md:h-[60vh] flex items-center justify-center mx-auto rounded-full overflow-hidden order-first md:order-last" data-aos="zome-in" data-aos-duration="1000" >
                        <img src="/mypic.jfif" alt="Profile" className='md:w-[300px] w-36 rounded-full overflow-hidden' />
                    </div>
                     {/* resume viwer component  */}
                <Resumiwer openResume={openResume} setOpenResume={setOpenResume} />
                </div>
               
            </div>
        </>
    );
}

export default Hero;
