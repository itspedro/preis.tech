import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { h, s } from 'hastscript'


import rehypeHighlight from 'rehype-highlight/lib';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';

import Video from '@/components/Video';
import CustomImage from '@/components/CustomImage';

export function getPostSlugs() {

  const postsDirectory = path.join('src/blogs');
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));

};

export async function getPostMatter(slug: string) {

  const postsDirectory = path.join(process.cwd(), 'src/blogs');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const {frontmatter, content } = await compileMDX<{ 
    title: string,
    date: string,
    tags: string[],
    headings: string[],
    description: string,
    coverImage: string,

  }>({
    source: fileContents,
    components: {
      Video,
      CustomImage
    },
    options: {
        parseFrontmatter: true,
        mdxOptions: {
            rehypePlugins: [
                rehypeHighlight,
                rehypeSlug,
                [rehypeAutolinkHeadings, {
                  behavior: 'append',
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
                        width: 24,
                        height: 24,
                        fill: 'currentColor',
                        viewBox: '0 0 24 24',
                      },
                      s('path', {
                        d: 'M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z',
                      })
                    )
                  ],
                }],
            ],
        },
    }
})
  

  return {
    title: frontmatter.title,
    date: frontmatter.date,
    description: frontmatter.description,
    coverImage: frontmatter.coverImage,
    tags: frontmatter.tags,
    headings: frontmatter.headings,
    content: content,
  };
};

export function getSortedPosts() {

  const slugs = getPostSlugs();
  
  const allPostsData = Promise.all(
    slugs.map(async(slug) => {
      const data = await getPostMatter(slug);
      return {
        slug,
        data,
      };
    })
  );


  return allPostsData.then((posts) =>
    posts.sort((a, b) => {
      if (a.data.date < b.data.date) {
        return 1;
      } else {
        return -1;
      }
    })
  );
};