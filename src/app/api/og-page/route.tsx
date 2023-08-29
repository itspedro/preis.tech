import { ImageResponse } from '@vercel/og';

import { PageOgImage } from '@/components/meta/og-images';


export const runtime = 'edge';

const font400 = fetch(
  new URL('@/assets/fonts/Outfit-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

const font800 = fetch(
  new URL('@/assets/fonts/Outfit-ExtraBold.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const get = (param: string): string => searchParams.get(param) || '';

  try {
    const title = get('title');
    const description = get('description');

    return new ImageResponse(
      (
        <PageOgImage
          title={title}
          description={description} 
        />
      ),
      {
        width: 1200,
        height: 630,  
        emoji: 'fluent',
        fonts: [
          {
            data: await font400,
            name: 'Outfit',
            style: 'normal',
            weight: 400,
          },
          {
            data: await font800,
            name: 'Outfit',
            style: 'normal',
            weight: 800,
          },
        ],
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};