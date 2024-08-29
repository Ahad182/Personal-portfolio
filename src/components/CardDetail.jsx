import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProjectData from '../projectData';

const CardDetail = () => {
    const { id } = useParams();
    
    // Find the specific card data based on the id
    const cardData = ProjectData.find(item => item.id === parseInt(id));

    if (!cardData) {
        return <div>Project not found</div>;
    }

    return (
        <div className="card-detail mt-[15vh] px-10 py-16 md:w-2/4 mx-auto">
            <img src={cardData.image} alt={cardData.title} className='rounded-md' />
            <div className='flex items-center justify-between my-5'>
            <h1 className='text-4xl font-semibold text-white'>{cardData.title}</h1>
            <a href="" className='border border-[#64FFDA] px-4 py-1 rounded-xl text-red-800'>Live</a>
            </div>
            
            <div className='flex items-center gap-4 my-3'>
                {
                    cardData.Technologies.map((tech, ind) => (
                        <span key={ind} className='bg-PrimaryColor px-2 py-1 rounded-full text-black'>{tech}</span>
                    ))
                }
            </div>
            <p className='text-justify text-textColor text-xl font-mono'>{cardData.detail}</p>
            <div className='flex items-center gap-10'> 
            <Link><button className='px-3 py-2 bg-PrimaryColor rounded-xl my-5'>Live Demo</button></Link>
            <Link><button className='px-3 py-2 bg-PrimaryColor rounded-xl my-5'>GitHub</button></Link>


            </div>
            
        </div>
    )
}

export default CardDetail;
