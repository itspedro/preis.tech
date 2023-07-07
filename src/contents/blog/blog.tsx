import BlogPreview from "./preview";
import Link from "next/link";

interface Post {
  slug: string;
  data: {
    title: string;
    description: string;
    date: string;
  }
};

interface BlogProps {
  posts: Post[];
};

function BlogContent({ posts }: BlogProps) {
  return (
    <>
      {posts.map((post, index) => {
        return(
          <Link href={`/blog/${post.slug}`} key={index}>
            <BlogPreview
              title={post.data.title}
              description={post.data.description}
              date={post.data.date}
            />
          </Link>
        );
      })}
    </>
  );
};

export default BlogContent;