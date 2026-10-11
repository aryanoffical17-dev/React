import React from 'react'

export const NavBar = () => {
  return (
    <div className='flex min-h-[13vh] flex-wrap items-center justify-between gap-3 px-[4%] py-4' >
        <h4 className='rounded-full bg-black px-4 py-2.5 text-xs uppercase tracking-wide text-white sm:px-6 sm:py-3 sm:text-sm'>Target Audience</h4>
        <span className='rounded-full bg-gray-200 px-4 py-2.5 text-right text-xs uppercase tracking-wide text-black sm:px-6 sm:py-3 sm:text-sm'>Digital Banking Platform</span>
        </div>
  )
}

export default NavBar
