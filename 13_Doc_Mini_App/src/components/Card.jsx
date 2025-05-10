import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div  className='footer absolute bottom-0  w-full h-10 left-0 py-3 px-8 '>
            <div className='flex items-center justify-between mb-6'>
                <h5>.4mb</h5>
                <span className='w-5 h-5 bg-sky-200 rounded-full flex items-center justify-center'>
                    <IoMdDownload />
                </span>
            </div>

        </div>
    </div>
  )
}

export default Card