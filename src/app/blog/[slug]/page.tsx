import MDXstyle from "@/components/MDXstyle";
import { getPostMatter } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";

async function BlogPost({ params }: { params: { slug: string } }) {

  const props = getPostMatter(params.slug);

  return (
    <MDXstyle>
      <h1>{props.title}</h1>
      <MDXRemote source={props.content}/>
    </MDXstyle>
  );
};

export default BlogPost;