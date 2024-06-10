"use client";
export default function CommentBoxComponent() {
  return (
    <div className='flex flex-col p-2'>
      <textarea
        name=''
        id=''
        placeholder='Comment'
        className='border border-gray-400 mb-2 p-2 resize-none'></textarea>
      <button className='btn'>Comment</button>
    </div>
  );
}
