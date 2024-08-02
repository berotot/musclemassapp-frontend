import React from 'react'
import { Navbar } from '../component/Navbar'

export const Profile = () => {
  return (
    <div className='p-4 h-screen'>
      <Navbar />
      <main className='p-4 h-screen'>
        <div className=''>
          <div className='h-[120px]  w-[120px] animate-pulse rounded-full   bg-slate-300 ' />
        </div>
      </main>
    </div>
  )
}
