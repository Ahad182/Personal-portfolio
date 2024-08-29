import React from 'react'

const Contact = () => {
  return (
    <>
      <div id="contact" className='w-[70%] md:w-[80%] mx-auto '>
      <h1 className='uppercase  text-3xl text-PrimaryColor text-center font-bold mt-10'> Contact</h1>
      {/* <hr className='w-40 mx-auto mb-11 border-[5px] border-PrimaryColor rounded-lg my-3'/> */}

      <div data-aos="fade-left"  data-aos-easing="ease-in-sine"  data-aos-duration="1000" className=' w-full md:w-[60%] mx-auto rounded-md shadow-[2px_2px_5px_1px_#64FFDA] my-11  px-5 py-5'>
      <h1 className='text-white text-4xl font-bold ' >Let's Connect</h1>
            <form action="">
                <input type="text" name='name'  placeholder='Name' className='w-full file:outline-none focus:text-white placeholder:text-PrimaryColor text-white bg-transparent border border-PrimaryColor mt-3 p-4 rounded-lg ' required/>
                <input type="email" name='email'  placeholder='Email' className='w-full file:outline-none focus:text-white placeholder:text-PrimaryColor text-white bg-transparent border border-PrimaryColor mt-3 p-4 rounded-lg ' required/>
                <input type="text" name='phone'  placeholder='Phone' className='w-full file:outline-none focus:text-white placeholder:text-PrimaryColor text-white bg-transparent border border-PrimaryColor mt-3 p-4 rounded-lg ' required/>
                <textarea name="message" id="" placeholder='Message' rows="7" className='w-full file:outline-none focus:text-white placeholder:text-PrimaryColor text-white bg-transparent border border-PrimaryColor mt-3 p-4 rounded-lg ' required></textarea>
                <button type='submit' className='bg-PrimaryColor w-full p-4 mt-4 rounded-lg'>Submit</button>
            </form>
      </div>
     
      
      </div>
    </>
  )
}

export default Contact
