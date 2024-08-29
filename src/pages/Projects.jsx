import React from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'
import ProjectData from '../projectData'

const Projects = () => {
   console.log(ProjectData)
  return (
    <>
      <div id='Projects' className='w-[70%] md:w-[80%] mx-auto'>
        <h1 className='uppercase my-6 text-3xl text-PrimaryColor text-center font-bold'> My Projects</h1>
        <div className="card-container grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3   gap-4 ">
           {
            ProjectData.map((item,index)=>{
                return(
                    <Card key={index} data={item}/>
                )
                
            })
           }
       
       
       </div>
      </div>
    </>
  )
}

export default Projects
