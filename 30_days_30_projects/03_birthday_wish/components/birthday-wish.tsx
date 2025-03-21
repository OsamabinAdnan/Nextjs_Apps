'use client' // Marks this as a client-side component
import dynamic from 'next/dynamic' // Enables dynamic importing of components
import React, { useEffect, useState } from 'react' // Import React and hooks
import { motion, AnimatePresence } from 'framer-motion' // Import animation components
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card' // Import UI card components
import { FaBirthdayCake, FaGift } from 'react-icons/fa' // Import cake and gift icons
import { GiBalloons } from 'react-icons/gi' // Import balloon icon
import { Button } from './ui/button' // Import button component

// Define type for Confetti component props
type ConfettiProps = {
    width: number, // Width of the confetti container
    height: number // Height of the confetti container
}

// Dynamically import Confetti component to reduce initial bundle size
const DynamicConfetti = dynamic(() => import('react-confetti'), { ssr: false })

// Define arrays of colors for visual elements
const candleColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']; // Colors for candles
const ballonColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']; // Colors for balloons
const confettiColors = ['#FFD700', '#FFA500', '#FF4500', '#FF0000', '#8B0000', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']; // Colors for confetti

export default function BirthDayWish() {
    // State management using hooks
    const [candleLit, setCandleLit] = useState<number>(0) // Track number of lit candles
    const [balloonPoppedCount, setBalloonPoppedCount] = useState<number>(0) // Track number of popped balloons
    const [showConfetti, setShowConfetti] = useState<boolean>(false) // Control confetti display
    const [windowSize, setWindowSize] = useState<ConfettiProps>({ width: 0, height: 0 }) // Track window dimensions
    const [celebrating, setCelebrating] = useState<boolean>(false) // Track celebration state

    // Define constants
    const totalCandles: number = 5; // Total number of candles
    const totalBalloons: number = 5; // Total number of balloons

    // Effect hook to handle window resizing
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        handleResize() // Initial size calculation
        window.addEventListener('resize', handleResize) // Add resize listener
        return () => window.removeEventListener('resize', handleResize) // Cleanup
    }, [])

    // Effect hook to trigger confetti when all items are activated
    useEffect(() => {
        if (candleLit === totalCandles && balloonPoppedCount === totalBalloons) {
            setShowConfetti(true)
        }
    }, [candleLit, balloonPoppedCount])

    // Handler for lighting candles
    const lightCandle = (index: number) => {
        if (index === candleLit) {
            setCandleLit(prev => prev + 1)
        }
    }

    // Handler for popping balloons
    const popBalloon = (index: number) => {
        if (index === balloonPoppedCount) {
            setBalloonPoppedCount(prev => prev + 1)
        }
    }

    // Function to start the celebration animation
    const celebrate = () => {
        setCelebrating(true) // Start celebration mode
        setShowConfetti(true) // Show confetti

        // Create interval to light candles sequentially
        const interval = setInterval(() => {
            setCandleLit(prev => {
                if (prev < totalCandles)
                    return prev + 1
                clearInterval(interval)
                return prev
            })
        }, 500)
    }

    return (
        <>
            {/* Main container with gradient background */}
            <div className='min-h-screen bg-gradient-to-br from-yellow-500 via-red-300 to-yellow-500 flex items-center justify-center p-4 sm:p-6'>
                {/* Animated card wrapper */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className='w-full max-w-xs sm:max-w-md'
                >
                    {/* Birthday card component */}
                    <Card className='mx-auto overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl border-2 border-white rounded bg-white/70 backdrop-blur-xl p-2 sm:p-4'>
                        {/* Card header section */}
                        <CardHeader className='text-center'>
                            <CardTitle className='text-3xl sm:text-4xl font-bold text-black'>Happy Birthday to you</CardTitle>
                            <CardDescription className='text-xl sm:text-2xl font-semibold text-gray-600'>Osama bin Adnan</CardDescription>
                            <p className='text-md sm:text-lg text-gray-500'>January 02</p>
                        </CardHeader>
                        {/* Main card content */}
                        <CardContent className='space-y-6 text-center'>
                            {/* Candles section */}
                            <div>
                                <h3 className='text-md sm:text-lg font-semibold text-black mb-2'>Light the Candle:</h3>
                                <div className='flex justify-center flex-wrap gap-2 sm:gap-4'>
                                    {[...Array(totalCandles)].map((_, index) => (
                                        <AnimatePresence key={index}>
                                            {/* Conditional rendering for lit/unlit candles */}
                                            {(celebrating && index <= candleLit) || (!celebrating && index < candleLit)
                                                ? (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        exit={{ scale: 0 }}
                                                        transition={{ duration: 0.5, delay: celebrating ? index * 0.5 : 0 }}
                                                    >
                                                        {/* Lit candle icon */}
                                                        <FaBirthdayCake
                                                            className='w-6 h-6 sm:w-8 sm:h-8 transition-colors duration-300 ease-in-out cursor-pointer hover:scale-110'
                                                            style={{ color: candleColors[index % candleColors.length] }}
                                                            onClick={() => lightCandle(index)}
                                                        />
                                                    </motion.div>
                                                ) : (
                                                    // Unlit candle icon
                                                    <FaBirthdayCake
                                                        className='w-6 h-6 sm:w-8 sm:h-8 text-gray-300 transition-colors duration-300 ease-in-out cursor-pointer hover:scale-110'
                                                        onClick={() => lightCandle(index)}
                                                    />
                                                )}
                                        </AnimatePresence>
                                    ))}
                                </div>
                            </div>
                            {/* Balloons section */}
                            <div>
                                <h3 className="text-md sm:text-lg font-semibold text-black mb-2">Pop the balloons:</h3>
                                <div className='flex justify-center flex-wrap gap-2 sm:gap-4'>
                                    {/* Render balloon icons */}
                                    {[...Array(totalBalloons)].map((_, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ scale: 1 }}
                                            animate={{ scale: index < balloonPoppedCount ? 0 : 1 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {/* Balloon icon with color change on pop */}
                                            <GiBalloons
                                                className='w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:scale-110'
                                                style={{ color: index < balloonPoppedCount ? '#D1D5DB' : ballonColors[index % ballonColors.length] }}
                                                onClick={() => popBalloon(index)}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                        {/* Card footer with celebrate button */}
                        <CardFooter>
                            <Button
                                className='bg-black text-white hover:bg-gray-800 transition-all duration-300 rounded w-full sm:w-auto'
                                onClick={celebrate}
                                disabled={celebrating}
                            >
                                Celebrate! <FaGift className='ml-2 h-4 w-4' />
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.div>
                {/* Conditional render of confetti component */}
                {showConfetti && (
                    <DynamicConfetti
                        width={windowSize.width}
                        height={windowSize.height}
                        recycle={false}
                        numberOfPieces={2500}
                        gravity={0.1}
                        colors={confettiColors}
                    />
                )}
            </div>
        </>
    )
}
