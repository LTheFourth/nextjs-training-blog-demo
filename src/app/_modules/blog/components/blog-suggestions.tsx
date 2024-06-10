import { BlogService } from "@/utils/api/blog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogSuggestion() {
  const newPosts = await BlogService.getBlogs({ skip: 1, limit: 4 });

  return (
    <div className='w-full grid grid-cols-12 gap-4'>
      {newPosts.map((b) => (
        <div key={b.id} className='col-span-6 p-6 border border-gray-300  shadow-xl'>
          <Image
            className='w-full'
            src='https://dummyimage.com/qvga'
            width={200}
            height={200}
            alt=''
          />
          <Link href={`/blogs/${b.id}`}>
            <div className='title text-sm my-2 hover:text-blue-700'>
              {b.title}
            </div>
            <div className='text-purple-800 text-sm my-2'>
              Sunday, 1 Jan 2023
            </div>
            <div className='w-full text-sm font-light text-gray-500 max-h-24 truncate text-ellipsis'>
              {b.body}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
