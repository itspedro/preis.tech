import { MetadataRoute } from 'next';
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.URL}/blog`,
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
  ];
};