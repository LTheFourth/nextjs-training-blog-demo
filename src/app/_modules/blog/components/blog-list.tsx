import { Blog } from "@/type/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <>
      {blogs?.slice(0, 1).map((b) => (
        <div key={b.id}>
          <Image
            className='w-full h-52'
            src='https://dummyimage.com/1280x16:3'
            width={600}
            height={300}
            alt=''
          />
          <div className='text-purple-800 text-sm my-2'>Sunday, 1 Jan 2023</div>
          <Link href={`/blogs/${b.id}`}>
            <div className='title text-sm my-2 hover:text-blue-700'>
              {b.title}
            </div>
          </Link>
          <div className='w-full text-sm font-light text-gray-500 overflow-x-hidden whitespace-nowrap break-keep'>
            {b.body}
          </div>

          <div className='tags flex gap-2 mt-2'>
            {b.tags?.map((t, index) => {
              return (
                <div
                  key={index}
                  className={`bg-black hover:bg-gray-600 cursor-pointer text-white shadow text-xs py-1 px-2 rounded-xl`}>
                  {t}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {blogs.slice(1, blogs.length - 1).map((b) => {
        return (
          <div key={b.id} className='w-full grid grid-cols-12 my-8'>
            <div className='col-span-2'>
              <Image
                className='w-42'
                src='https://dummyimage.com/qvga'
                width={200}
                height={200}
                alt=''
              />
            </div>
            <div className='col-span-8'>
              <Link href={`/blogs/${b.id}`}>
                <div className='title text-sm my-2 hover:text-blue-700'>
                  {b.title}
                </div>
                <div className='text-purple-800 text-sm my-2'>
                  Sunday, 1 Jan 2023
                </div>
                <div className='w-full text-sm font-light text-gray-500'>
                  {b.body}
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
