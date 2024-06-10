import { BlogService } from "@/utils/api/blog";
import Image from "next/image";
import BlogSuggestion from "../../components/blog-suggestions";
import PostCommentComponent from "../../components/comment";


export default async function BlogDetail({ postId }: { postId: number }) {
  const post = await BlogService.getBlogDetail(postId);
  return (
    <div className='p-4 w-[50%] flex flex-col content-center items-center'>
      <div className='text-purple-800 text-sm my-2 w-full'>
        Sunday, 1 Jan 2023
      </div>
      <div className='title text-5xl font-bold w-full'>{post.title}</div>
      <div className='flex w-full mt-4 px-2'>
        <div className='mr-4'>Like : {post.reactions.likes}</div>
        <div>DisLike : {post.reactions.dislikes}</div>
      </div>
      <div className='w-full my-4'>
        <Image
          className='w-full h-96'
          src='https://dummyimage.com/1280x4:3'
          width={600}
          height={300}
          alt=''
        />
      </div>

      <div className='w-full'>
        <div className='my-2 text-2xl font-bold'>Introduction</div>
        <div className='text-gray-500'>{post.body}</div>
      </div>

      <div className='w-full my-4'>
        <div className='tags flex gap-4 mt-2'>
          {post.tags?.map((t, index) => {
            return (
              <div
                key={index}
                className={`bg-black hover:bg-gray-600 cursor-pointer text-white shadow text-xs py-2 px-4 rounded-2xl`}>
                {t}
              </div>
            );
          })}
        </div>
      </div>

      <div className='w-full'>
        <PostCommentComponent postId={postId}/>
      </div>

      <div className='w-full'>
        <div className='my-4 text-2xl font-bold'>Explore</div>

        <BlogSuggestion/>
      </div>
    </div>
  );
}
