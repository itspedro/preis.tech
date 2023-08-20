import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import BlogContent from '@/contents/blog/blog';
import { getSortedPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Blog`,
};

export default async function Blog() {

  const posts = getSortedPosts();

  return (
   <>
    <Header />
    <BlogContent posts={posts} />
    <Footer />
   </>
  );
};
