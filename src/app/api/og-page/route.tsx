import { ImageResponse } from '@vercel/og';

import { PageOgImage } from '@/components/meta/og-images';

import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const get = (param: string): string => searchParams.get(param) || '';

  try {
    const title = get('title');
    const description = get('description');

    return new ImageResponse(
      <PageOgImage title={title} description={description} />,
      {
        width: 1200,
        height: 630,
        emoji: 'fluent',
      }
    );
  } catch (e) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
};