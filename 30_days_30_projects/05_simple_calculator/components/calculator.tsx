// Enable client-side rendering in Next.js
'use client'

// Import necessary React hooks and components
import React, { ChangeEvent, useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
// Import icons for theme toggle
import { Sun, Moon } from 'lucide-react'

// Main Calculator component
export default function Calculator() {
    // State management using useState hooks
    const [num1, setNum1] = useState<string>('') // First number input
    const [num2, setNum2] = useState<string>('') // Second number input
    const [result, setResult] = useState<string>('') // Calculation result
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false) // Theme toggle state
    const [error, setError] = useState<string>('') // Error message state
    const [mounted, setMounted] = useState(false) // Component mount state for animations

    // Effect to handle component mounting animation
    useEffect(() => {
        setMounted(true)
    }, [])

    // Function to toggle between light and dark theme
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle('dark')
    }

    // Enhanced input validation function with detailed checks
    const validateInput = (): boolean => {
        // Check if both inputs are provided
        if (!num1 || !num2) {
            setError('Please enter both numbers.')
            return false
        }
        // Validate if inputs are valid numbers
        if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
            setError('Please enter valid numbers.')
            return false
        }
        // Clear any previous errors if validation passes
        setError('')
        return true
    }

    // Event handler for the first number input
    const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
        setNum1(e.target.value)
    }

    // Event handler for the second number input
    const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
        setNum2(e.target.value)
    }

    // Mathematical operations with input validation and error handling

    // Addition operation
    const add = (): void => {
        if (!validateInput()) return
        try {
            const result = (parseFloat(num1) + parseFloat(num2)).toFixed(2)
            setResult(result)
            setError('')
        } catch (err) {
            setError(`Calculation error occurred: ${err}`)
        }
    }

    // Subtraction operation
    const subtract = (): void => {
        if (!validateInput()) return
        try {
            const result = (parseFloat(num1) - parseFloat(num2)).toFixed(2)
            setResult(result)
            setError('')
        } catch (err) {
            setError(`Calculation error occurred: ${err}`)
        }
    }

    // Multiplication operation
    const multiply = (): void => {
        if (!validateInput()) return
        try {
            const result = (parseFloat(num1) * parseFloat(num2)).toFixed(2)
            setResult(result)
            setError('')
        } catch (err) {
            setError(`Calculation error occurred: ${err}`)
        }
    }

    // Division operation with zero division check
    const divide = (): void => {
        if (!validateInput()) return
        try {
            // Prevent division by zero
            if (parseFloat(num2) === 0) {
                setError('Division by zero is not allowed')
                return
            }
            const result = (parseFloat(num1) / parseFloat(num2)).toFixed(2)
            setResult(result)
            setError('')
        } catch (err) {
            setError(`Calculation error occurred: ${err}`)
        }
    }

    // Function to reset all states
    const clear = (): void => {
        setNum1('')
        setNum2('')
        setResult('')
        setError('')
    }

    // Main UI render function
    return (
        // Main container with responsive layout and theme support
        <div className='flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500'>
            {/* Theme toggle button */}
            <Button 
                onClick={toggleTheme} 
                className='absolute top-4 right-4 p-2 rounded-full hover:scale-110 transition-transform'
                variant='ghost'
            >
                {/* Dynamic theme icon based on current mode */}
                {isDarkMode ? (
                    <Sun className='h-6 w-6 text-yellow-400 animate-spin-once' />
                ) : (
                    <Moon className='h-6 w-6 text-blue-500 animate-pulse' />
                )}
            </Button>

            {/* Main calculator card with animations */}
            <Card className={`w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl 
                ${mounted ? 'animate-float' : 'opacity-0'} 
                transition-all duration-300 hover:shadow-3xl`}>
                {/* Calculator title */}
                <CardHeader>
                    <CardTitle className='text-3xl font-extrabold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                        Standard Calculator
                    </CardTitle>
                </CardHeader>

                {/* Calculator content */}
                <CardContent className='space-y-6'>
                    {/* Error message display with animation */}
                    {error && (
                        <div key={error} className='p-3 mb-4 text-red-500 dark:text-red-300 bg-red-50 dark:bg-red-950 rounded-lg 
                            border border-red-200 dark:border-red-800 animate-shake'>
                            ⚠️ {error}
                        </div>
                    )}

                    {/* Input fields grid */}
                    <div className='grid grid-cols-2 gap-5'>
                        {/* First number input */}
                        <div className='flex flex-col space-y-3'>
                            <Label className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                First Number
                            </Label>
                            <Input
                                value={num1}
                                onChange={handleNum1Change}
                                placeholder='Enter number'
                                className='rounded-xl py-5 text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                                    transition-all duration-300 hover:scale-[1.02]'
                            />
                        </div>
                        {/* Second number input */}
                        <div className='flex flex-col space-y-3'>
                            <Label className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                                Second Number
                            </Label>
                            <Input
                                value={num2}
                                onChange={handleNum2Change}
                                placeholder='Enter number'
                                className='rounded-xl py-5 text-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                                    transition-all duration-300 hover:scale-[1.02]'
                            />
                        </div>
                    </div>

                    {/* Operation buttons grid */}
                    <div className='grid grid-cols-4 gap-3'>
                        {/* Dynamic operation buttons with custom styling */}
                        {['+', '-', '×', '÷'].map((op, i) => (
                            <Button
                                key={op}
                                onClick={[add, subtract, multiply, divide][i]}
                                className={`text-3xl font-black h-14 rounded-xl transition-all duration-300 
                                    ${i === 0 ? 'hover:bg-blue-100 dark:hover:bg-blue-900' : ''}
                                    ${i === 1 ? 'hover:bg-red-100 dark:hover:bg-red-900' : ''}
                                    ${i === 2 ? 'hover:bg-green-100 dark:hover:bg-green-900' : ''}
                                    ${i === 3 ? 'hover:bg-purple-100 dark:hover:bg-purple-900' : ''}
                                    active:scale-95`}
                                variant='outline'
                            >
                                {op}
                            </Button>
                        ))}
                    </div>

                    {/* Result display section */}
                    <div className='space-y-3'>
                        <Label className='text-sm font-medium text-gray-600 dark:text-gray-300'>
                            Result
                        </Label>
                        <Input
                            value={result}
                            readOnly
                            placeholder='Result will appear here'
                            className={`rounded-xl py-5 text-lg font-bold ${result ? 'animate-result-pop' : ''} 
                                bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800`}
                        />
                    </div>

                    {/* Clear button with gradient and animation */}
                    <Button 
                        onClick={clear}
                        className='w-full py-6 rounded-xl text-lg font-bold bg-gradient-to-r from-red-500 to-pink-500 
                            hover:from-red-600 hover:to-pink-600 transition-all duration-300 hover:scale-[1.02] 
                            shadow-lg hover:shadow-red-200 dark:hover:shadow-red-900'
                    >
                        Clear All
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}