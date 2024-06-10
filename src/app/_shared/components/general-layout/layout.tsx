import Link from "next/link";
import { Suspense } from "react";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='w-full h-full'>
      <div className='header h-[10%] w-full border centerlize border-black flex px-4'>
        <Link href='/'>
          <div className='font-extrabold border border-black mx-4 p-2'>The Blog</div>
        </Link>

        <div className='ml-auto flex gap-4 font-bold '>
          <Link href='/' className='hover:text-blue-400'>
            Blog
          </Link>
          <Link href='/' className='hover:text-blue-400'>
            Project
          </Link>
          <Link href='/' className='hover:text-blue-400'>
            Blog
          </Link>
          <Link href='/' className='hover:text-blue-400'>
            Newsletter
          </Link>
        </div>
      </div>
      <div className='body w-full h-[90%] items-center flex flex-col'>
        <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
      </div>
    </div>
  );
}
