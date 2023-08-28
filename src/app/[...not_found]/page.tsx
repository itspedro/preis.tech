
import NotFoundContents from '@/contents/404';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Página não encontrada`
};

function NotFound() {
  return (
    <>
      <NotFoundContents />
    </>
  );
}

export default NotFound;