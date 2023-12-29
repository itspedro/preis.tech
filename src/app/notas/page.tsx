import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import BlogContent from '@/contents/blog/blog';
import { getSortedPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Blog Pessoal`,
  description: `Desenvolvimento web e aprendizados.`,
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro Reis · Notas',
    description: 'Site pessoal de Pedro Reis.',
  }
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
