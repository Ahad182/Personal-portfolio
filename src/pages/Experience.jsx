import React from 'react'
import { SoftwateHouse_learning } from '../projectData'

const Experience = () => {
  return (
    <>
      <div id='experience' className='w-[70%] md:w-[80%] mx-auto'>
      <h1 className='uppercase my-6 text-3xl text-PrimaryColor text-center font-bold py-10'> Experience</h1><hr className='w-40 ' />

      <div className='my-8 w-full ' data-aos="fade-right"  data-aos-easing="ease-in-sine"  data-aos-duration="1000">
        <h1 className='text-white text-2xl md:text-4xl font-bold my-3'>Frontend Web Developer Intern</h1>
        <div className='flex items-center flex-col md:flex-row gap-7 md:text-2xl font-semibold text-white'><span className='text-red-800 flex items-center gap-2'><img src="./tecno.jfif" alt=""  className="w-12"/> Technosphere</span > <b className='text-white hidden md:flex' > | </b>  <span><span className='text-PrimaryColor'>April</span>, 2024 - <span className='text-PrimaryColor'> September</span>, 2024</span></div>
        <div>
        <ul className='mt-7 text-textColor list-disc list-inside text-justify'>
          {
            SoftwateHouse_learning.map((ele,ind)=>{
              return(
                <li key={ind} className='my-3'><span className='text-PrimaryColor'>{ele.title}</span> {ele.detail} </li>
              )
            })
          }
        </ul>
        </div>
      </div>

      </div>
    </>
  )
}

export default Experience
