'use client' // this is a client component
import React, { ChangeEvent, useState } from 'react'
import Alert from '@mui/material/Alert'
import { CheckedState } from '@radix-ui/react-checkbox'
import { Card } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Button } from './ui/button'

export default function PasswordGenerator() {
    // State hooks for managing password generation options and the generated password
    const [length, setLength] = useState<number>(16)
    const [includeUppercase, setIncludeUppercase] = useState<boolean>(true)
    const [includeLowercase, setIncludeLowercase] = useState<boolean>(true)
    const [includeNumbers, setIncludeNumbers] = useState<boolean>(true)
    const [includeSymbols, setIncludeSymbols] = useState<boolean>(true)
    const [password, setPassword] = useState<string>("")

    // Handler for updating the length state on input change
    const handleLengthChange = (e:ChangeEvent<HTMLInputElement>):void => {
        setLength(Number(e.target.value))
    };
    // Function to generate a password based on selected options
    const generatePassword = (): void  => {
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
        const numberChars = "0123456789"
        const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"

        let allChars = ""
        if (includeUppercase) {
            allChars += uppercaseChars
        }
        if (includeLowercase) {
            allChars += lowercaseChars
        }
        if (includeNumbers) {
            allChars += numberChars
        }
        if (includeSymbols) {
            allChars += symbolChars
        }
        
        if (allChars = ""){
            <Alert severity='error' variant='filled'>Please select at least one character type.</Alert>
        }

        let generatedPassword = "";
        for (let i=0; i <length; i++){
            const randomIndex = Math.floor(Math.random()*allChars.length)
            generatedPassword += allChars[randomIndex]
        }
        setPassword(generatedPassword)
    };

    // Function to copy the password to the clipboard
    const copytoClipboard = ():void => {
        navigator.clipboard.writeText(password)
        .then(() => 
            {
                <Alert variant='filled' severity='success'>Password Copy to Clipboard</Alert>
            },
            (error) => {
                <Alert variant='filled' severity='error'>Failed to copy password</Alert>
            }
        );
    };

    // Handler for updating the checkbox states
    const handleCheckboxChange = 
    (setter: (value: boolean) => void) =>
        (checked: CheckedState): void => 
        {
            if (typeof checked === "boolean") {
            setter(checked);
            }
        };


  return (
    <>
        <div className='flex justify-center items-center h-screen'>
            {/* Center the password generator card within the screen */}
            <Card className='w-full max-w-md p-6 shadow-lg rounded-lg'>
                <div className='mx-auto max-w-md space-y-6'>
                    {/* Header with title and description */}
                    <div className='space-y-2 text-center'>
                        <h1 className='text-3xl font-bold'>Password Generator</h1>
                        <p className='text-muted-foreground dark:text-muted-foreground'>Create a secure password with just a few clicks</p>
                    </div>
                    {/* Main content area for password options and input */}
                    <div className='space-y-4'>
                        {/* Input for password length */}
                        <div className='space-y-2'>
                            <Label htmlFor='length'>
                                Password Length
                            </Label>
                            <Input
                                id='length'
                                type='number'
                                min={8}
                                max={32}
                                value={length}
                                onChange={handleLengthChange}
                                className='w-full'
                            />
                        </div>
                        {/* Checkboxes for character type inclusion */}
                        <div className='space-y-2'>
                            <Label>Includes:</Label>
                            {/* Uppercase */}
                            <div className='flex items-center space-x-2'>
                                <Checkbox 
                                    id='uppercase'
                                    checked={includeUppercase}
                                    onCheckedChange={handleCheckboxChange(setIncludeUppercase)}
                                />
                                <Label htmlFor='uppercase'>Uppercase Letter</Label>
                            </div>
                            {/* Lowercase */}
                            <div className='flex items-center space-x-2'>
                                <Checkbox
                                    id='lowercase'
                                    checked={includeLowercase}
                                    onCheckedChange={handleCheckboxChange(setIncludeLowercase)}
                                />
                                <Label htmlFor='lowercase'>Lowercase Letter</Label>
                            </div>
                            {/* Numbers */}
                            <div className='flex items-center space-x-2'>
                                <Checkbox
                                    id='numbers'
                                    checked={includeNumbers}
                                    onCheckedChange={handleCheckboxChange(setIncludeNumbers)}
                                />
                                <Label htmlFor='numbers'>Numbers</Label>
                            </div>
                            {/* Symbols */}
                            <div className='flex items-center space-x-2'>
                                <Checkbox
                                    id='symbols'
                                    checked={includeSymbols}
                                    onCheckedChange={handleCheckboxChange(setIncludeSymbols)}
                                />
                                <Label htmlFor='symbols'>Symbols</Label>
                            </div>
                        </div>
                        <Button type='button' onClick={generatePassword} className='w-full'>
                            Generate Password
                        </Button>
                        {/* Display the generated password and button to copy */}
                        <div className='space-y-2'>
                            <Label htmlFor='password'>Generated Password</Label>
                            <div className='flex items-center space-x-2'>
                                <Input
                                    id='password'
                                    value={password}
                                    type='text'
                                    readOnly
                                    className='flex-1'/>
                                <Button type='button' onClick={copytoClipboard}>
                                    Copy to Clipboard
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </>
  )
}
