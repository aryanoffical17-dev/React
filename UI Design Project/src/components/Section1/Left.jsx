import React from 'react'
import LeftContent from './LeftContent';
import Arrow from './Arrow';

function Left() {
  return (
    <div className='flex flex-col justify-between min-w-0  '>
     <LeftContent/>
     <Arrow/> 
    </div>
  )
}

export default Left