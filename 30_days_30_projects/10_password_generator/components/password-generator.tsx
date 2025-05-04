"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import {Card} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from 'react-toastify';


// Default export of the GeneratePasswordComponent function
export default function GeneratePassword() {
  // State hooks for managing password generation options and the generated password
  const [length, setLength] = useState<number>(16);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const notify = () => toast("Copied to clipboard!")
  

  // Handler for updating the length state on input change
  const handleLengthChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLength(Number(e.target.value));
  };

  // Function to generate a password based on selected options
  const generatePassword = (): void => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = "";
    if (includeUppercase) allChars += uppercaseChars;
    if (includeLowercase) allChars += lowercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    if (allChars === "") {
        toast.warn("Please select at least one character type."); // Alert if no character types are selected
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex]; // Generate password character by character
    }
    setPassword(generatedPassword); // Set the generated password state
  };

  // Function to copy the password to the clipboard
  const copyToClipboard = (): void => {
    if (!password || password.trim() === "") {
      toast.warn("Please generate a password first!");
      return;
    }

    navigator.clipboard.writeText(password)
      .then(() => {
        toast.success("Password copied to clipboard!");
      })
      .catch((error: Error) => {
        toast.error(`Failed to copy password: ${error.message}`);
        console.error("Clipboard error:", error);
      });
  };

  // Handler for updating the checkbox states
  const handleCheckboxChange =
    (setter: (value: boolean) => void) =>
    (checked: CheckedState): void => {
      if (typeof checked === "boolean") {
        setter(checked);
      }
    };

  // JSX return statement rendering the password generator UI
  return (
    <>
    <ToastContainer position="top-center" autoClose={3000} />
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Center the password generator card within the screen */}
            <Card className="w-full max-w-md p-6 backdrop-blur-xl bg-gradient-to-br from-white/60 to-white/30 dark:from-gray-900/70 dark:to-gray-900/50 border border-white/20 dark:border-gray-700/50 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] dark:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-xl hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.47)] dark:hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.47)] transition-all duration-300 ring-1 ring-white/10 dark:ring-gray-800/50">
                <div className="mx-auto max-w-md space-y-6">
                {/* Header with title and description */}
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Password Generator</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                    Create a secure password with just a few clicks.
                    </p>
                </div>
                {/* Main content area for password options and input */}
                <div className="space-y-4">
                    {/* Input for password length */}
                    <div className="space-y-2">
                    <Label htmlFor="length">Password Length</Label>
                    <Input
                        id="length"
                        type="number"
                        min="8"
                        max="32"
                        value={length}
                        onChange={handleLengthChange}
                        className="w-full"
                    />
                    </div>
                    {/* Checkboxes for character type inclusion */}
                    <div className="space-y-2">
                    <Label>Include:</Label>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                        id="uppercase"
                        checked={includeUppercase}
                        onCheckedChange={handleCheckboxChange(setIncludeUppercase)}
                        />
                        <Label htmlFor="uppercase">Uppercase Letters</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                        id="lowercase"
                        checked={includeLowercase}
                        onCheckedChange={handleCheckboxChange(setIncludeLowercase)}
                        />
                        <Label htmlFor="lowercase">Lowercase Letters</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                        id="numbers"
                        checked={includeNumbers}
                        onCheckedChange={handleCheckboxChange(setIncludeNumbers)}
                        />
                        <Label htmlFor="numbers">Numbers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox
                        id="symbols"
                        checked={includeSymbols}
                        onCheckedChange={handleCheckboxChange(setIncludeSymbols)}
                        />
                        <Label htmlFor="symbols">Symbols</Label>
                    </div>
                    </div>
                    {/* Button to generate password */}
                    <Button type="button" className="w-full" onClick={generatePassword}>
                    Generate Password
                    </Button>
                    {/* Display the generated password and button to copy */}
                    <div className="space-y-2">
                    <Label htmlFor="password">Generated Password</Label>
                    <div className="flex md:flex-row flex-col items-center md:space-x-2 gap-2 ">
                        <Input
                        id="password"
                        type="text"
                        value={password}
                        readOnly
                        className="flex-1"
                        />
                        <Button type="button" onClick={copyToClipboard}>
                        Copy to Clipboard
                        </Button>
                    </div>
                    </div>
                </div>
                </div>
            </Card>
        </div>
    </>
    
  );
}