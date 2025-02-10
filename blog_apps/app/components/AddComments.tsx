'use client'
import React from 'react'
import {useForm} from 'react-hook-form'

interface Props {
    blogId:string
}

export default function AddComments({blogId}:Props) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data:any) => {
        const {name, email, comment} = data;
        const res = await fetch("/api/comment", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, comment, blogId})
        })
        if(!res.ok){
            console.log('Failed to add a comment');
            return
        }
        reset();
    }

  return (
    <div className='mt-16 max-w-[1240px] mx-auto'>
        <p className='text-xl mb-6 font-bold '>Leave a Comment <span>💬</span></p>
        <form onSubmit={handleSubmit((data) => onSubmit(data))} className='flex flex-col border shadow-md rounded px-8 py-6 mb-10 dark:border-primary'>

            {/* Name */}
            <label>Name</label>
            <input {...register('name', { required: true })} className='mb-4 px-2 py-2 bg-slate-200 dark:bg-slate-800 text-black dark:text-white'/>
            {errors.name && <p className='text-sm text-red-600'>Name is required.</p>}

            {/* Email */}
            <label>Email <span className='text-xs'>(Your email will not be published!)</span></label>
            <input {...register('email', { 
                required:true, 
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ 
                })} 
                className='mb-4 px-2 py-2 bg-slate-200 dark:bg-slate-800 text-black dark:text-white'/>
            {errors.email && <p className='text-sm text-red-600'>Please enter a valid email address</p>}

            {/* Comment */}
            <label>Comment</label>
            <textarea {...register('comment', { required: true, minLength:2 })} className='mb-4 px-2 py-2 bg-slate-200 dark:bg-slate-800 text-black dark:text-white'/>
            {errors.comment && <p className='text-sm text-red-600'>Minimum 2 characters.</p>}
            
            {/* Submit */}
            <input type="submit" 
                className={`cursor-pointer bg-primary text-white rounded py-2 hover:bg-blue-700 ${isSubmitting ? 'opacity-50' : ''}`} 
                disabled={isSubmitting} 
                value={isSubmitting? "Submitting...": "Submit"}/>
        </form>
    </div>
  )
}
