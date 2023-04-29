import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

function Footer() {
  return (
    <footer className='w-full border-t-2  border-solid font-medium text-lg border-dark mt-10'>
    <Layout className=' py-8 flex items-center justify-between '>
        <span>{new Date().getFullYear().toString()}&copy; All Right Reserved</span>

        <div className='flex items-center'>
          Build with <span className='text-primary mx-1 text-2xl'>&hearts;</span>
          by &nbsp;<Link href="#"  className='underline underline-offset-2'>IncredibleDev</Link>
        </div>

        <Link href="/" className='underline underline-offset-2'>Devs</Link>
    </Layout>
    </footer>
  )
}

export default Footer
