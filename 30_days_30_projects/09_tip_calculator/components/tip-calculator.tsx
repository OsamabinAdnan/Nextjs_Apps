'use client'

import React, { ChangeEvent, useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

// Define the shape of our calculator's state using TypeScript interface
interface CalculatorState {
    billAmount: number | null;      // Stores the total bill amount
    tipPercentage: number | null;   // Stores the tip percentage
    numberOfPeople: number;         // Stores number of people splitting the bill
    error: string | null;           // Stores any validation errors
}

// Predefined tip percentage options for quick selection
const TIP_OPTIONS = [10, 15, 20, 25];

export default function TipCalculator() {
    // Initialize the main calculator state
    const [state, setState] = useState<CalculatorState>({
        billAmount: null,
        tipPercentage: null,
        numberOfPeople: 1,
        error: null
    });

    // Separate states for calculated results and UI control
    const [tipAmount, setTipAmount] = useState<number>(0);        // Stores calculated tip per person
    const [totalAmount, setTotalAmount] = useState<number>(0);    // Stores total amount per person
    const [showResult, setShowResult] = useState<boolean>(false); // Controls result visibility

    /**
     * Validates numeric inputs based on business rules
     * @param value - The numeric value to validate
     * @param field - The name of the field being validated
     * @returns Error message string or null if valid
     */
    const validateInput = (value: number, field: string): string | null => {
        if (value < 0) return `${field} cannot be negative`;
        if (field === 'numberOfPeople' && value === 0) return 'Number of people must be at least 1';
        return null;
    };

    /**
     * Event handler for bill amount input changes
     * Validates and updates the bill amount in state
     */
    const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = parseFloat(e.target.value);
        const error = validateInput(value, 'Bill amount');
        setState(prev => ({ ...prev, billAmount: value, error }));
    };

    /**
     * Event handler for custom tip percentage input changes
     * Validates and updates the tip percentage in state
     */
    const handleTipPercentageChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = parseFloat(e.target.value);
        const error = validateInput(value, 'Tip percentage');
        setState(prev => ({ ...prev, tipPercentage: value, error }));
    };

    /**
     * Event handler for number of people input changes
     * Validates and updates the number of people in state
     */
    const handlePeopleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = parseInt(e.target.value);
        const error = validateInput(value, 'Number of people');
        setState(prev => ({ ...prev, numberOfPeople: value, error }));
    };

    /**
     * Handler for quick tip selection buttons
     * Updates tip percentage without validation (pre-validated values)
     */
    const handlePresetTip = (percentage: number): void => {
        setState(prev => ({ ...prev, tipPercentage: percentage, error: null }));
    };

    /**
     * Resets all calculator states to their initial values
     */
    const resetCalculator = (): void => {
        setState({
            billAmount: null,
            tipPercentage: null,
            numberOfPeople: 1,
            error: null
        });
        setTipAmount(0);
        setTotalAmount(0);
        setShowResult(false);
    };

    /**
     * Performs the tip and total amount calculations
     * Updates the tip amount and total amount states
     * Shows the result section if calculation is successful
     */
    const calculateTip = () => {
        const { billAmount, tipPercentage, numberOfPeople } = state;
        if (billAmount && tipPercentage && numberOfPeople) {
            const tip = (billAmount * (tipPercentage / 100));
            const total = billAmount + tip;
            setTipAmount(tip / numberOfPeople);
            setTotalAmount(total / numberOfPeople);
            setShowResult(true);
        }
    };

    /**
     * Formats a number as USD currency
     * @param amount - The number to format
     * @returns Formatted currency string
     */
    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className='w-full max-w-md md:px-6 px-2 md:py-6 py-3 shadow-lg rounded-lg backdrop:blur-lg bg-white/70 border border-gray-200 dark:bg-black/70 dark:border-gray-900'>
                    <CardHeader>
                        <CardTitle className='text-xl font-bold text-center'>Tip Calculator</CardTitle>
                        <CardDescription className='text-sm text-center'>
                            Calculate your tip and split the bill easily
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        {state.error && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-red-500 text-sm text-center"
                            >
                                {state.error}
                            </motion.div>
                        )}
                        
                        <div className='grid gap-2'>
                            <Label htmlFor="bill-amount">Bill Amount</Label>
                            <Input
                                id='bill-amount'
                                type='number'
                                min="0"
                                step="0.01"
                                placeholder='Enter bill amount'
                                value={state.billAmount ?? ''}
                                onChange={handleBillAmountChange}
                            />
                        </div>

                        <div className='grid gap-2'>
                            <Label>Quick Tip Selection</Label>
                            <div className='flex gap-2 flex-wrap'>
                                {TIP_OPTIONS.map(tip => (
                                    <Button
                                        key={tip}
                                        variant={state.tipPercentage === tip ? 'default' : 'outline'}
                                        onClick={() => handlePresetTip(tip)}
                                        className='flex-1'
                                    >
                                        {tip}%
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className='grid gap-2'>
                            <Label htmlFor="tip-percentage">Custom Tip Percentage</Label>
                            <Input
                                id='tip-percentage'
                                type='number'
                                min="0"
                                placeholder='Enter tip percentage'
                                value={state.tipPercentage ?? ''}
                                onChange={handleTipPercentageChange}
                            />
                        </div>

                        <div className='grid gap-2'>
                            <Label htmlFor="people">Number of People</Label>
                            <Input
                                id='people'
                                type='number'
                                min="1"
                                value={state.numberOfPeople}
                                onChange={handlePeopleChange}
                            />
                        </div>

                        <div className='flex gap-2'>
                            <motion.div className='flex-1' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button onClick={calculateTip} className='w-full'>Calculate</Button>
                            </motion.div>
                            <motion.div className='flex-1' whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button onClick={resetCalculator} variant="outline" className='w-full'>Reset</Button>
                            </motion.div>
                        </div>
                    </CardContent>

                    <CardFooter className='flex flex-col space-y-2'>
                        <AnimatePresence>
                            {showResult && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full space-y-2"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Tip Per Person:</span>
                                        <span>{formatCurrency(tipAmount)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">Total Per Person:</span>
                                        <span>{formatCurrency(totalAmount)}</span>
                                    </div>
                                    {state.numberOfPeople > 1 && (
                                        <div className="flex justify-between items-center text-sm text-gray-500">
                                            <span>Total for group:</span>
                                            <span>{formatCurrency(totalAmount * state.numberOfPeople)}</span>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    );
}
