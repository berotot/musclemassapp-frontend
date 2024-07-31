import React from 'react'

export const PageNot = () => {
  document.title = "Page Not Found"
  return (
    <div className='flex justify-center items-center h-screen'>
      <h1 className='font-[poppins] text-[20px]  md:text-[70px]'>Page Not Found | 404</h1>
      </div>
  )
}
