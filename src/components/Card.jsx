import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data}) => {
  return (
    <>
       
            <div  data-aos="flip-right"  data-aos-duration="3000" className="card p-3 border mb-3 border-[#8892B0]  shadow-[0_0px_5px_2px_#64FFDA] hover:scale-[1.03] transition-transform duration-500 ease-in-out">
                <img src={data.image} alt="" className='rounded-md h-[200px] shadow-[1px_1px_2px_3px_#64FFDA]'/>
                <div className='flex items-center justify-between my-5'>
                    <h1 className='text-2xl font-semibold text-white'>{data.title}</h1>
                    { data.live?<a href="" className='border border-[#64FFDA] px-4 py-1 rounded-xl text-red-800'>Live</a>:""}
                    
                </div>
                <div className='flex items-center gap-4'>
                    {
                        data.Technologies.map((tech,ind)=>{
                            return(
                                <span key={ind} className='bg-PrimaryColor px-2 py-1 rounded-full text-black'>{tech}</span>
                            )
                        })
                    }
                   
                    
                </div>
                <p className='line-clamp-4 my-3 text-pretty text-textColor text-xl font-mono'>{data.detail}</p>
                <Link to={`/project_detail/${data.id}`}><button className='w-full px-3 py-2 rounded-full bg-PrimaryColor'>Learn More</button></Link>
            </div>
        
    </>
  )
}

export default Card
