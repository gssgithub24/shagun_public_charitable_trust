import React from 'react'
import AccessDeniedSvg from '../../Assets/svgs/AccessDenied.svg'
const AccessDenied = () => {
  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600'>
        <div className='md:h-[50vh] h-[40vh]'>
        <img src={AccessDeniedSvg} className='h-full' alt="" />
        </div>
        <p className=' font-semibold text-2xl text-zinc-700'>Access Denied</p>
        <p className='mt-3 text-xl text-zinc-700 text-center'>You don't have permission to access this page </p>
      </div>
    </>
  )
}

export default AccessDenied
