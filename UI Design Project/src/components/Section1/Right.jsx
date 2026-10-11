import React from 'react'
import RightCard from './RightCard';

function Right(props) {
  return (
    <div className='grid min-w-0 grid-cols-1 gap-5 p-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-6'>
        {props.users.map(function(elem,index){
            return <RightCard 
            key={elem.tag}
            image={elem.Image}
            intro={elem.intro}
            tag={elem.tag}
            number={index + 1}
            
            />
        })}
    </div>
  )
}

export default Right
