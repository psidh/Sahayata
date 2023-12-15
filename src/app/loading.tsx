import React from 'react'

export default function loading() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center w-[10%]'>
      <img src="/loading.gif" alt="Loading GIF" className='w-1/2 h-1/2' />
    </div>
  )
}
