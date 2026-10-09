import React from 'react'
import { MoveUpRight } from "lucide-react";

function Left() {
  return (
    <div className='flex flex-col justify-between min-w-0  '>
      <div className='p-6'>
        <h3 className='mb-7 text-6xl font-bold leading-[1.1] tracking-tight'>Prospective <br /> <span className='bg-gray-200'>customer </span> <br />segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit repellat a voluptatem id recusandae,!</p>
      </div>
        <div >
          <MoveUpRight size={50} strokeWidth={2.5} className='mt-4' /> 
        </div>
    </div>
  )
}

export default Left