import Await from "@/app/_shared/components/await";
import { BlogService } from "@/utils/api/blog";
import Link from "next/link";
import { Suspense } from "react";
import BlogList from "../../components/blog-list";

export default async function BlogListPage({
  searchParams,
}: Readonly<{
  searchParams: { [key: string]: string | string[] | undefined };
}>) {
  const page = typeof searchParams?.page === "string" ? Number(searchParams.page) : 0;
  const limit = 5;
  const promise = BlogService.getBlogs({ limit: limit, skip: page * limit });

  return (
    <div className='w-full'>
      <div className='header mb-3 border-b border-black text-center w-full'>
        <h1 className='text-9xl font-extrabold select-none'>THE BLOG</h1>
      </div>
      <div className='content'>
        <div className='recent-blog text-xl font-bold p-4'>
          <h1 className='my-3'>Recent blog posts</h1>

          <Suspense fallback={<div>Loading</div>}>
          <Await promise={promise}>
            {(blogs) => <BlogList blogs={blogs} />}
          </Await>
          </Suspense>

          <div className='pagination w-full flex content-center gap-2 items-center'>
            <Link
              href={{
                pathname: "/blogs",
                query: {
                  page: page > 1 ? page - 1 : 1,
                },
              }}
              className='btn'>
              Previous
            </Link>
            <Link
              href={{
                pathname: "/blogs",
                query: {
                  page: page + 1,
                },
              }}
              className='btn'>
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
