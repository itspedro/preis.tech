import { getPostFrontMatter } from '@/lib/posts'

export const alt = 'Pedro Reis - Post';
export const title = 'Pedro Reis - Post';
export const description = 'Portfólio e site pessoal.';
export const url = `${process.env.URL}`;

export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';

export default async function Image({ params }: { params: { slug: string } }) {

  const post = getPostFrontMatter(params.slug);

  return await fetch(`${process.env.URL}/api/og-post?title=${post.title}&tags=${post.tags}&date=${post.date}&aspectRatio=16/9`, {
    method: 'GET'
  });

}