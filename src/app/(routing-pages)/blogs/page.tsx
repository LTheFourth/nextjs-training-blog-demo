import BlogListPage from "@/app/_modules/blog/page/blog-list/blog-list";

export default function BlogsPage({
  searchParams,
}: Readonly<{
  searchParams: { [key: string]: string | string[] | undefined };
}>) {
  return <BlogListPage searchParams={searchParams}></BlogListPage>;
}
