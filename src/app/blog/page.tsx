import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import BlogContent from '@/contents/blog/blog';
import { getSortedPosts } from '@/lib/posts';

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
