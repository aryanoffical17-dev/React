import React from 'react'
import {MoveRight} from "lucide-react"

const RightCardContent = (props) => {
  return (
   <div className='absolute left-0 top-0 flex h-full w-full flex-col justify-between p-5 sm:p-7'>
            <h2 className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl font-semibold'>{props.number}</h2>
            <div className='mt-auto'>
              <p className='mb-6 text-sm leading-relaxed text-white sm:text-base'>{props.intro}</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='rounded-2xl bg-blue-600 px-5 py-2 font-semibold text-white'>{props.tag}</span>
              <button
              type='button'
              aria-label={`Learn more about ${props.tag.toLowerCase()} customers`}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition-colors hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'><MoveRight size={22} /></button>
            </div>
        </div>
  )
}

export default RightCardContent
