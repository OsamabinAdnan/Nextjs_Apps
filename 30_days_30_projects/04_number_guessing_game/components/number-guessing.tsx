// Enable client-side functionality
'use client'

// Import necessary React hooks and components
import { useState, useEffect, ChangeEvent, JSX, KeyboardEvent, useRef } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import React from "react"

// Define TypeScript interface for the game's props
interface NumberGuessingProps {
    gameStarted: boolean,    // Track if the game has started
    gameOver: boolean,       // Track if the game has ended
    paused: boolean,         // Track if the game is paused
    targetNumber: number,    // The number player needs to guess
    userGuess: number | string,  // Player's current guess
    attempts: number         // Number of attempts made
}



// Main game component
export default function NumberGuessing():JSX.Element {
    // State management using React hooks
    const [gameStarted, setGameStarted] = useState<boolean>(false)    // Track game start state
    const [gameOver, setGameOver] = useState<boolean>(false)          // Track game end state
    const [paused, setPaused] = useState<boolean>(false)              // Track pause state
    const [targetNumber, setTargetNumber] = useState<number>(0)       // Store the target number
    const [userGuess, setUserGuess] = useState<number | string>('')   // Store user's current guess
    const [attempts, setAttempts] = useState<number>(0)               // Count number of attempts
    const [feedback, setFeedback] = useState<string>('')              // Store feedback messages
    const [highScore, setHighScore] = useState<number>(0)              // Store and retrieve high score
    

    // Initialize refs to store audio elements for game sound effects
const correctSoundRef = useRef<HTMLAudioElement | null> (null)
const wrongSoundRef = useRef<HTMLAudioElement | null> (null)
    
// Effect hook to initialize audio and load high score on component mount
useEffect(()=> {
    // Check if code is running in browser environment
    if(typeof window !== 'undefined') {
        // Create new Audio objects and assign to refs
        correctSoundRef.current = new Audio('/correct.mp3')
        wrongSoundRef.current = new Audio('/wrong.wav')

        // Retrieve high score from localStorage if it exists
        const storedScore = localStorage.getItem('highScore')
        if (storedScore){
            setHighScore(parseInt(storedScore))
        }
    }
}, []) // Empty dependency array means this runs once on mount
    // Generate new target number when game starts or resumes
    useEffect(()=> {
        if (gameStarted && !paused){
            const randomNumber:number = Math.floor(Math.random()* 100) + 1  // Generate number between 1-100
            setTargetNumber(randomNumber)                                    // Set as target number
        }
    },[gameStarted, paused])  // Effect depends on game state and pause state

    // Initialize new game
    const handleStartGame = ():void => {
        setGameStarted(true)    // Start the game
        setGameOver(false)      // Reset game over state
        setAttempts(0)          // Reset attempts counter
        setPaused(false)        // Ensure game isn't paused
    };

    // Handle game pause
    const handlePauseGame = (): void => {
        setPaused(true)         // Set pause state to true
    }

    // Handle game resume
    const handleResumeGame = (): void => {
        setPaused(false)        // Set pause state to false
    }

    // Process user's guess
    const handleGuess = (): void => {
        // Validate that input is a number
        if (typeof userGuess !== 'number'){
            setFeedback('Please enter a valid number')
            return
        }

        setAttempts(attempts + 1)    // Increment attempt counter

        // Check if guess is correct
        if (userGuess === targetNumber){
            correctSoundRef.current?.play()               // Play success sound
            setGameOver(true)                            // End the game
            if (highScore === 0 || attempts < highScore) {
                setHighScore(attempts)                    // Update high score if better
                localStorage.setItem('highScore', attempts.toString())  // Save to localStorage
            }
        } else if (userGuess < targetNumber){
            setFeedback('Too low! Try again.')           // Give feedback for low guess
            wrongSoundRef.current?.play()                // Play wrong guess sound
        } else {
            setFeedback('Too high! Try again.')          // Give feedback for high guess
            wrongSoundRef.current?.play()                // Play wrong guess sound
        }
    }

    // Reset game for new attempt
    const handleTryAgain = (): void => {
        setGameStarted(false)    // Reset game start state
        setGameOver(false)       // Reset game over state
        setUserGuess('')         // Clear user's guess
        setAttempts(0)           // Reset attempts counter
    }

    // Handle input field changes
    const handleUserGuessChange = (e:ChangeEvent<HTMLInputElement>):void => {
        const value = parseInt(e.target.value)
        // Validate input is within valid range (1-100)
        if (value >= 1 && value <= 100) {
            setUserGuess(value)    // Set valid guess
            setFeedback('')        // Clear any error messages
        } else {
            setFeedback('Please enter a number between 1 and 100')  // Show error for invalid input
        }
    }

    // Handle Enter key press
    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            handleGuess()          // Submit guess when Enter is pressed
        }
    }

    // Render game UI
    return (
        <>
            {/* Main container with responsive design */}
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-700 to-black">
                {/* Game card container */}
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 w-full max-w-md mx-auto">
                    {/* Game title and instructions */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-black">
                    💭 Number Guessing Game 🤔
                    </h1>
                    <p className="text-sm sm:text-base text-center text-black mb-4">
                        Try to guess the number between 1 and 100
                    </p>

                    {/* Start button - shown before game starts */}
                    {!gameStarted && (
                        <div className="flex justify-center mb-4">
                            <Button 
                                className="px-4 py-2 rounded bg-black hover:bg-gray-700 text-white font-bold"
                                onClick={handleStartGame}>
                                Start Game
                            </Button>
                        </div>
                    )}

                    {/* Game controls - shown during active game */}
                    {gameStarted && !gameOver && (
                        <div>
                            <div className="flex justify-center mb-4">
                                {/* Button to resume the game if paused */}
                                {paused ? (
                                    <Button 
                                        className="w-32 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
                                        onClick={handleResumeGame}>
                                        Resume
                                    </Button>
                                ) : (
                                    <Button
                                        className="w-32 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
                                        onClick={handlePauseGame}>
                                        Pause
                                    </Button>
                                )}
                                
                            </div>
                            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mb-4">
                                <Input
                                    type="number"
                                    value={userGuess}
                                    onChange={handleUserGuessChange}
                                    onKeyPress={handleKeyPress}
                                    className="bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 w-full"
                                    placeholder="Enter your guess"
                                />
                                <Button
                                    onClick={handleGuess}
                                    className="w-full sm:w-auto bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                                    Guess
                                </Button>
                            </div>
                            <div className="text-center text-black">
                                {/* Display the number of attempts */}
                                <p>Attempt: {attempts}</p>
                                <p className="text-center text-gray-600">High Score: {highScore} attempts</p>
                            </div>
                            {/* Add feedback message */}
                            {feedback && (
                                <p className="text-center mt-2 text-red-600">
                                    {feedback}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Game over screen - shown after winning */}
                    {gameOver && (
                        <div className="space-y-4">
                            <div className="text-center mb-4 text-black">
                                <h2 className="text-xl sm:text-2xl font-bold">Game Over!</h2>
                                <p className="text-sm sm:text-base mt-2">
                                    You guessed the number in {attempts} attempts.<br />
                                    The number was {targetNumber}
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Button
                                    className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded"
                                    onClick={handleTryAgain}>
                                    Try Again!
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
