import Link from 'next/link'
import React from 'react'
import { CircularRole } from './Icon'

function HireMe() {
  return (
    <div className='fixed left-4 bottom-4 pb-16 '>
       <div className='w-48 flex items-center justify-center relative'>
        <CircularRole className="fill-dark animate-spin-slow"/>
         <Link href="mailto:@dansobaahkenneth@gmail.com"
         className='flex justify-center items-center absolute left-[1/2]  w-16 h-16 text-sm rounded-full top-[48%] -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark'
         >Hire Me</Link>
       </div>
    </div>
  )
}

export default HireMe
