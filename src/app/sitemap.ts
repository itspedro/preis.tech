import { getPostSlugs } from '@/lib/posts';
import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {

  const posts = getPostSlugs();

  const postsSitemap = posts.map((slug) => {
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