import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { FullBlogArticle } from '@/sanity/lib/interface';
import Image from 'next/image';
import React from 'react'
import {PortableText} from '@portabletext/react'
import AddComments from '@/app/components/AddComments';
import AllComments from '@/app/components/AllComments';

export const revalidate = 30; //revalidate every 30 seconds

// Fetch blog data
async function getData(slug:string): Promise<FullBlogArticle> {
    const query = `
        *[_type == 'blog' && slug.current == $slug] {
            "currentSlug":slug.current,
            title,
            content,
            titleImage,
            _id,
            "comments": *[_type == 'comments' && blog._ref == ^._id] | order(_createdAt desc) {
            name,
            comment,
            _createdAt,
            }
        }[0]
    `;
    const data = await client.fetch(query,{slug});
    return data;
}


export default async function BlogArticle({params}:{params:{slug:string}}) {

    const {slug} =  params; // Directly extract slug without awaiting

    if (!slug) {
        throw new Error("Slug is not available.");
    }

    const data: FullBlogArticle = await getData(slug);
   
  return (
    <>  
        <div className='mt-8'>
            <div>
                <span className='block text-base text-center text-primary font-semibold tracking-wide uppercase'>Osama bin Adnan - Blog</span>
                <span className='mt-5 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl'>{data.title}</span>
            </div>
            <Image src={urlFor(data.titleImage).url()} width={800} height={800} alt={data.title} className='rounded-lg mt-8 mx-auto border' priority/>
            <div className='mt-16 prose prose-blue prose-lg dark:prose-invert  mx-auto prose-li:marker:text-primary'>
                <PortableText value={data.content}/>
            </div>
            <div>
                <AddComments blogId={data?._id}/>
            </div>
            <div>
                <AllComments comments={data?.comments || []}/>
            </div>
        </div>
        
    </>
  )
}
