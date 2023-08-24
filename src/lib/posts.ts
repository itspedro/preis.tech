import fs from 'fs';
import path from 'path';
import frontMatter from 'front-matter';
import type { TPostFrontMatter } from '@/types/blog';

const postsDirectory = path.join(process.cwd(), 'src', 'blogs');

export function getPostSlugs() {

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));

};

export function getPostFrontMatter(slug: string): TPostFrontMatter {

  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { attributes } = frontMatter<TPostFrontMatter>(fileContents);

  return attributes;
};

export function getSortedPosts() {

  const slugs = getPostSlugs();
  
  const allPostsData = slugs.map((slug) => {
    const data = getPostFrontMatter(slug);

    return {
      slug,
      frontMatter: data,
    };
});


  return allPostsData.sort(
    ({ frontMatter: { date: a } }, {frontMatter: { date: b } }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1
      } else {
        return 0;
      }
    }
  );
};

function compileMDX(arg0: { source: string; options: { parseFrontmatter: boolean; }; }): { frontmatter: any; content: any; } | PromiseLike<{ frontmatter: any; content: any; }> {
  throw new Error('Function not implemented.');
}
