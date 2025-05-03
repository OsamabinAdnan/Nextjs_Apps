'use client'

import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState<boolean>(false)

    useEffect(() => {
        const root = window.document.documentElement

        if (darkMode) {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [darkMode])

  return (
    <div className='absolute top-4 right-8 z-10'>
        <button 
            onClick={()=> setDarkMode(!darkMode)}
            className='hover:bg-transparent'
            >
            {darkMode ? <MdLightMode color='yellow'/>: <MdDarkMode color='#3A59D1'/>}
        </button>
    </div>
  )
}
