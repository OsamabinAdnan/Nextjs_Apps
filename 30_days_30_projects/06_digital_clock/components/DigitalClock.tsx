'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import * as THREE from 'three' // Required for Vanta.js to work

export default function DigitalClock() {
  // State for managing current time
  const [time, setTime] = useState(new Date ())

  // State to toggle between 24-hour and 12-hour format
  const [is24Hour, setIs24Hour] = useState(true)

  // Ref for the container where Vanta background will be applied
  const vantaRef = useRef<HTMLDivElement>(null)

  // Ref to store the Vanta effect instance for cleanup
  const vantaEffect = useRef<any>(null)

  // Vanta.js background effect initialization
  useEffect(() => {
    const loadVanta = async () => {
      // Dynamically import Vanta Globe effect
      const GLOBE = (await import('vanta/src/vanta.globe')).default

      // Initialize the Vanta effect with custom options
      vantaEffect.current = GLOBE({
        el: vantaRef.current, // Target element
        THREE: THREE, // Provide THREE.js module
        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        // Visual customizations
        backgroundColor: 0x23153c,
        color: 0xff3f81,
        color2: 0xffffff,
        spacing: 35.0,
        size: 1.2
      })
    }

    // Only load the effect if it's not already loaded and the ref is ready
    if (!vantaEffect.current && vantaRef.current) {
      loadVanta()
    }

    // Cleanup: destroy the effect on component unmount
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy()
    }
  }, [])

  // Set up an interval to update the time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval) // Clean up the interval on unmount
  }, [])

  // Format the time string using memoization for performance
  const formattedTime = useMemo(() => {
    const hours = is24Hour
      ? time.getHours().toString().padStart(2, '0') // 24-hour format
      : (time.getHours() % 12 || 12).toString().padStart(2, '0') // 12-hour format

    const minutes = time.getMinutes().toString().padStart(2, '0')
    const seconds = time.getSeconds().toString().padStart(2, '0')
    return `${hours} : ${minutes} : ${seconds}`
  }, [time, is24Hour])

  // Render the UI
  return (
    <div
      ref={vantaRef}
      className="w-full h-screen flex items-center justify-center"
    >
      <Card className="md:p-8 p-4 shadow-lg rounded-2xl bg-white/20 backdrop-blur-sm border-white/20 text-white md:m-0 m-2">
        <div className="flex flex-col items-center justify-center">
          {/* Clock title */}
          <div className="md:text-2xl text-xl font-bold tracking-tight">
            Digital Clock
          </div>

          {/* Subtitle */}
          <div className="text-sm text-gray-300 mb-4">
            Display current time in hours, minutes and seconds
          </div>

          {/* Formatted time display */}
          <div
            className="md:text-6xl text-3xl font-bold tracking-tight"
            aria-live="polite"
          >
            {formattedTime}
          </div>

          {/* Buttons to toggle time format */}
          <div className="mt-6 flex md:flex-row flex-col gap-4">
            <Button
              variant={is24Hour ? 'default' : 'destructive'}
              onClick={() => setIs24Hour(true)}
              className="font-bold"
            >
              24-Hour Format
            </Button>
            <Button
              variant={!is24Hour ? 'default' : 'destructive'}
              onClick={() => setIs24Hour(false)}
              className="font-bold"
            >
              12-Hour Format
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
