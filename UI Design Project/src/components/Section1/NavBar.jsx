import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-15' >
        <h4 className='bg-black text-white px-3 py-3
         rounded-full uppercase text '>Target Audience</h4>
        <button className='bg-gray-200 uppercase rounded-full px-2 py-2 tracking-wide text-sm'>Digital Banking Platform</button>
        </div>
  )
}

export default NavBar