'use client'

// Import necessary React hooks and components
import React, { ChangeEvent, useState } from 'react'
// Import UI components from local component library
import { Card, CardDescription, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import ThemeToggle from './Theme_Toggle'
// Import toast notifications library
import toast, { Toaster } from 'react-hot-toast'

// Define the allowed color format types
type ColorFormat = 'hex' | 'rgb' | 'hsl';

export default function ColorPicker() {
    // Initialize state for the selected color (default black)
    const [color, setColor] = useState<string>('#000000')
    // Initialize state for the color format display (default hex)
    const [format, setFormat] = useState<ColorFormat>('hex');
    
    // Handle color input changes from the color picker
    const handleColorChange = (event:ChangeEvent<HTMLInputElement>):void => {
        const newColor = event.target.value;
        setColor(newColor)
    }

    // Function to copy the current color value to clipboard
    const copyToClipboard = ():void => {
        navigator.clipboard.writeText(color)
        .then(() => {
            // Show success toast with custom styling
            toast.success(`Copied ${color} to clipboard!`, {
                duration: 2000,
                style: {
                    border: '1px solid black',
                    padding: '16px',
                    color: 'black',
                },
                iconTheme: {
                    primary: 'green',
                    secondary: '#FFFAEE',
                },
            });
        })
        .catch(() => {
            // Show error toast if clipboard copy fails
            toast.error('Failed to copy to clipboard');
        });
    }

    // Convert color between different format types (hex, rgb, hsl)
    const getFormattedColor = (color: string): string => {
        switch(format) {
            // Return hex format as is
            case 'hex':
                return color;
            // Convert hex to RGB format
            case 'rgb': {
                // Parse hex values to decimal (base 16)
                const r = parseInt(color.slice(1,3), 16);
                const g = parseInt(color.slice(3,5), 16);
                const b = parseInt(color.slice(5,7), 16);
                return `rgb(${r}, ${g}, ${b})`;
            }
            // Convert hex to HSL format
            case 'hsl': {
                // Convert hex to normalized RGB values (0-1)
                const r = parseInt(color.slice(1,3), 16) / 255;
                const g = parseInt(color.slice(3,5), 16) / 255;
                const b = parseInt(color.slice(5,7), 16) / 255;
                
                // Find maximum and minimum RGB values
                const max = Math.max(r, g, b);
                const min = Math.min(r, g, b);
                let h = 0, s = 0, l = (max + min) / 2;
            
                if(max === min) {
                    // Achromatic case (gray)
                    h = s = 0;
                } else {
                    // Calculate saturation and hue
                    const d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    
                    // Calculate hue based on which RGB component is maximum
                    switch(max) {
                        case r:
                            h = (g - b) / d + (g < b ? 6 : 0);
                            break;
                        case g:
                            h = (b - r) / d + 2;
                            break;
                        case b:
                            h = (r - g) / d + 4;
                            break;
                    }
                    // Convert hue to degrees
                    h *= 60;
                }
                // Return formatted HSL string with rounded values
                return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
            }
            
            default:
                return color;
        }
    };

    // Render the component UI
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {/* Toast notification container */}
            <Toaster position='top-center' reverseOrder={false}/>
            
            {/* Theme toggle button container */}
            <div className='flex justify-end w-full px-4'>
                <ThemeToggle/>
            </div>

            {/* Background gradient effect */}
            <div 
                className="fixed inset-0 transition-colors duration-500" 
                style={{
                    background: `linear-gradient(45deg, ${color}aa, transparent)`,
                    zIndex: -1
                }}
            />

            {/* Main color picker card */}
            <Card className='w-full max-w-md mx-auto md:p-4 p-2 grid gap-8 backdrop-blur-sm bg-white/10 transition-all duration-300 shadow-2xl'>
                {/* Card header */}
                <div className='text-center space-y-1'>
                    <CardTitle className='text-2xl font-bold'>Color Picker</CardTitle>
                    <CardDescription>
                        Select the code and copy the hex and rgb values to the clipboard.
                    </CardDescription>
                </div>

                {/* Color display and controls */}
                <div className='grid gap-2'>
                    {/* Color preview box */}
                    <div className='w-full h-48 rounded-lg border-4 border-gray-200 dark:gray-800 transition-all duration-300 shadow-lg hover:scale-105' 
                         style={{backgroundColor:color}}/>
                    
                    {/* Color value display and format toggles */}
                    <div className="flex flex-col gap-2 items-center">
                        <div className="font-semibold text-2xl">
                            {getFormattedColor(color)}
                        </div>
                        {/* Format toggle buttons */}
                        <div className="flex gap-2">
                            {(['hex', 'rgb', 'hsl'] as ColorFormat[]).map(f => (
                                <Button
                                    key={f}
                                    variant={format === f ? 'default' : 'outline'}
                                    onClick={() => setFormat(f)}
                                    className="text-xs"
                                >
                                    {f.toUpperCase()}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Copy to clipboard button */}
                    <Button
                        variant='default'
                        onClick={copyToClipboard}
                        className='w-full'>
                        Copy to Clipboard
                    </Button>

                    {/* Color picker input */}
                    <h3 className='text-center text-lg font-semibold'>Pick a color from the palette below</h3>
                    <Input
                        type='color'
                        value={color}
                        onChange={handleColorChange}
                    />
                </div>
            </Card>
        </div>
    )
}
