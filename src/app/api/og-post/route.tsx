import { ImageResponse } from '@vercel/og';

import { PostOgImage } from '@/components/meta/og-images';

import { formatTime } from '@/utils/misc';


export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const get = (param: string): string => searchParams.get(param) || '';
  
  const imageSize = {
    width: 1200,
    height: 630,
  };

  const aspectRatio = get('aspectRatio');

  switch (aspectRatio) {
    case '1/1':
      imageSize.width = 1200;
      imageSize.height = 1200;
      break;
    case '4/3':
      imageSize.width = 1200;
      imageSize.height = 900;
      break;
    case '16/9':
      imageSize.width = 1200;
      imageSize.height = 675;
      break;
    default:
      break;
  }

  try {
    const title = get('title');
    const tags = get('tags') ? get('tags').split(',') : undefined;
    const date = get('date') ? formatTime(get('date')) : undefined;

    return new ImageResponse(
      (
        <PostOgImage
          title={title}
          tags={tags}
          date={date}
        />
      ),
      {
        width: imageSize.width,
        height: imageSize.height,
        emoji: 'fluent',
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};