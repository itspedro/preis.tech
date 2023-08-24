import { getPostFrontMatter } from '@/lib/posts'
import { ImageResponse } from 'next/server'
 
export const runtime = 'edge'
 
export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {

  const post = getPostFrontMatter(params.slug);


  return encodeURI(`preis-tech-git-dev-itspedro.vercel.app/api/og-post?title=${post.title}&tags=${post.tags}&date=${post.date}&aspectRatio=16/9`);

}
const getBaseUrl = () => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
      return 'https://www.preis.tech';
    case 'preview':
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
    default:
      return `http://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  }
};