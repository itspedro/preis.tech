export const alt = 'Pedro Reis - Blog';

export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';

export default async function Image() {
  return await fetch(`${process.env.URL}/api/og-page?title=Blog Pessoal&description=Pedro Reis`, {
    method: 'GET'
  });
};