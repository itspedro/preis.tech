import { getPostSlugs } from '@/lib/posts';
import { MetadataRoute } from 'next';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const posts = await getPostSlugs();

  const postsSitemap = posts.map((slug: string) => {
    return {
      url: `${process.env.URL}/notas/${slug}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: `${process.env.URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.URL}/notas`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.URL}/contato`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.URL}/ferramentas`,
      lastModified: new Date(),
    },
    ...postsSitemap,
  ];
};