import React, { useState } from 'react'
import { FaFileDownload } from "react-icons/fa";
import { Document, Page } from 'react-pdf';
import { FaWindowClose } from "react-icons/fa";

const Resumiwer = ({openResume,setOpenResume}) => {
    

   
  return (
    <div>
      <div className={`absolute z-30 right-0 top-0 left-0 w-full h-screen ${openResume?"hidden":"flex"}   `}>
                <div className='w-[80%] md:w-[70%] overflow-auto mx-auto border  bg-bgColor p-5 rounded-lg shadow-[1px_1px_5px_2px_#64FFDA]'>
                    <div className='flex justify-between items-center mb-5'>
                        <div className='text-4xl font-bold flex items-center gap-5'>
                            <h1 className='text-white '>Resume</h1>
                            <a href="/Resume.pdf" download className='flex'> <FaFileDownload className=' animate-bounce text-white px-2 py-1 cursor-pointer border-[3px] border-green-400' /></a>
                        </div>
                        <div className='text-red-600 text-3xl'>
                            
                            <FaWindowClose onClick={()=>setOpenResume(!openResume)}/>
                        </div>
                    </div>
                    <div>
                        <Document file="./Resume.pdf"  >
                            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
                        </Document>

                    </div>
                </div>
            </div>
    </div>
  )
}

export default Resumiwer
