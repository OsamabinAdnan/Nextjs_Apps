import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
  return (
    <nav className='w-full relative flex sm:flex-row flex-col items-center justify-between max-w-[1440px] mx-auto px-4 py-5 gap-2'>
       <Link href={'/'} className='font-bold sm:text-3xl text-lg'>Osama&#039;s <span className='text-primary'>Blogs</span></Link>
       <div className='sm:space-x-10 space-x-2'>
        <Link href='/about' className='hover:text-primary sm:text-lg text-sm font-bold transition-all duration-300 hover:scale-110'>About</Link>
        <Link href='/contact' className='hover:text-primary sm:text-lg text-sm font-bold transition-all duration-300 hover:scale-110'>Contact</Link>
       </div>
       <ModeToggle/>
    </nav>
  )
}
