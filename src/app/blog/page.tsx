import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import BlogContent from '@/contents/blog/blog';
import { getSortedPosts } from '@/lib/posts'

export default async function Blog() {

  const posts = await getSortedPosts();

  return (
   <main>
    <Header />
    <div>
      <BlogContent posts={posts} />
    </div>
    <Footer />
   </main>
  );
};
