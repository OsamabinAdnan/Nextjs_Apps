'use client'

import { PointMaterial, Points } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import React, { useRef, useMemo } from "react"
import * as THREE from "three"

// Define the shape of props that can be passed to ParticleField component
interface ParticleFieldProps {
    count?: number;        // Total number of particles
    colors?: string[];     // Array of colors for particle groups
    size?: number;         // Size of each particle
    speed?: number;        // Animation rotation speed
    rotationFactor?: number; // Factor affecting secondary rotation
}

/**
 * ParticleField component creates an animated 3D particle field with multiple color groups
 * Each color group contains an equal portion of the total particles
 * Particles rotate continuously in 3D space
 */
const ParticleField = ({ 
    count = 3000,                                               // Default 3000 total particles
    colors = ['#1B4D3E', '#27445D', '#E52020', '#FFB200'],    // Default colors array
    size = 0.04,                                               // Default particle size
    speed = 0.008,                                             // Default rotation speed
    rotationFactor = 0.0003                                    // Default secondary rotation factor
}: ParticleFieldProps) => {
    // Array to store references to each Points object for animation
    const groupRefs = useRef<(THREE.Points | null)[]>([]);

    // Create particle positions for each color group
    // Memoized to prevent recalculation on every render
    const colorGroups = useMemo(() => {
        return colors.map(color => {
            // Calculate positions for particles in this color group
            const positions = new Float32Array(Math.floor(count / colors.length) * 3);
            // Fill array with random positions in 3D space
            for (let i = 0; i < positions.length; i++) {
                positions[i] = (Math.random() - 0.5) * 10; // Random position between -5 and 5
            }
            return { positions, color };
        });
    }, [count, colors]); // Only recalculate if count or colors change

    // Animation loop - runs on every frame
    useFrame(() => {
        groupRefs.current.forEach(ref => {
            if (ref) {
                // Rotate each particle group around Y and X axes
                ref.rotation.y += speed;            // Primary rotation
                ref.rotation.x += speed * rotationFactor; // Secondary rotation
            }
        });
    });

    return (
        <>
            {/* Map each color group to a Points component */}
            {colorGroups.map((group, index) => (
                <Points 
                    key={index}
                    // Store reference to Points object for animation
                    ref={(el) => {
                        groupRefs.current[index] = el;
                    }}
                    positions={group.positions} 
                    stride={3}  // 3 values per vertex (x, y, z)
                    frustumCulled={false} // Disable frustum culling for better performance
                >
                    {/* Material properties for particles in this group */}
                    <PointMaterial
                        transparent
                        color={group.color}
                        size={size}
                        sizeAttenuation     // Scale points based on distance from camera
                        depthWrite={false}  // Prevent depth fighting between particles
                        blending={THREE.AdditiveBlending} // Blend colors for glowing effect
                    />
                </Points>
            ))}
        </>
    );
};

/**
 * Main background component that sets up the Three.js scene
 * Renders a fullscreen canvas with animated particle field
 */
export default function ThreeBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{position: [0, 0, 5], fov: 75}}> {/* Configure 3D camera */}
                <ambientLight intensity={0.2}/> {/* Add subtle ambient lighting */}
                <ParticleField /> {/* Render particle field with default props */}
            </Canvas>
        </div>
    );
}