export const alt = 'Pedro Reis - Site';

export const size = {
  width: 1200,
  height: 630,
};
 
export const contentType = 'image/png';

export default async function Image() {
  return await fetch(`${process.env.URL}/api/og-page?title=Pedro Reis&description=Portfólio`, {
    method: 'GET'
  });
};