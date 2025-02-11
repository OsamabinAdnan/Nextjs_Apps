"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function CountDown() {
  // State to manage the duration input
  const [duration, setDuration] = useState<number | string>("");
  // State to manage the countdown timer value
  const [timeLeft, setTimeLeft] = useState<number>(0);
  // State to track if the timer is active
  const [isActive, setIsActive] = useState<boolean>(false);
  // State to track if the timer is paused
  const [isPaused, setIsPaused] = useState<boolean>(false);
  // Reference to store the timer ID
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Function to handle setting the duration of the countdown
  const handleSetDuration = () => {
    if (typeof duration === "number" && duration > 0) {
      setTimeLeft(duration); //Set the countdown timer
      setIsActive(false); //Reset active state
      setIsPaused(false); //Reset paused state
      // Clear any existing timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };
  // Function to start the countdown timer
  const handleStart = (): void => {
    if (timeLeft > 0) {
      setIsActive(true); // Set the timer as active
      setIsPaused(false); // Unpause the timer if it was paused
    }
  };
  // Function to pause the countdown timer
  const handlePause = (): void => {
    if (isActive) {
      setIsActive(false); // Set the timer as inactive
      setIsPaused(true); // Set the timer as paused
      // Clear any existing timer
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };
  // Function to reset the countdown timer
  const handleReset = (): void => {
    setIsActive(false); // Set the timer as inactive
    setIsPaused(false); // Set the timer as not paused
    setTimeLeft(typeof duration === "number" ? duration : 0); // Reset the timer to the original duration
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  // useEffect hook to manage the countdown interval
  useEffect(() => {
    // If the timer is active and not paused
    if (isActive && !isPaused) {
      // Set an interval to decrease the time left
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          // If time is up, clear the interval
          if (prevTime <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          // Decrease the time left by one second
          return prevTime - 1;
        });
      }, 1000); // Interval of 1 second
    }
    // Cleanup function to clear the interval
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, isPaused]); // Dependencies array to rerun the effect

  // Function to format the time left into mm:ss format
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60); // Calculate minutes
    const seconds = time % 60; // Calculate seconds
    // Return the formatted string
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  // Function to handle changes in the duration input field
  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setDuration(Number(e.target.value) || ""); // Update the duration state
  };

  // JSX return statement rendering the Countdown UI
  return (
    <>
      {/* Full-page container with gradient background */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        {/* Timer box with glassmorphism effect */}
        <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border border-white/30">
          {/* Title with a colorful gradient effect */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-4">
            <span className="text-black">Countdown Timer</span>{" "}
            <span className=" bg-none">⏳</span>
          </h1>

          {/* Input and Set Button */}
          <div className="flex flex-col sm:flex-row items-center gap-2 mb-6">
            <Input
              type="number"
              id="duration"
              placeholder="Enter duration (seconds)"
              value={duration}
              onChange={handleDurationChange}
              className="w-full sm:flex-1 p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white text-black shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-lg shadow-md"
              onClick={handleSetDuration}
            >
              Set ⏲️
            </Button>
          </div>

          {/* Displaying the countdown time */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-black mb-8 text-center drop-shadow-lg">
            {formatTime(timeLeft)}
          </div>

          {/* Action buttons with animations */}
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
            <Button
              onClick={handleStart}
              className="w-full sm:w-auto bg-green-400 hover:bg-green-500 text-white font-bold px-5 py-3 rounded-lg shadow-md transform hover:scale-105 transition-all duration-500"
            >
              {isPaused ? "Resume ▶️" : "Start ▶️"}
            </Button>
            <Button
              onClick={handlePause}
              className="w-full sm:w-auto bg-blue-400 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105"
            >
              Pause ⏸️
            </Button>
            <Button
              onClick={handleReset}
              className="w-full sm:w-auto bg-red-400 hover:bg-red-500 text-white font-bold px-5 py-3 rounded-lg shadow-md transition-all duration-500 transform hover:scale-105"
            >
              Reset 🔄
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
