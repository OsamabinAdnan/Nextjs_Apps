'use client';

/**
 * RandomJoke Component
 * 
 * This component creates a random joke generator that fetches jokes from an external API.
 * It displays the setup and punchline of the joke with loading states and error handling.
 * 
 * Features:
 * - Automatic joke fetching on component mount
 * - Manual joke fetching via button click
 * - Loading states
 * - Error handling
 * - Responsive design
 */

import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

// API endpoint for fetching random jokes
const JOKE_API_URL = 'https://official-joke-api.appspot.com/random_joke';

// TypeScript interface for the joke API response
interface JokeResponse{
    setup: string;    // The setup/question part of the joke
    punchline: string; // The punchline/answer part of the joke
}

export default function RandomJoke() {
    // State management using React hooks
    const [joke, setJoke] = useState<string>('') // Stores the current joke
    const [error, setError] = useState<string | null>(null) // Handles error messages
    const [isLoading, setIsLoading] = useState<boolean>(false) // Tracks loading state

    // Fetch a joke when the component first mounts
    useEffect(()=> {
        fetchJoke();
    }, [])

    /**
     * Fetches a random joke from the API
     * Handles loading states and error cases
     * Updates the joke state with the fetched content
     */
    async function fetchJoke(): Promise<void> {
        setIsLoading(true)
        try {
            setError(null) // Reset any previous errors
            const response = await fetch(JOKE_API_URL)

            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data: JokeResponse = await response.json()
            // Combine setup and punchline with an emoji separator
            setJoke(`${data.setup} | 👉 ${data.punchline}`)
        } catch (error) {
            console.log('Error fetching joke: ', error)
            setError('Failed to fetch a joke. Please try again later.')
            setJoke('')
        } finally {
            setIsLoading(false)
        }
    }

    // Component UI render
    return (
        <div className='flex flex-col items-center justify-center h-[80vh] relative'>
            {/* Main card container with purple shadow effect */}
            <div className='flex flex-col items-center justify-center max-w-md rounded-2xl border shadow-xl p-8 w-full transform-transition duration-300 ease-in-out gap-8 shadow-purple-500'>
                {/* Title section */}
                <h1 className='md:text-2xl text-lg font-bold text-center'>😂 Random Joke Generator 👈</h1>
                
                {/* Joke display area */}
                <div className='md:text-lg text-md font-semibold text-center'>
                    {joke || 'Loading...'}
                </div>

                {/* Action button with loading state */}
                <Button
                    onClick={fetchJoke}
                    disabled={isLoading}
                    className='font-bold py-2 px-4 rounded-full'>
                    {isLoading ? 'Loading...': 'Get Another Joke'}
                </Button>

                {/* Error message display */}
                {error && (
                    <div className='text-red-500 text-center mt-4'>
                        {error}
                    </div>
                )}
            </div>
        </div>
    )
}
