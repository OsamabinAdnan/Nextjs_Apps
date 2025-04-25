'use client'

import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(()=> {
        const root = window.document.documentElement;

        if (darkMode){
            root.classList.add('dark')
        }
        else {
            root.classList.remove('dark')
        }
    }, [darkMode])
  return (
    <div className='flex justify-end p-4'>
        <Button
            onClick={()=>setDarkMode(!darkMode)}
            variant='outlined'
            className='hover:opacity-50'
        >
            {darkMode ? '🌞' : '🌑'}
        </Button>
    </div>
  )
}
