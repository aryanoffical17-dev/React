import React from 'react'

export const NavBar = () => {
  return (
    <div className='h-[13vh] flex justify-between items-center px-[4%]' >
        <h4 className='bg-black text-white px-6 py-3
         rounded-full uppercase text-sm tracking-wide'>Target Audience</h4>
        <button className='bg-gray-200 uppercase rounded-full px-6 py-3 tracking-wide text-sm text-black'>Digital Banking Platform</button>
        </div>
  )
}

export default NavBar