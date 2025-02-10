import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { simpleBlogCard } from "@/sanity/lib/interface";
import Image from "next/image";
import Link from "next/link";
import Slider from "./components/Slider";




export const revalidate = 30; //revalidate every 30 seconds

async function getData() {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) 
    {
      title,
      smallDescription,
      "currentSlug":slug.current,
      titleImage
    }
    `;

    const data = await client.fetch(query);
    return data;
}


export default async function Home() {
  const data:simpleBlogCard[] = await getData();
  return (
    <>
      <div className="mt-20 mb-10">
        <h1 className="text-center text-3xl font-bold dark:text-primary">Welcome to my blogs</h1>
        <p className="mt-5 max-w-3xl text-center mx-auto">Welcome to my blogs, your go-to hub for insightful content on Artificial Intelligence and Information Technology! Dive into the latest trends, innovative solutions, and expert analyses shaping the tech world today. Stay informed, inspired, and ahead in the rapidly evolving landscape of AI and IT.</p>
      </div>
      <div className="mb-10">
        <Slider/>
      </div>
      <h1 className="text-center mt-20 mb-10  text-3xl font-bold dark:text-primary">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 relative">
        {data.map((post, index) => (
          <Card key={index}>
            {/* Article Image */}
            <Image src={urlFor(post.titleImage).url()} alt={post.title} width={500} height={500} className="rounded-t-lg object-cover"/>
            {/* Card title and description */}
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-1 font-bold">{post.title}</h3>
              <p className="mt-2 text-gray-600 line-clamp-3 text-sm dark:text-gray-400">{post.smallDescription}</p>
              <Button asChild className="w-full mt-5">
                <Link href={`/blog/${post.currentSlug}`}>Read more...</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
