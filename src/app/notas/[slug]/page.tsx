import { getPostFrontMatter } from '@/lib/posts';
import 'highlight.js/styles/base16/monokai.css';
import type { Metadata } from 'next';
import PostContent from '@/contents/blog/post/post';

interface BlogPostProps {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: BlogPostProps,
): Promise<Metadata> {

  const slug = params.slug;
  const post = await getPostFrontMatter(slug);

  return {
    title: post.title,
    twitter: {
      card: 'summary_large_image',
      title: `${post.title}`,
      description: 'Site pessoal de Pedro Reis.',
    }
  };
};


async function BlogPost({ params }: BlogPostProps) {

  const slug = params.slug;
  const post = await getPostFrontMatter(slug);

  return (
    <PostContent 
      post={post}
      slug={slug}
    />
  );
};

export default BlogPost;