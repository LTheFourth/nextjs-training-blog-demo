import BlogDetail from "@/app/_modules/blog/page/blog-detail/blog-detail";

export default function BlogDetailPage({
  params,
}: {
  params: { blogId: number };
}) {
  return <BlogDetail postId={params.blogId}></BlogDetail>;
}
