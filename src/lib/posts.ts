import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';


export function getPostSlugs() {

  const postsDirectory = path.join('src/blogs');
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''));

};

export function getPostMatter(slug: string) {

  const postsDirectory = path.join(process.cwd(), 'src/blogs');
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  

  return {
    title: data.title,
    date: data.date,
    description: data.description,
    content: content,
  };
};

export function getSortedPosts() {

  const slugs = getPostSlugs();

  const allPostsData = slugs.map((slug) => {
    const data = getPostMatter(slug);
    return {
      slug,
      data,
    };
  });

  return allPostsData.sort(
    ({ data: { date: a } }, { data: { date: b } }) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }
  );
};