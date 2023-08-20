import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import MDXstyle from '@/components/blog/MDXstyle';
import { getPostFrontMatter } from '@/lib/posts';
import 'highlight.js/styles/base16/monokai.css';
import PostHeader from '@/components/blog/post-header';
import PostFooter from '@/components/blog/post-footer';
import type { Metadata } from 'next';


interface BlogPostProps {
  params: {
    slug: string;
  };
};


export function generateMetadata(
  { params }: BlogPostProps,
): Metadata {

  const slug = params.slug;
  const post = getPostFrontMatter(slug);

  return {
    title: post.title,
  };
};


function BlogPost({ params }: BlogPostProps) {


  const post = getPostFrontMatter(params.slug);

  const metadata: Metadata = {
    title: post.title,
  };

  return (
    <>
      <Header />
      <section>
        <PostHeader 
          title={post.title}
          description={post.description}
          date={post.date}
          lang={post.lang}
        />   
        <MDXstyle slug={params.slug} />
        <PostFooter 
          tags={post.tags}
        />
      </section>
      <Footer/>
    </>
  );
};

export default BlogPost;