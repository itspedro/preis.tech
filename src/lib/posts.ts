import frontMatter from 'front-matter';
import type { TPostFrontMatter } from '@/types/types';
import { notFound } from 'next/navigation'
import { fetcher } from './fetcher';
import { serialize } from 'next-mdx-remote/serialize'
import { mdxOptions } from '../../mdx-options';

export async function getPostSlugs() {

  const notesData: Array<any> = await fetcher().then((data =>  data as Array<any>));
  const fileNames: any = notesData.map((fileName: any) => {
    return fileName.name;
  });

  return fileNames.map((fileName: any) => fileName.replace(/\.mdx$/, ''));

};

export async function getFileFromURL(url: string): Promise<string> {
  try {
    const res = await fetch(url);
    const fileContent = await res.text();
    return fileContent;
  } catch (error) {
    notFound();
  }
}

export async function getMDXcontent(slug: string): Promise<any> {

  const noteData: any = await fetcher(slug).then((data =>  data as any));
  const fullPath: any = noteData.download_url;

  const fileContent = await getFileFromURL(fullPath);  

  const { body } = await frontMatter(fileContent);

  const res = await serialize(body, {
    mdxOptions: mdxOptions as any,
  })

  return res;
}

export async function getPostFrontMatter(slug: string): Promise<TPostFrontMatter> {

  const noteData: any = await fetcher(slug).then((data =>  data as any));
  const fullPath: any = noteData.download_url;

  const fileContent = await getFileFromURL(fullPath);  

  const { attributes } = frontMatter<TPostFrontMatter>(fileContent);

  return attributes;
};

interface SortedPostsType {
  slug: string;
  frontMatter: TPostFrontMatter;
}

export async function getSortedPosts(): Promise<Array<SortedPostsType>> {

  const slugs = await getPostSlugs();

  const allPostsData: Array<SortedPostsType> = await slugs.map(async (slug: string) => {
    const data = await getPostFrontMatter(slug);
    return {
      slug,
      frontMatter: data,
    } as SortedPostsType;
  });

  return Promise.all(allPostsData).then((data) => {
    return data.sort(
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
  });
};


export function getPostPathImport(slug: string): string {
  return `https://raw.githubusercontent.com/itspedro-lab/Notes/main/${slug}.mdx`;
}