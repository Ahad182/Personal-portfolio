import React from 'react'

const Footer = () => {
  return (
    <div className='w-full p-4'>
        <h1 className='text-center text-4xl font-bold text-PrimaryColor'>Abdul Ahad</h1>
        <div className='md:text-center w-full mt-3 text-textColor text-xl'>
            <span className=''>Copyright © {new Date().getFullYear()} Abdul Ahad | All Rights Reserved</span>
        </div>
      
    </div>
  )
}

export default Footer
