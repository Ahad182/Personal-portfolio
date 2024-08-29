import React from 'react';
import { LuMonitorStop } from "react-icons/lu";
import { FaBarsProgress } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";






const Skills = () => {
  return (
    <>
      <div id='skills' className='w-[70%] md:w-[80%] mx-auto'>
      <h1 className='uppercase my-6 text-3xl text-PrimaryColor text-center font-bold'> Skills</h1>
      <div className="skill-container grid grid-cols-1 md:grid-cols-2 gap-5">

        <div  data-aos="flip-left"  data-aos-duration="3000" className="skp-3 flex items-center flex-col justify-center border mb-3 border-[#8892B0]  shadow-[0_0px_5px_2px_#64FFDA] hover:scale-[1.03] transition-transform duration-500 ease-in-outill-card ">
            <h1 className='text-3xl text-PrimaryColor font-bold mt-3'>FRONTEND</h1>
             <div className='text-red-700  text-4xl my-4 font-bold text-center'><LuMonitorStop/></div>
             <div className="language  px-7 flex items-center justify-around flex-wrap gap-4 my-5 ">
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2' ><img src="Icons/React JS.png" alt="" className='w-8' />REACT</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/Redux.png" alt="" className='w-8' />Redux-Toolkit</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/JSX.png" alt="" className='w-8' />JSX</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/JavaScript.png" alt="" className='w-8' />Javascript</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/HTML.png" alt="" className='w-8' />HTML</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/CSS.png" alt="" className='w-8' />CSS</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/Bootstrap.png" alt="" className='w-8' />Bootstrap</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/Tailwind CSS.png" alt="" className='w-8' />tailwind css</span>
             </div>
        </div>
        <div data-aos="flip-right"  data-aos-duration="3000" className="skp-3 flex items-center flex-col justify-center border mb-3 border-[#8892B0]  shadow-[0_0px_5px_2px_#64FFDA] hover:scale-[1.03] transition-transform duration-500 ease-in-outill-card ">
            <h1 className='text-3xl text-PrimaryColor font-bold mt-3'>BACKEND</h1>
             <div className='text-red-700 text-4xl my-4 font-bold text-center'><FaBarsProgress/></div>
             <div className="language  px-7 flex items-center justify-around flex-wrap gap-4 my-5 ">
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/python.png" alt="" className='w-8' />Python</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/DJANGO.png" alt="" className='w-8' />Django</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/DRF.png" alt="" className='w-8' />Django Rest-Framework</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/MySQL.png" alt="" className='w-8' />SQL</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/PostgresSQL.png" alt="" className='w-8' />PostgresSQL</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/SQLite.png" alt="" className='w-8' />SQLight</span>
             </div>
        </div>
        <div data-aos="flip-right"  data-aos-duration="3000" className="skp-3 flex items-center flex-col justify-center border mb-3 border-[#8892B0]  shadow-[0_0px_5px_2px_#64FFDA] hover:scale-[1.03] transition-transform duration-500 ease-in-outill-card ">
            <h1 className='text-3xl text-PrimaryColor font-bold mt-3'>LANGUAGES</h1>
             <div className='text-red-700 text-4xl my-4 font-bold text-center'><MdLanguage/></div>
             <div className="language  px-7 flex items-center justify-around flex-wrap gap-4 my-5 ">
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/python.png" alt="" className='w-8' />Python</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/C++.png" alt="" className='w-8' />C++</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/C.png" alt="" className='w-8' />C#</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/JavaScript.png" alt="" className='w-8' />Javascript</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/download.png" alt="" className='w-8' />SQL</span>
             </div>
        </div>
        <div data-aos="flip-left"  data-aos-duration="3000" className="skp-3 flex items-center flex-col justify-center border mb-3 border-[#8892B0]  shadow-[0_0px_5px_2px_#64FFDA] hover:scale-[1.03] transition-transform duration-500 ease-in-outill-card ">
            <h1 className='text-3xl text-PrimaryColor font-bold mt-3'>TOOLS</h1>
             <div className='text-red-700 text-4xl my-4 font-bold text-center'><FaTools/></div>
             <div className="language  px-7 flex items-center justify-around flex-wrap gap-4 my-5 ">
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/Git.png" alt="" className='w-8' />Git</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/Github.png" alt="" className='w-8' />GitHub</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/VS Code.png" alt="" className='w-8' />VS Code</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/Postman.png" alt="" className='w-8' />Postman</span>
                <span className='px-2 py-1 text-xl  bg-transparent border border-PrimaryColor text-white flex items-center gap-2'><img src="Icons/SQLite.png" alt="" className='w-8' />SQLight</span>
             </div>
        </div>

        

      </div>
     
      </div>
    </>
  )
}

export default Skills
