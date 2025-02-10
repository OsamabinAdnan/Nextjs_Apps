import { Comments } from '@/sanity/lib/interface'
import React from 'react'

interface Props {
    comments: Array<Comments>
}

export default function AllComments({comments}:Props) {
  return (
    <div className='max-w-[1240px] mx-auto mt-16'>
        <h3 className='text-xl mb-6 font-bold '>All Comments</h3>
        {comments?.length == 0 && <p>No comments yet</p>}
        {comments?.map((comment,index)=>(
            <div key={index} className='border-b border-gray-400/50 py-2 space-y-3'>
                <div className='space-x-2'>
                    <strong>{comment?.name}</strong> 
                    <span className='text-gray-500 text-xs'>{new Date(comment?._createdAt).toLocaleString()}</span>
                </div>
                <div>
                    <p className='text-sm'>{comment?.comment}</p>
                </div>
                
            </div>
        ))}
    </div>
  )
}
