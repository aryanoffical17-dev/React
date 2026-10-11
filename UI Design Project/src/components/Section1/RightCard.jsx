import React from 'react'
import RightCardContent from './RightCardContent'

function RightCard(props) {
  return (
    <article className='group relative h-[64vh] min-h-[26rem] max-h-[36rem] overflow-hidden rounded-4xl bg-gray-900 shadow-md transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl'>
        <img className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105' src={props.image} alt={`${props.tag} banking customers`} />
        <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent' />
        <RightCardContent 
         intro={props.intro}
         tag={props.tag}
         number={props.number}
        
        />
        
    </article>

  )
}

export default RightCard
