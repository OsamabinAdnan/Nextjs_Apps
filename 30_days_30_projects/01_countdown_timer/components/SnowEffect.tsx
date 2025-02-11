"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import CountDown from "./count-down";

export default function SnowEffect() {
    useEffect(() => {
        // Set the duration of the snowfall effect (100 seconds)
        const duration = 100 * 1000;  
        // Calculate the timestamp when the snowfall should stop
        const animationEnd = Date.now() + duration;
        
        // Function to generate a random number between a given range
        const randomInRange = (min: number, max: number) =>
            Math.random() * (max - min) + min;

        // Function to create the snow effect using confetti
        const snow = () => {
            // Stop the animation when the duration ends
            if (Date.now() > animationEnd) return;

            // Generate snow particles using confetti
            confetti({
                particleCount: 50, // Number of snowflakes per frame
                startVelocity: 0, // Initial velocity (0 for a gentle effect)
                ticks: 120, // How long each snowflake lasts
                origin: {
                    x: Math.random(), // Random horizontal position
                    y: 0, // Start from the top
                },
                colors: ["#ffffff", "#C0C0C0"], // White and light blue colors
                shapes: ["circle"], // Snowflakes in different shapes
                gravity: randomInRange(0.6, 0.8), // Random falling speed
                scalar: randomInRange(0.2, 0.8), // Random size variation
            });

            // Recursively call the function to continue snowfall
            requestAnimationFrame(snow);
        };

        // Start the snowfall effect
        snow();
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className="h-screen w-full bg-black flex items-center justify-center text-white">
            <CountDown/>
        </div>
    );
}

