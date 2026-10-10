import React from 'react'
import {MoveRight} from "lucide-react"

function RightCard() {
  return (
    <div className='h-full overflow-hidden relative w-[35%] rounded-4xl bg-red-200'>
        <img className= 'h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
        <div className='absolute p-8 top-0 left-0 h-full w-full bg-amber-300 flex flex-col justify-between'>
            <h2 className='bg-white text-2xl rounded-full h-10 w-10 font-semibold flex justify-center items-center'>1</h2>
            <div>
              <p className='text-10px leading-normal font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, magnam cumque adipisci itaque architecto quaerat eaque sequi natus ullam commodi debitis accusantium aliquam ipsa.</p>
            </div>
            <div>
              <button className='bg-blue-600 text-white font-semibold rounded-2xl  px-7'>Satisfied</button>
              <button><MoveRight size={40} /></button>
            </div>
        </div>
    </div>

  )
}

export default RightCard