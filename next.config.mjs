import nextMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import remarkFrontMatter from 'remark-frontmatter';

import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeTOC from 'rehype-toc';

import { h, s } from 'hastscript'


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**'
      },
    ],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkFrontMatter,
    ],
    rehypePlugins: [
      rehypeHighlight,
      rehypeSlug,
      [rehypeTOC, {
        headings: ["h1"],
        customizeTOC: (toc) => {
          toc.children.unshift(
            h('div', 
              { className: 'toc-title' },
              h('span', 'Conteúdos'), 
              h('a', { href: '#top' }, 'voltar ao topo ↑'),

            ),
          );
          return toc;
        },
      }],
        
      [rehypeAutolinkHeadings, {
        behavior: 'prepend',
        properties: {
          class: 'autolink-header',
          ariaHidden: true,
          tabIndex: -1,
        },
        content: [
          h('span.visually-hidden', 'permalink'),
          s('svg.autolink-svg',
            {
              xmlns: 'http://www.w3.org/2000/svg',
              width: 17,
              height: 17,
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: 1.5,
              viewBox: '0 0 24 24',
            },
            s('path', {
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              d: 'M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5',
            })
          )
        ],
      }],
    ],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX(nextConfig);
