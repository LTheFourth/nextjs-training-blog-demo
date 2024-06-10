import { BlogService } from "@/utils/api/blog";
import Image from "next/image";
import CommentBoxComponent from "./comment-box";

export default async function PostCommentComponent({
  postId,
}: {
  postId: number;
}) {
  const postComment = await BlogService.getBlogComment(postId);
  return (
    <div className='w-full '>
      <h1 className='font-extrabold text-2xl my-4'>Comment</h1>

      <CommentBoxComponent />

      <div className='p-2'>
        {postComment.map((c) => (
          <div className='flex w-full border-b border-gray-200 p-2' key={c.id}>
            <Image
              width={50}
              height={50}
              alt=''
              className='rounded-full'
              src='/assets/images/avatar.jpg'
            />
            <div className='ml-2'>
              <h2 className='font-bold'>{c.user.username}</h2>
              <p className='font-light text-sm'>{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
