'use client'
import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'


export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

    useEffect(() => {
        const root = document.documentElement

        if(isDarkMode) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [isDarkMode])
  return (
    <div className='absolute top-4 right-8'>
        <button
            onClick={()=>setIsDarkMode(!isDarkMode)}
            className='hover:scale-150 hover:bg-transparent transition-all duration-300'>
            {isDarkMode ? <MdLightMode color='yellow'/> : <MdDarkMode color='#3a59d1'/>}
        </button>
    </div>
  )
}
